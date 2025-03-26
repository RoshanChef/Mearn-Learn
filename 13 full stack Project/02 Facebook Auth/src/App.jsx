import { auth, google_provider, github_provider ,facebook_provider } from "./utils/Firebase"; // Adjust path if needed
import { signInWithPopup, signOut } from "firebase/auth"; // Added signOut
import { useState } from "react";

const App = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const googleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, google_provider);
            setUser(result.user);
            setError(null);
            console.log("Google login success:", result.user);
        } catch (err) {
            setError(err.message);
            setUser(null);
            console.error("Google login error:", err);
        }
    };

    const githubLogin = async () => {
        try {
            const result = await signInWithPopup(auth, github_provider);
            setUser(result.user);
            setError(null);
            console.log("GitHub login success:", result.user);
        } catch (err) {
            setError(err.message);
            setUser(null);
            console.error("GitHub login error:", err);
        }
    };

    const facebookLogin = async () => {
        try {
            const result = await signInWithPopup(auth, facebook_provider);
            setUser(result.user);
            setError(null);
            console.log("Facebook login success:", result.user);
        } catch (err) {
            setError(err.message);
            setUser(null);
            console.error("Facebook login error:", err);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth); // Updated sign-out method
            setUser(null);
            console.log("User logged out");
        } catch (err) {
            setError(err.message);
            console.error("Logout error:", err);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            {error && <div style={{ color: "red" }}>{error}</div>}

            {user ? (
                <div>
                    <h2>Welcome, {user.displayName || user.email}!</h2>
                    {user.photoURL && (
                        <img 
                            src={user.photoURL} 
                            alt="Profile" 
                            style={{ width: "50px", borderRadius: "50%" }} 
                        />
                    )}
                    <p>Email: {user.email}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h1>Login with:</h1>
                    <button onClick={googleLogin}>Google</button>
                    <button onClick={githubLogin}>GitHub</button>
                    <button onClick={facebookLogin}>Facebook</button>
                </div>
            )}
        </div>
    );
};

export default App;