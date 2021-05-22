import { Container } from "@material-ui/core";
import Event from "./components/Event";

function App() {
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Event countdown</h1>
      <Event />
    </Container>
  );
}

export default App;
