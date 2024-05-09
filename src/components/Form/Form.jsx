import classes from "./Form.module.css";

export default function Form() {
  return (
    <form className={classes.form}>
      <label htmlFor="recipient" className={classes.formInfoTitle}>
        Recipient
      </label>
      <input
        type="text"
        id="recipient"
        name="name"
        placeholder="Full Name"
        className={classes.input}
      />
      <div className={classes.containerLine}>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Daytime Phone"
          className={classes.input}
        />
        <span className={classes.PhoneInfo}>For delivery questions only</span>
      </div>
      <label
        htmlFor="address"
        className={`${classes.formInfoTitle} ${classes.labelAddress}`}
      >
        Address
      </label>
      <input
        type="text"
        id="address"
        name="address"
        placeholder="Street Address"
        className={classes.input}
      />
      <input
        type="text"
        id="apt"
        name="apt"
        placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
        className={classes.input}
      />
      <input
        type="text"
        id="city"
        name="city"
        placeholder="City"
        className={`${classes.input} ${classes.cityInput}`}
      />
      <div className={classes.containerLine}>
        <input
          type="text"
          id="country"
          name="country"
          placeholder="Country"
          className={`${classes.input} ${classes.countryInput}`}
        />
        <input
          type="text"
          id="zip"
          name="zip"
          placeholder="ZIP"
          className={classes.input}
        />
      </div>
    </form>
  );
}
