import TripCard from "../TripCard/TripCard";
import { SimpleGrid } from "@chakra-ui/react";

import "./Trips.scss";
import { useEffect, useState } from "react";
import ITrip from "../../models/Trip";

import TripService from "../../services/TripService";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const Trips = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(16);
  const [displayedTrips, setDisplayedTrips] = useState<Array<ITrip>>([]);
  const [trips, setTrips] = useState<Array<ITrip>>([]);

  useEffect(() => {
    retrieveTrips();
  }, []);

  const handleShowMore = (id: number) => {
    navigate("/trips/" + id);
  };

  const retrieveTrips = () => {
    TripService.getAll()
      .then((response: any) => {
        setTrips(response.data);
        setDisplayedTrips(response.data.slice(0, count));
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const fetchItems = () => {
    setTimeout(() => {
      setDisplayedTrips(trips.slice(0, count + 12));
      setCount(count + 12);
    }, 500);
  };

  return (
    <div className="container">
      <InfiniteScroll
        dataLength={displayedTrips.length}
        next={fetchItems}
        hasMore={true}
        loader={<h4></h4>}
      >
        <SimpleGrid
          p={10}
          spacing="20px"
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        >
          {displayedTrips &&
            displayedTrips.map((trip) => (
              <TripCard trip={trip} handleShowMore={handleShowMore} />
            ))}
        </SimpleGrid>
      </InfiniteScroll>
    </div>
  );
};

export default Trips;
