import { server } from './interfaces/http/server.js'
import { workers } from './interfaces/workers/workers.js'

server.init()
workers.init()
