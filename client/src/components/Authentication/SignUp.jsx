export default function SignUp() {
    return (
        <div className='signup-main'>
            <h1>Register</h1>
            <p>Username</p>
            <input type='text' id='username' placeholder='jane@doe.com' />
            <p>Password</p>
            <input type='password' id='password' placeholder='********' />
            <p>Enter your name.</p>
            <input type="text" id="firstname" placeholder="Jane Doe" />
            <p>Email</p>
            <input type='text' id='email' placeholder='jane@doe.com' />
            <button>Sign Up</button>
        </div>
    )
}