import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.left}>
          <span className={styles.heading}>
            <span className={styles.purple}>Visual navigation </span> and <span className={styles.blue}>search </span>
            for the <span className={styles.pink}>Smithsonian Institutions</span> global <span className={styles.orange}> volcanism </span>program</span>

          <div className={styles.buttonContainer}>
            <Button style={{ minWidth: '12em', minHeight: '4em' }} variant="contained">Get Started</Button>
          </div>

        </div>


      </div>




    </div>
  );
}

export default Home;
