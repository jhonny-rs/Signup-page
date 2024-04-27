import styles from './Login.module.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.container}>
          <h1>Sign in</h1>
          <p className={styles.content}>Good to see you back! Please enter your details.</p>
          <input className={styles.loginInput} type="email" placeholder='example@gmail.com' />
          <input className={styles.loginInput} type="password" placeholder='password' />
          <button className={styles.btn} type='submit'>Sign in</button>
          <p>Don't have an account?</p>
          <Link to='/signup' className={styles.signup}>
            <button className={styles.btn}>Sign up</button><br />
          </Link>

          <Link to="/forgot">
            <a className={styles.forgot}>Forgot Password?</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Login