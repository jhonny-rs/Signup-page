import styles from './Forgot.module.css';
import { Link } from 'react-router-dom';

function Forgot() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.container}>
          <h1>Forgot Password?</h1>
          <p className={styles.content}>Please enter your email address to reset your password.</p>
          <input className={styles.forgotInput} type="text" placeholder='example@gmail.com'/>
          <button className={styles.btn}>Reset your Password</button>
          <p>Remember your password?</p>
          <Link to="/login" className={styles.signin}>
            <button className={styles.btn}>Sign in</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Forgot;
