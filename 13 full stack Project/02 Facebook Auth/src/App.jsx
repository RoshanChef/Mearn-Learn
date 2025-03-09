import { auth, google_provider, github_provider } from "./utils/Firebase"; // Adjust path if needed
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";


const App = () => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	const googleLogin = async () => {
		try {
			const result = await signInWithPopup(auth, google_provider);
			setUser(result.user);
			console.log(result.user);
			setError(null);
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
			console.log(result.user);

			setError(null);
		} catch (err) {
			setError(err.message);
			setUser(null);
			console.error("GitHub login error:", err);
		}
	};

	const facebookLogin = async () => {
        try {
            const facebookProvider = new FacebookAuthProvider();
            const result = await signInWithPopup(auth, facebookProvider);
            setUser(result.user);
            setError(null);
            console.log("Facebook login successful:", result.user);
        } catch (err) {
            setError(err.message);
            console.error("Facebook login error:", err);
        }
    };

	const handleLogout = async () => {
		try {
			await auth.signOut();
			setUser(null);
		} catch (err) {
			setError(err.message);
			console.error("Logout error:", err);
		}
	};

	return (
		<div>
			{error && <div style={{ color: "red" }}>{error}</div>}

			{user ? (
				<div>
					<p>Welcome, {user.displayName || user.email}!</p>
					<button onClick={handleLogout}>Logout</button>
				</div>
			) : (
				<div>
					<button onClick={googleLogin}>Google Login</button>
					<button onClick={githubLogin}>GitHub Login</button>
					<button onClick={facebookLogin}>Facebook Login</button>
				</div>
			)}
		</div>
	);
};

export default App;