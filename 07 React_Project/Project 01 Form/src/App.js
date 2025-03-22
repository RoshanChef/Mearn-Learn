import React, { useState } from "react";

const App = () => {

	// const [firstName, setFirst] = useState(""); 
	// const [lastName, setLast] = useState(""); 
	// console.log(firstName);
	// console.log(lastName);

	// function firstNameHandler(event) {
	// 	setFirst(event.target.value);
	// }
	// function LastNameHandler(event) {
	// 	setLast(event.target.value)
	// }

	//you can't make this for more and more input fields 


	/*
		name attribute in input field must be same as per the useState
	*/

	const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: "", favCar: "" });

	function changeHandler(event) {
		const { name, value, checked, type } = event.target;
		setFormData((prev) => {
			return {
				...prev,
				[name]: type === 'checkbox' ? checked : value
			}
		})
		// see the changes 
		// console.log(formData);
	}

	function submitHandler(event) {
		event.preventDefault();
		console.log(formData);
	}

	return (
		<div className="flex items-center justify-center gap-2">
			<form onSubmit={submitHandler}>

				{/* <label htmlFor="firstName">First Name</label> */}
				<label>
					First Name 	<br />
					<input type="text" name="firstName" onChange={changeHandler} placeholder="First Name" value={formData.firstName} />
				</label>
				<br />
				<br />
				

				<label>
					Last Name 	<br />
					<input type="text" name="lastName" onChange={changeHandler} placeholder="Last Name" value={formData.lastName} />
				</label>
				<br />
				<br />

				<label>
					Email 	<br />
					<input type="email" name="email" onChange={changeHandler} placeholder="Email" required value={formData.email} />
				</label>
				<br />
				<br />

				<label>
					Address <br />
					<textarea name="comments" placeholder="Enter your Address Here" onChange={changeHandler} required value={formData.comments} />
				</label>
				<br />
				<br />
				<br />

				<label>
					Check 	<br />
					<input name="isVisible" onChange={changeHandler} checked={formData.isVisible} type="checkbox" />
				</label>
				<br />
				<br />
				<br />
				<label>
					Online Mode 
					<input name="mode" onChange={changeHandler} value="Online Mode" checked={formData.mode === "Online Mode"} type="radio" />
				</label>
				<br />
				<label>
					Offline Mode
					<input name="mode" 
					onChange={changeHandler} 
					value="Offline Mode" 
					checked={formData.mode === "Offline Mode"} type="radio" />
				</label>
				<br />
				<br />
				<br />
				<label>
					Cars :
					<select name="favCar" value={formData.favCar} onChange={changeHandler} className="w-full">
						<option value="Forturne">Forturne</option>
						<option value="Thaar">Thaar</option>
						<option value="BMW">BMW</option>
						<option value="Audi">Audi</option>
					</select>
				</label>
				<br />
				<button className="bg-purple-400 p-2 m-2 rounded">Submit</button>

			</form>
		</div>
	)

};

export default App;
