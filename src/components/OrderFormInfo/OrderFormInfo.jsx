import classes from "./OrderFormInfo.module.css";
import Form from "../Form/Form";
import Button from "../Button/Button";
import arrow from "/arrow.svg";
export default function OrderFromInfo() {
  return (
    <div className={classes.container}>
      <div className={classes.progressBar}>
        <div className={`${classes.step} ${classes.active}`}>Shipping</div>
        <img src={arrow} alt="arrow" />
        <div className={classes.step}>Billing</div>
        <img src={arrow} alt="arrow" />
        <div className={classes.step}>Payment</div>
      </div>
      <h2 className={classes.formTitle}>Shipping Info</h2>
      <Form />
      <Button />
    </div>
  );
}
