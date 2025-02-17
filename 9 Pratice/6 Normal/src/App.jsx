import React from "react";

const App = () => {

	const [formData, setForm] = React.useState({ firstname: "", lastname: "", Email: "", car: "", gender: '', email: false, post: false, work: false });

	function clickHand(e) {
		const { value, name, checked, type } = e.target;
		setForm(prev => {
			return { ...prev, [name]: type === 'checkbox' ? checked : value }
		})
	}
	function submitHandle(e) {
		e.preventDefault();
		// fetch
		console.log(formData);
	}


	return (
		<div>
			<form onSubmit={submitHandle} className="p-4 flex flex-col gap-2">
				<label className="flex gap-2">
					<p>FirstName</p>
					<input onChange={clickHand} type="text" name="firstname" className="border-1" value={formData.firstname} />
				</label>
				<label className="flex gap-2">
					<p>LastName</p>
					<input onChange={clickHand} type="text" name="lastname" className="border-1" value={formData.lastname} />
				</label>

				<label className="flex gap-2">
					<p>Email</p>
					<input onChange={clickHand} type="email" name="Email" className="border-1" value={formData.Email} />
				</label>

				<select name="car" onChange={clickHand}>
					<option value="MNM">MNM</option>
					<option value="BMW">BMW</option>
					<option value="SUZUKI">SUZUKI</option>
				</select>
				<div>
					<h2 className="font-bold">Gander</h2>
					<div className="pl-5">
						<label className="flex gap-2.5">
							<p>Male</p>
							<input type="radio" value='male' name="gender" onChange={clickHand} className="w-2 h-2" />
						</label>
						<label className="flex gap-2.5">
							<p>Female</p>
							<input type="radio" value='female' name="gender" onChange={clickHand} />
						</label>
					</div>
				</div>

				<div>
					<p className="font-bold">Get Parceil from</p>
					<div className="pl-5">
						<label className="flex gap-2">
							<p>by mail</p>
							<input type="checkbox" name="email" checked={formData.parcel} value='email' onChange={clickHand} />
						</label>
						<label className="flex gap-2">
							<p>by post</p>
							<input type="checkbox" name="post" checked={formData.parcel} value='post' onChange={clickHand} />
						</label>
						<label className="flex gap-2">
							<p>by work</p>
							<input type="checkbox" name="work" checked={formData.parcel} value='Work' onChange={clickHand} />
						</label>
					</div>
				</div>



				<button className="bg-blue-600 w-22 h-12 text-white rounded-lg">
					Submit
				</button>

			</form>

		</div >
	)
}

export default App;

