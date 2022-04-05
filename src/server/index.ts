import * as path from "path";
import { fileURLToPath } from 'url';
import * as fs from "fs";
import * as d3 from "d3";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function main() {
  const csvPath = path.resolve(__dirname, "../../data/instagram_influencers.csv");
  const csvData = fs.readFileSync(csvPath).toString();
  const influencers = d3.csvParse(csvData);

  return influencers;
}