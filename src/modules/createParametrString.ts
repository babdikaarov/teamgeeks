type Params = (params: { [s: string]: any } | ArrayLike<string | number | boolean>) => string;

export const createParameterString: Params = (params) => {
   return Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join("&");
};
