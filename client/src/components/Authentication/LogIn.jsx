import './auth.css'

export default function LogIn(){
    return (
        <div className='login-main'>
            <h1>Log in to continue</h1>
            <p>Username</p>
            <input type='text' id='username' placeholder='jane@doe.com' />
            <p>Password</p>
            <input type='password' id='password' placeholder='********' />
            <button>Log in</button>
        </div>
    )
}