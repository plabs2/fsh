const prompt = require("prompt-sync")()
const data = require("./platforms.js")

for (const [index, platform] of Object.entries(data)) {
  console.log(`[${index}] ${platform.name}`)
}
