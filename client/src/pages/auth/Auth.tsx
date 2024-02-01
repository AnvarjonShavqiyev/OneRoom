import { Link, useParams } from "react-router-dom";
import './Auth.scss'
import Login from "./login/Login";
import SignUp from "./signUp/SignUp";

const Auth : React.FC = () => {
  const {action} = useParams();
  return (
    <div>
        <div className="auth__wrapper">
          <div className="auth-wrapper">
            <h3 className="auth-title">My account</h3>
            <div className="auth-form-wrapper">
            <div className="auth__header">
              <Link to='/auth/login' className={action === 'login' ? 'auth-action-title active' : 'auth-action-title'}>Login</Link>
              <Link to='/auth/signup' className={action === 'signup' ? 'auth-action-title active' : 'auth-action-title'}>Create account</Link>
            </div>
            {
              action === 'login' ? <Login/> : <SignUp/>
            }
            </div>
          </div>
        </div>
     </div>
  )
}

export default Auth