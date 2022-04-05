import * as path from "path";
import { fileURLToPath } from 'url';
import * as fs from "fs";
import * as d3 from "d3";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function main() {
  const csvPath = path.resolve(__dirname, "../../data/instagram_influencers.csv");
  const csvData = fs.readFileSync(csvPath).toString();
  const parsedInfluencers = d3.csvParse(csvData);

  parsedInfluencers.forEach(influencer => {
    influencer["Followers"] = parseAbbreviatedNumbers(influencer["Followers"]).toString();
    influencer["Authentic engagement"] = parseAbbreviatedNumbers(influencer["Authentic engagement"]).toString();
    influencer["Engagement avg"] = parseAbbreviatedNumbers(influencer["Engagement avg"]).toString();
  });

  const influencersByCategory = d3.group(parsedInfluencers, influencer => influencer.category_1);
  
  const topInfluencersPerCategory = [];
  for (let [category, influencers] of influencersByCategory.entries()) {
    const maxIndex = d3.maxIndex(influencers, influencer => influencer.Followers);
    const topInfluencer = influencers[maxIndex];
    topInfluencersPerCategory.push({category, topInfluencerInstaName: topInfluencer["Influencer insta name"], topInfluencer});
  }

  const influencersByCountry = d3.group(parsedInfluencers, influencer => influencer["Audience country(mostly)"]);
  
  const topInfluencersByCountry = [];
  for (let [country, influencers] of influencersByCountry.entries()) {
    const maxIndex = d3.maxIndex(influencers, influencer => influencer["Engagement avg"]);
    const topInfluencer = influencers[maxIndex];
    topInfluencersByCountry.push({country, topInfluencerInstaName: topInfluencer["Influencer insta name"], topInfluencer});
  }

  return {topInfluencersPerCategory, topinfluencersByCountry: topInfluencersByCountry};
}

const parseAbbreviatedNumbers = (number: string) =>
{
  var base = parseFloat(number);
  if (number.toLowerCase().match(/k/))
  {
    return Math.round(base * 1000);
  }
  else if ( number.toLowerCase().match(/m/))
  {
    return Math.round(base * 1000000);
  } else {
    return base;
  }
}