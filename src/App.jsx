import { Container, Button } from "react-bootstrap";
import Header from "./components/layout/Header";

import { CartItem, Product, Category } from "./components/ecom-ui";
function App() {
  return (
    <Container>
      <Header />
      <h2>Shopping cart</h2>
      <CartItem />
      <br /> <br /> <br />
      <hr />
      <h2>Categories</h2>
      <div className="grid">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
      <br /> <br /> <br />
      <br />
      <hr />
      <h2>Product </h2>
      <div className="grid">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <br /> <br /> <br />
      <div className="notFound">
        <h1>404</h1>
        <p>Page Not Found</p>

        <Button variant="link">Go Back</Button>
      </div>
    </Container>
  );
}

export default App;
