import React from "react";
import { auth, provider } from "./utils/Firebase";
import { signInWithPopup } from "firebase/auth";

const App = () => {

	async function googleLogin() {
		const res = await signInWithPopup(auth, provider);
		let user = res.user;
		let dataObj = {
			name: user.displayName,
			email: user.email,
			avtar: user.photoURL,
			phoneNumber: user.phoneNumber
		}
		signPost(dataObj);
	}
	async function signPost(dataObj) {
		let res = await fetch(`http://localhost/signin/google`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dataObj)
		});
	}

	return (
		<div>
			<p>Google signIn</p>
			<button onClick={googleLogin}>sign with Google </button>
		</div>
	)

};

export default App;