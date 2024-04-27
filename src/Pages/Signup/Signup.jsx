import styles from './Signup.module.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png" alt="" />
      </div>
      <div className={styles.container}>
        <h1>Sign up</h1>
        <div className={styles.inputContainer}>
          <input className={styles.signupInput} type="text" placeholder='First Name' />
          <input className={styles.signupInput} type="text" placeholder='Last Name'/>
        </div>
        <input className={styles.signupInput} type="email" placeholder='example@gmail.com'/>
        <input className={styles.signupInput} type="password" placeholder='Password'/>
        <input className={styles.signupInput} type="password" placeholder='Confirm Password'/>
        <button className={styles.btn} type='submit'>Sign up</button>
        <p>Already have an account?</p>
        <Link to="/login" className={styles.login}>
          <button className={styles.btn}>Sign in</button>
        </Link>
      </div>
    </>
  );
}

export default Signup;