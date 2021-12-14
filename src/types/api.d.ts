declare interface IApiValidationError {
  attribute: string | null;
  code: string;
  fullMessage: string | null;
  message: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare interface IApiMutationResponse<T = Record<string, any>> {
  data: T;
  errors: IApiValidationError[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type IApiFilters = Record<string, any>
