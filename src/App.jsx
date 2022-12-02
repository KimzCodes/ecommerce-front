import { Container } from "react-bootstrap";
import Header from "./components/Header";

import { ShoppingCardItem, Item, Category } from "./components/ecom-ui";
function App() {
  return (
    <Container>
      <Header />
      <ShoppingCardItem />
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
