// import packages
import { Container } from "react-bootstrap";
// import components
import Comp1 from "./components/Comp1";
// import styles
import "./App.css";

const App = () => {
  return (
    <Container className="App">
      Admin Dashboard
      <Comp1 />
    </Container>
  );
};

export default App;
