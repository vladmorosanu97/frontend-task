import ITrip from "../models/Trip";
import ITripDetails from "../models/TripDetails";
import http from "../utils/http-utils";

const getAll = () => {
  return http.get<Array<ITrip>>("/trips");
};

const getById = (id: number) => {
  return http.get<ITripDetails>(`/trips/${id}`);
};

const TripService = {
  getAll,
  getById,
};

export default TripService;
