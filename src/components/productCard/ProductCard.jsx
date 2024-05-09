import classes from "./ProductCard.module.css";

export default function ProductCard() {
  return (
    <div className={classes.productCard}>
      <img
        src="/productsImage/boot.png"
        alt="Produtc"
        className={classes.productImage}
      />
      <div className={classes.cardInfo}>
        <div className={classes.productInfo}>
          <span className={classes.productControl}>The Chelsea Boot</span>
          <span className={classes.productDescription}>Black</span>
          <span className={classes.productDescription}>Quantity: 1</span>
        </div>
        <span className={classes.productControl}>$235</span>
      </div>
    </div>
  );
}
