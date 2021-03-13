import bcrypt from 'bcrypt'
import crypto from 'crypto'

const encrypt = {
  strong: {
    encrypt: (pass) => bcrypt.hashSync(pass, 10),
    compare: (plainPass, hash) => bcrypt.compare(plainPass, hash),
  },
  weak: {
    encrypt: (data) => crypto.createHmac('sha256', process.env.HASH_SECRET || 'vigil').update(data).digest('hex'),
  },
  random: () => crypto.randomInt(999999999999),
  randomDataForRefreshToken: (ctx, userId) => userId + ctx.core.encrypt.random() + Date.now(),
}

export { encrypt }
