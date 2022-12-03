import { Container, Button } from "react-bootstrap";
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
      <div className="notFound">
        <h1>404</h1>
        <p>Page Not Found</p>

        <Button variant="link">Go Back</Button>
      </div>
    </Container>
  );
}

export default App;
