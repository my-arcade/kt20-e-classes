import { types, flow } from 'mobx-state-tree'
import { ApiState } from './General.types'
import { AxiosResponse } from 'axios'

type FetcherTypes = {
  fetcher: (api: any) => Promise<any>,
  onSuccess?: (response: AxiosResponse<any>) => void,
  onError?: (err : Error) => void,
  onStateChange?: (state : ApiState) => void
}

const defaultFetchConfig : FetcherTypes = {
  fetcher: () => Promise.reject(),
  onSuccess: () => {},
  onError: () => {},
  onStateChange: () => {}
}

const ApiStore = types
  .model('ApiStore', {
  })
  .views(() => ({
    get api() {
      throw new Error('Api not defined in views!')
    }
  }))
  .actions(self => ({
    fetch: flow(function * (config : FetcherTypes = defaultFetchConfig) : Generator<Promise<any>, void, any> {
      const {fetcher, onSuccess, onError, onStateChange} = config
      onStateChange(ApiState.LOADING)
      try {
        const { api } = self
        const response = yield fetcher(api)
        onSuccess(response)
        onStateChange(ApiState.LOADED)
      } catch(err) {
        onStateChange(ApiState.ERROR)
        if(!err.response || err.response.status == null) {
          throw new Error(err);
        } else {
          onError(err)
        }
      }
    })
  }))

export default ApiStore