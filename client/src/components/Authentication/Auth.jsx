import { useState } from "react"
import "./auth.css"
import "../../fanta.css"
import LogIn from "./LogIn";
import SignUp from "./SignUp";

export default function Auth() {
    const [userAction, setUserAction] = useState('login');
    
    return (
        <div className="auth-main">
            <div className="auth-header">
                <h1 className="auth-text text-gradient">
                    ChatApp
                </h1>
                <p className="hero">
                    Experience the magical way to connect with friends without being hooked to scrolling.
                </p>
            </div>
            <div className="login-signup">
                {userAction === 'login' ? <LogIn /> : <SignUp />}
                {userAction === 'login' ? 
                (<div className="Option-signUp">
                    <p>Don't have an Account Yet?</p>
                    <button
                    onClick={() => setUserAction('signup')}
                    >Sign Up</button>
                </div>)
                :
                (<div className="Option-logIn">
                    <p>Already have an account?</p>
                    <button
                    onClick={() => setUserAction('login')}
                    >Log In</button>
                </div>)    
            }
            </div>
        </div>
    )
}