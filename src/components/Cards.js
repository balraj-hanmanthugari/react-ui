import React from 'react';
import './style.css';

export default function Cards() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const grouped = Object.groupBy(data, (item) => item.category);
        console.log(grouped);
        setProducts(data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="product-cards">
        {products?.map((product) => {
          return (
            <>
              <Card key={product.id} product={product}></Card>
            </>
          );
        })}
      </div>
    </div>
  );
}

export const Card = (props) => {
  console.log(props);
  return (
    <div className="card-container">
      <div>{props.product?.category}</div>
      <img src={props.product?.image} />
      <h1 className="card-title">{props.product?.title}</h1>
      <p className="card-description">{props.product?.description}</p>
      <div className="card-rating">
        <span>Rating: {props.product?.rating?.rate}</span>
        <span> - Rated By {props.product?.rating?.count}</span>
      </div>
    </div>
  );
};
