type NamedEntityResponse = {
  id: number;
  name: string;
}

type PagedResponse<T> = {
  count: number;
  list: Array<T>;
}

enum ApiState {
  INITIAL = 'INITIAL',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  LOADED = 'LOADED'
}

export {
  ApiState,
  NamedEntityResponse,
  PagedResponse
}