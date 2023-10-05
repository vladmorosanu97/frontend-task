
import TripCard from "../TripCard/TripCard";
import { SimpleGrid } from '@chakra-ui/react';

import "./Trips.scss";
import { useEffect, useState } from "react";
import ITrip from "../../models/Trip";

import TripService from "../../services/TripService";
import { useNavigate } from "react-router-dom"; 


const Trips = () => {
    const navigate = useNavigate(); 

    const [trips, setTrips] = useState<Array<ITrip>>([]);

    useEffect(() => {
        retrieveTrips();
    }, []);

    const handleShowMore = (id: number) => { 
        navigate('/trips/' + id);
    } 

    const retrieveTrips = () => {
        TripService.getAll()
          .then((response: any) => {
            setTrips(response.data);
            console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };

    return (
        <div className="container">
           <SimpleGrid p={10} spacing="20px" templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
                {trips && trips.map((trip) => <TripCard trip={trip} handleShowMore={handleShowMore} />)}
            </SimpleGrid>
        </div>
    )
}

export default Trips;