import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Ferrari 458</Link>
        </li>
        <li>
          <Link to="/products/p2">Bugatti Veyron</Link>
        </li>
        <li>
          <Link to="/products/p3">Ford Focus RS</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
