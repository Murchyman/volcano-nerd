import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.left}>
          <span className={styles.heading}>
            <span>
              Search the{" "}
              <span className={styles.blue}>Smithsonian institutions</span>{" "}
              global <span className={styles.orange}>volcanism</span> database
            </span>
          </span>
          <div className={styles.subHeading}>
            <h3>
              thousands of nerds like you love to use our tools to search the smithsonian global volcanism database and look
              at the pretty data.
            </h3>
          </div>
          <div className={styles.buttonContainer}>
            <Link to="/Search">
              <Button
                style={{ height: "2.7em", borderRadius: "5em" }}
                className={styles.startNow}
                variant="contained"
              >
                Start now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
