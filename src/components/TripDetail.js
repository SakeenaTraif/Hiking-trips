import { DetailWrapper } from "../styles";
import { Redirect, useParams } from "react-router-dom";
import hikingList from "../hikingList";

const TripDetail = (props) => {
  const hikingList = props.hikingList;
  const { tripSlug } = useParams();
  const trip = hikingList.find((trip) => trip.slug === tripSlug);

  if (!trip) return <Redirect to="/" />;
  return (
    <DetailWrapper className="text-left">
      <img src={trip.image} alt={trip.name} />
      <p>Name: {trip.name}</p>
      <p>City: {trip.city}</p>
      <p>Difficulty: {trip.difficulty}</p>
      <p>Length: {trip.length}</p>
      <p>Rating: {trip.rating}</p>
      {/* <button
        className="btn btn-outline-info"
        onClick={() => props.setTrip(null)}
      >
        Go back home!
      </button> */}
    </DetailWrapper>
  );
};

export default TripDetail;
