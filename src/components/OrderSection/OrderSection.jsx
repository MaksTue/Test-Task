import OrderFormInfo from "../OrderFormInfo/OrderFormInfo";
import OrderSummary from "../OrderSummary/OrderSummary";
import classes from "./OrderSection.module.css";

export default function OrderSection() {
  return (
    <main className={classes.container}>
      <OrderFormInfo />
      <OrderSummary />
    </main>
  );
}
