function success(mock : jest.Mocked<any>, data? : Object) : void {
  mock.mockImplementationOnce(() => Promise.resolve({ data: (data ? data : {}) }))
}

function error(mock : jest.Mocked<any>, data? : Object, status? : number) : void {
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