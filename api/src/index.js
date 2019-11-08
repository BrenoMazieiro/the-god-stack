import server from './interfaces/http/server'
import workers from'./interfaces/background/workers'

(() => {
  if(process.env.WORKER === 'on') workers.init()
  server.init()
}) ()
