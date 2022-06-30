interface AjaxResponse<T> {
  data: {
    data: T;
  };
  success: boolean;
  code: number;
}

type Obj = Record<string, any>;
