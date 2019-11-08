import moment from 'moment'

export default (ctx, otherThing) => {
  // eslint-disable-next-line no-console
  console.log('\x1b[33m%s\x1b[0m', `[${moment().format("YYYY-MM-DD h:mm:ss")}] Worker did ${otherThing}!`)
}
