function success(mock : Object, data : Object) : void {
  mock.mockImplementationOnce(() => Promise.resolve({ data: (data ? data : {}) }))
}

function error(mock : Object, data : Object, status : number) : void {
  const error = ({
    response: {
      data: (data ? data : {}),
      status
    }
  });
  mock.mockImplementationOnce(() => Promise.reject(error))
}
export {
  success,
  error
}