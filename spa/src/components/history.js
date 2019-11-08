import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
history.pushLater = (...args) => setImmediate(() => history.push(...args))
export default history
