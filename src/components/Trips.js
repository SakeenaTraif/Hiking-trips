import hikingList from "../hikingList";
import { TripWrapper } from "../styles";
import TripDetail from "./TripDetail";
import { NavLink } from "react-router-dom";

const Trips = (props) => {
  const trip = props.trip;
  return (
    <TripWrapper>
      <NavLink to={`/${trip.slug}`} className="btn btn-outline-info">
        <img src={trip.image} alt={trip.name} />
      </NavLink>
      <p>{trip.name}</p>
      <p>{trip.city}</p>
      <p>{trip.length} miles</p>
    </TripWrapper>
  );
};

export default Trips;
