const prompt = require("prompt-sync")()
const data = require("./platforms.js").sort((a, b) => a.name.localeCompare(b.name))

for (const [index, platform] of Object.entries(data)) {
  console.log(`[${index}] ${platform.name}`)
}
