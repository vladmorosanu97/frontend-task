export default interface ITrip {
  id: number;
  photoUrl: string;
  title: string;
  subtitle: string;
  days: number;
  co2Kilograms: number;
  rating: number;
  countries: Array<string>;
}
