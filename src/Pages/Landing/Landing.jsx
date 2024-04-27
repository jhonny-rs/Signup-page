import styles from './Landing.module.css';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png" alt="" />
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>Welcome to the our website!</h1>
                <p className={styles.content}>This is NOT a real website. Please DO NOT enter any personal data.</p>
                <Link to='/login' className={styles.login}>
                    <button className={styles.btn}>Register</button>
                </Link>
            </div>
        </>
    );
}

export default Landing;