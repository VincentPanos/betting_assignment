export async function getSports<T>(url: string) {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as T;
  });
}
