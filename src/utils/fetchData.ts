import request from '@/request';

export function fetchData<T>(
  url: string,
  method: 'get' | 'post' = 'get',
  params = {},
): () => Promise<T> {
  return async () => {
    let result: AjaxResponse<T> | undefined = undefined;

    if (method === 'get') {
      result = await request.get<AjaxResponse<T>>(url, params);
    } else if (method === 'post') {
      result = await request.post(url, { data: params });
    }

    if (result) {
      const { data, success } = result;
      if (success) {
        return Promise.resolve(data.data);
      }
    }
    return Promise.resolve(undefined as unknown as T);
  };
}
