import cities from '../halpers/city.list.json';

export default function getRandomCity() {
  const length = cities.length;
  const random = Math.floor(Math.random() * length);
  console.log(random);
  console.log(cities);
  debugger;
  return cities[random];
}
