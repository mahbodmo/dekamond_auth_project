export function useApi(url: string) {
  const response = fetch(url).then((res) => res.json());

  return response;
}
