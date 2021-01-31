import "./App.css";
import {Title} from "./styles";
import TripList from "./components/TripList";

function App() {
  return (
    <div>
      <Title>Hiking Trips</Title>
      <TripList />;
    </div>
  );
}

export default App;
