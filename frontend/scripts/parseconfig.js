#!/usr/local/bin/node

const fs = require('fs')

const projectVars = [
  'HTTP_API_URL',
  'HTTP_SPA_URL',
  'WS_API_URL',
  'CLIENT',
  'DEBUG',
]

const configFileContent = projectVars.map((entry) => {
  let envEntry = process.env[entry]

  if (envEntry === 'true') envEntry = true
  if (envEntry === 'false') envEntry = false

  return envEntry ? `export const ${entry} = '${envEntry}'` : null
}).filter((entry) => entry)

if (configFileContent.length) {
  fs.writeFileSync('src/environment/index.js', `${configFileContent.join('\n')}\n`)
}
