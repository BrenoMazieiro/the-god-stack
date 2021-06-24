import { server } from './interfaces/http/server.js'
import { workers } from './interfaces/workers/workers.js'

server.init()
// workers.init().then(() => null).catch(() => null)

async function closeGracefully() {
  await server.stop()
  await workers.stop()
  process.exit()
}
process.on('SIGINT', closeGracefully)
