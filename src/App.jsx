import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Category from "./components/Category";
import Item from "./components/Item";
function App() {
  return (
    <Container>
      <Header />

      <div className="grid">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>

      <div className="grid">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </Container>
  );
}

export default App;
