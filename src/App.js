import "./App.css";
import { Title } from "./styles";
import TripList from "./components/TripList";
import TripDetail from "./components/TripDetail";
import { useState } from "react";
import hikingList from "./hikingList";
import { Route, Switch } from "react-router";

function App() {
  const [trip, setTrip] = useState(null);
  const [_hikingList, setTrips] = useState(hikingList);

  const setView = () => {
    if (trip !== null) return <TripDetail trip={trip} setTrip={setTrip} />;
    else return <TripList setTrip={setTrip} hikingList={_hikingList} />;
  };

  return (
    <div>
      <Title>Hiking Trips</Title>
      <Switch>
        <Route path="/:tripSlug">
          <TripDetail hikingList={_hikingList} />
        </Route>
        <Route exact path="/">
          <TripList hikingList={_hikingList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
