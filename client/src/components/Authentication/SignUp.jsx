import { useState, useEffect } from "react"

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = async() => {
        setLoading(true);

        // Simulate async signup
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setLoading(false);
        
    }

    const checkStrength = (pwd) => {
        let score = 0;
    
        if (pwd.length >= 8) score++;
        if (/[A-Z]/.test(pwd)) score++;
        if (/[a-z]/.test(pwd)) score++;
        if (/\d/.test(pwd)) score++;
        if (/[@$!%*?&#]/.test(pwd)) score++;
    
        if (score <= 2) return "Weak";
        if (score === 3 || score === 4) return "Moderate";
        if (score === 5) return "Strong";
        return "";
    };
    
    const getColor = () => {
        if (strength === "Weak") return "red";
        if (strength === "Moderate") return "orange";
        if (strength === "Strong") return "green";
        return "#000";
      };
    

    return (
        <div className='signup-main'>
            <h1>Register</h1>
            <p>Username</p>
            <input type='text' id='username' placeholder='jane@doe.com' 
            onChange={(e) => setUsername(e.target.value)}
            />
            
            <p>Password</p>
            <input 
            type={showPassword ? "text" : "password"}
            id='password' placeholder='********' value = {password}
            onChange={(e) => {
                setPassword(e.target.value)
                setStrength(checkStrength(password))
            }}
            />
            <button
            onClick={() => setShowPassword(!showPassword)}
            type="button"
            style={{
                padding: "2px 3px",
                fontSize: "8px",
                borderRadius: "10px",
                border: "1px",
                backgroundColor: "#f0f0f0",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
            }}
            >
            {showPassword ? "Hide" : "Show"}
            <span style={{ fontSize: "8px" }}>
                {showPassword ? "✔️" : "❌"}
            </span>
            </button>

            {password && (
                <p style={{ marginTop: "0px", fontWeight: "bold", color: getColor() }}>
                Strength: {strength}
                </p>
            )}
            <p>Enter your name.</p>
            <input type="text" id="firstname" placeholder="Jane Doe" 
            onChange={(e) => setName(e.target.value)}
            />
            <p>Email</p>
            <input type='text' id='email' placeholder='jane@doe.com' 
            onChange={(e) => setEmail(e.target.value)}
            />
            <button
                onClick={handleSignUp}
                disabled={loading}
                style={{
                    padding: "10px 20px",
                    backgroundColor: loading ? "#999" : "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "16px",
                    cursor: loading ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                }}
                >
                {loading && (
                    <span
                    style={{
                        width: "16px",
                        height: "16px",
                        border: "2px solid #fff",
                        borderTop: "2px solid transparent",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                    }}
                    />
                )}
                {loading ? "Signing up..." : "Sign Up"}

                {/* Spinner animation style */}
                <style>{`
                    @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                    }
                `}</style>
                </button>
        </div>
    )
}