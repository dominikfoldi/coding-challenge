#!/usr/bin/env node

import api from "../server"

async function main() {
  console.log(await api());
}

(async () => {
  try {
    await main();
  } catch (error) {
    console.log(error);
  }
})();
