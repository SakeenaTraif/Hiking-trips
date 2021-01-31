import HikingList from "../hikingList";

const ViewList = (props) => {
  const trip = props.trip;
  return (
    <HikingList>
      <img src={trip.image} alt={trip.name} />
      <p>{trip.city}</p>
      <p>{trip.length}</p>
    </HikingList>
  );
};

export default ViewList;
