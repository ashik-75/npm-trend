const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface ClientOptions {
  data?: Record<string, string>;
  token?: string;
  headers?: Record<string, string>;
}

const client = async (
  endpoint: string,
  { data, token, headers: customHeaders, ...customConfig }: ClientOptions = {},
) => {
  const config: RequestInit = {
    method: data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": data ? "application/json" : "",
      ...customHeaders,
    },
    ...customConfig,
  };

  const response = await fetch(`${BASE_URL}/${endpoint}`, config);

  if (response.ok) {
    return response.json();
  } else {
    const errorData = await response.json();
    return Promise.reject(errorData);
  }
};

export { client };
