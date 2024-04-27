import Landing from "./Pages/Landing/Landing"
import Login from "./Pages/Login/Login"
import Signup from "./Pages/Signup/Signup"
import Forgot from "./Pages/ForgotPass/Forgot"
import { Route, Routes } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <>
      <img className="bg" src="https://images.unsplash.com/photo-1635776063328-153b13e3c245?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="background" />
      <div className="socials">
        <a href="https://github.com/jhonny-rs">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/jhonny-rodrigues-de-sousa-7734b4291/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faCoffee} />
        </a>
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/forgot" element={<Forgot />}></Route>
      </Routes>
    </>
  )
}

export default App
