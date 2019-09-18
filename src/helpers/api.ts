export const apiCall = <T>(url: string): Promise<T> => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<T>;
    })
    .then(data => {
      return data;
    })
    .catch((error: Error) => {
      // tslint:disable-next-line: no-console
      console.error(error);
      throw error;
    });
};
