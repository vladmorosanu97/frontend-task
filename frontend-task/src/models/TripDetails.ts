import Advantage from "./Advantage";

export default interface ITripDetails {
  id: number;
  photoUrl: string;
  title: string;
  subtitle: string;
  days: number;
  co2Kilograms: number;
  rating: number;
  countries: Array<string>;
  description: string;
  advantages: Array<Advantage>;
}
