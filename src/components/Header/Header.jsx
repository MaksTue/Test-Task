import headerLogo from "/header-logo.svg";
import shapeLogo from "/Shape.svg";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.containerItems}>
          <div className={classes.title}>
            <img src={headerLogo} alt="Logo" />
            <span className={classes.titleText}>
              Front-end Developer Test Task
            </span>
          </div>
          <div className={classes.shopIcon}>
            <span className={classes.iconText}>cart</span>
            <img src={shapeLogo} alt="Shape" />
          </div>
        </div>
      </div>
    </header>
  );
}
