import { API_KEY } from '../halpers/config';

export default async function fetchData(city: number) {
  const DEFAULT_HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const OPTIONS = { method: 'GET', headers: { ...DEFAULT_HEADERS } };

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${API_KEY}&units=metric`,
    OPTIONS,
  );

  //localhost:3000/
  return response.json();
}
