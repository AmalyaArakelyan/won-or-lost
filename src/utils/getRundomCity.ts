import cities from '../halpers/city.list.json';

export default function getRandomCity() {
  const length = (cities as any).length;
  const random = Math.floor(Math.random() * length);
  console.log(random);
  console.log(cities);
  return (cities as any)[random];
}
