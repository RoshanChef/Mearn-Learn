import React, { useState } from "react";
import './App.css';

const App = () => {
	// const [firstName, setFirst] = useState(""); 
	// console.log(firstName);
	// console.log(lastName);

	// function firstNameHandler(event) {
	// 	setFirst(event.target.value);
	// }
	// function LastNameHandler(event) {
	// 	setLast(event.target.value)
	// }

	/*
		name attribute in input field must be same as per the useState

	*/

	const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments: "", isVisible: false, gender: "", favCar: "" });
	console.log(formData);

	function changeHandler(event) {
		let { name, value, checked, type } = event.target;
		setFormData((prev) => {
			return {
				...prev,
				[name]: type === "checkbox" ? checked : value
			}
		})
	}

	return (
		<div>
			<form>
				<input
					type="text" placeholder="First Name" onChange={changeHandler} value={formData.firstName} name="firstName"
				></input>
				<br />
				<br />
				<br />
				<input
					type="text" placeholder="Last Name" value={formData.lastName} onChange={changeHandler} name="lastName"
				></input>
				<br />
				<br />
				<br />
				<input
					type="email" value={formData.email} placeholder="xyz@gmail.com" onChange={changeHandler} name="email"
				></input>

				<br />
				<textarea
					onChange={changeHandler}
					value={formData.comments}
					name="comments"
					placeholder="Enter your comments Here ..."
				/>

				<br />
				<br />
				<input onChange={changeHandler}
					name="isVisible"
					checked={formData.isVisible}
					id="visible" type="checkbox"

				>
				</input>
				<label htmlFor="visible">Am I visible</label>

				<br />
				<br />
				<input
					type="radio"
					onChange={changeHandler}
					name="gender"
					value="male"
					id="male"
					checked={formData.gender === 'male'}
				></input>
				<label htmlFor="male">Male</label>
				<br />
				<br />
				<input
					type="radio"
					onChange={changeHandler}
					name="gender"
					value="female"
					id="female"
					checked={formData.gender === 'female'}
				></input>
				<label htmlFor="female">Female</label>
				<br />
				<br />
				<label htmlFor="car">
					Tell me your Fevourate Car
				</label>
				<select name="favCar" value={formData.favCar} onChange={changeHandler} id="car" >
					<option value="Maruti">Maruti</option>
					<option value="Suzuki">Suzuki</option>
					<option value="Audi">Audi</option>
					<option value="Leborgini">Leborgini</option>
				</select>
				<br />
				<input type="submit" value='submit'> submit</input>
			</form>
		</div>
	)

};

export default App;
