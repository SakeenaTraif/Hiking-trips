import hikingList from "../hikingList";
import {TripWrapper} from "../styles";

const Trips = (props) => {
  const trip = props.trip;
  return (
    <TripWrapper>
      <img src={trip.image} alt={trip.name} />
      <p>{trip.name}</p>
      <p>{trip.city}</p>
      <p>{trip.length} miles</p>
      </TripWrapper>
  );
};

export default Trips;
