import { types, flow } from 'mobx-state-tree'
import { ApiState } from './General.types'
import { AxiosResponse } from 'axios'

type FetcherTypes = {
  fetcher: (api: any) => Promise<any>,
  onSuccess?: (response: AxiosResponse<any>) => void,
  onError?: (err : Error) => void
}

const defaultFetchConfig : FetcherTypes = {
  fetcher: () => Promise.reject(),
  onSuccess: () => {},
  onError: () => {}
}

const ApiStore = types
  .model('ApiStore', {
    state: types.optional(types.enumeration<ApiState>(Object.values(ApiState)), ApiState.INITIAL),
    error: types.maybeNull(types.string)
  })
  .views(self => ({
    get hasError() {
      return !!self.error
    },
    get api() {
      throw new Error('Api not defined in views!')
    }
  }))
  .actions(self => ({
    fetch: flow(function * (config : FetcherTypes = defaultFetchConfig) : Generator<Promise<any>, void, any> {
      const {fetcher, onSuccess, onError} = config
      self.state = ApiState.LOADING
      try {
        const { api } = self
        const response = yield fetcher(api)
        onSuccess(response)
      } catch(err) {
        self.state = ApiState.ERROR
        if(!err.response || err.response.status == null) {
          throw new Error(err);
        } else {
          onError(err)
        }
      }
    })
  }))

export default ApiStore