const workerErrorHandling = (msg, code, errors) => {
  // It should save the error somewhere
  // eslint-disable-next-line no-console
  console.log(msg, code, errors)
}

export { workerErrorHandling }
