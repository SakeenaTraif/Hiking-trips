//data
import hikingList from "../hikingList";
import { useState } from "react";

//components
import Trips from "./Trips";
import SearchBar from "./SearchBar";
import RangeBar from "./RangeBar";
import Difficulties from "./Difficulties";

import { List } from "../styles";

const TripList = () => {
  const [query, setQuery] = useState("");
  const [range, setRange] = useState(null);
  const [diff, setDiff] = useState(null);

  const tripList = hikingList
    .filter((trip) => trip.name.toLowerCase().includes(query))
    .map((trip) => <Trips trip={trip} key={trip.id} />);

  const triplength = hikingList
    .filter((trip) => trip.length < range)
    .map((trip) => <Trips trip={trip} key={trip.id} />);

  const difficulty = hikingList
    .filter((trip) => trip.difficulty.includes(diff))
    .map((trip) => <Trips trip={trip} key={trip.id} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <RangeBar setRange={setRange} />
      <Difficulties setDiff={setDiff} />
      <List>{tripList}</List>
      <List>{triplength}</List>
      <List>{difficulty}</List>
    </>
  );
};

export default TripList;
