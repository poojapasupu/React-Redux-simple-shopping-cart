import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyproducts = [
  {
    id: "p1",
    price: 6,
    title: "book",
    description: "first book",
  },
  {
    id: "p2",
    price: 8,
    title: "cook",
    description: "first cook",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyproducts.map((product)=>{return <ProductItem
        key={product.id}
        id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />})}
      </ul>
    </section>
  );
};

export default Products;
