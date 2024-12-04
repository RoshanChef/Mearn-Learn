import React, { useState } from "react";

const App = () => {
	const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", country: "", state: "", notification: "", address: "", zip: "", comments: false, offers: false, candidates: false });

	function changeHandler(event) {
		let { name, value, checked, type } = event.target;
		setFormData((prev) => {
			return {
				...prev,
				[name]: type === "checkbox" ? checked : value
			}
		})
	}


	function submitHandler(event) {
		event.preventDefault();
		console.log('Printing the Form Data');
		console.log(formData);
	}
	return (
		<div>
			<form onSubmit={submitHandler} className="shadow-sm rounded-sm p-5 shadow-indigo-300 w-[60%] my-2 mx-auto flex flex-col">
				<label htmlFor="first" className="cursor-pointer font-semibold">First Name</label>
				<input type="text"
					id="first"
					placeholder="Sonu"
					name="firstName"
					value={formData.firstName}
					className="p-1 border-gray-300 border-2 rounded"
					onChange={changeHandler}></input>

				<label htmlFor="last" className="cursor-pointe font-semibold" >Last Name</label>
				<input type="text" id="last" name="lastName" value={formData.lastName} className="p-1 border-gray-300 border-2 rounded" onChange={changeHandler} placeholder="Nigam"></input>

				<label htmlFor="email" className="cursor-pointer font-semibold">Email Address</label>
				<input type="text" id="email" name="email" className="p-1 border-gray-300 border-2 rounded" onChange={changeHandler} placeholder="xyz@gmail.com"></input>

				<label htmlFor="country" className="cursor-pointer font-semibold">Country</label>
				<select value={formData.country} id="country" name="country" onChange={changeHandler}>
					<option value="India">India</option>
					<option value="Pakistan">Pakistan</option>
					<option value="Rasia">Rasia</option>
					<option value="Maxico">Maxico</option>
					<option value="USA">USA</option>
					<option value="Marina">Marina</option>x
				</select>
				<label htmlFor="address" className="font-semibold">Street Address</label>
				<textarea className="p-1 border-gray-300 border-2 rounded" name="address" id="address" placeholder="B-303,Arachana colony ..." value={formData.address} onChange={changeHandler}>

				</textarea>

				<label htmlFor="state" className="cursor-pointer font-semibold">State/Province</label>
				<input onChange={changeHandler} type="text" id="state" name="state" className="p-1 border-gray-300 border-2 rounded" placeholder="Gujarat"></input>
				<label htmlFor="city" className="cursor-pointer font-semibold">City</label>
				<input onChange={changeHandler} type="text" id="city" name="city" className="p-1 border-gray-300 border-2 rounded" placeholder="Ahemdabad"></input>
				<label htmlFor="zip" className="cursor-pointer font-semibold">Zip/Postral code</label>
				<input onChange={changeHandler} type="number" id="zip" name="zip" className="p-1 border-gray-300 border-2 rounded" placeholder="382345"></input>
				<fieldset className="font-semibold">
					<label htmlFor="mode">By Email</label>
					<br />
					<br />
					<div className="flex gap-x-2 items-baseline ">
						<input onChange={changeHandler} type="checkbox" id="comments" name="comments" checked={formData.comments}></input>
						<label htmlFor="comments" className="cursor-pointer">Comments<br /><span className="ml-4 text-gray-600 text-xs  ">Get notified when someones post a comments on posting</span></label>
					</div>


					<div className="flex gap-x-2 items-baseline">
						<input onChange={changeHandler} type="checkbox" id="candidate" name="candidates" checked={formData.candidates}></input>
						<label htmlFor="candidate" className="cursor-pointer">Candidates<br /><span className="ml-4 text-gray-600 text-xs">Get notified when candidate accepts or reject an offer </span></label>
					</div>

					<div className="flex gap-x-2 items-baseline">
						<input onChange={changeHandler} type="checkbox" id="offers" name="offers" checked={formData.offers}></input>
						<label htmlFor="offers" className="cursor-pointer">Offers<br /><span className="ml-4 text-gray-600 text-xs  ">Get notified when candidate accepts or reject an offer </span></label>
					</div>
				</fieldset>

				{/* another way of creating radio button */}
				<fieldset>
					<p className="font-semibold">Push Notification</p>
					<p className="text-gray-600 text-xs">These are delivered via SMS to your mobile Phone</p>
					<div className="flex gap-x-2 items-baseline">
						<input onChange={changeHandler} type="radio" id="everything"
							value="everything" name="notification"
						></input>
						<label htmlFor="everything" className="cursor-pointer">Everything</label>
					</div>
					<div className="flex gap-x-2 items-baseline">
						<input onChange={changeHandler} type="radio" id="as_email"
							value="same as email" name="notification"
						></input>
						<label htmlFor="as_email" className="cursor-pointer">Same as Email</label>
					</div>
					<div className="flex gap-x-2 items-baseline">
						<input
							onChange={changeHandler} type="radio" id="no_push"
							value="No push notification" name="notification"
						></input>
						<label htmlFor="no_push" className="cursor-pointer">No push Notification</label>
					</div>
				</fieldset>

				<div>
					<button className="bg-blue-600 text-white font-bold px-3 text-sm rounded py-1">
						Save
					</button>
				</div>
			</form>
		</div>
	)

};

export default App;
