import { Container } from "@material-ui/core";
import EventList from "./components/EventList";

function App(props) {
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Event countdown</h1>
      <EventList />
    </Container>
  );
}

export default App;
