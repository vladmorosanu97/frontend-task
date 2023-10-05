import ITrip from "../models/Trip";

import http from "../utils/http-utils";

const getAll = () => {
    return http.get<Array<ITrip>>("/trips");
};

const getById = (id: number) => {
    return http.get<Array<ITrip>>(`/trips/${id}`);
};

const TripService = {
    getAll,
    getById
};

export default TripService;