import "./Products.css";

import Card from "../Card";


const Products = ({ result }) => {
  return (
    <>
      <section className="card-container">{result}</section> 
    </>
  );
};

export default Products;