import classes from "./OrderSummary.module.css";
import ProductCard from "../productCard/ProductCard";

export default function OrderSummary() {
  return (
    <div className={classes.orderSum}>
      <div className={classes.summaryHeader}>
        <h3 className={classes.orderTitleText}>Order Summary</h3>
        <a className={classes.editOrder}>edit order</a>
      </div>
      <div className={classes.produtcsContainer}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className={classes.subTotal}>
        <div className={classes.totalDescription}>
          <span className={classes.totalText}>Subtotal</span>
          <span className={classes.totalText}>Shipping</span>
          <span className={classes.totalText}>Taxes</span>
        </div>
        <div className={classes.totalDescription}>
          <span className={classes.totalText}>$398</span>
          <span className={classes.totalText}>Free</span>
          <span className={classes.totalText}>$12.12</span>
        </div>
      </div>
      <div className={classes.totalInfo}>
        <span className={classes.totalPriceText}>Total</span>
        <span className={classes.totalPriceText}>$410.12</span>
      </div>
      <span className={classes.orderFooter}>
        All purchases are subject to our Terms and Conditions.
      </span>
    </div>
  );
}
