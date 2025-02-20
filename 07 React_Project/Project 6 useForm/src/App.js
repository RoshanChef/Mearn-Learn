import React, { useState } from "react";
import { useForm } from "react-hook-form";

const App = () => {
	const { register, handleSubmit, watch, formState: {  errors, isSubmitting } } = useForm();
	async function onSubmit(data) {
		await new Promise((resolve, reject) => setTimeout(resolve, 5000)); 
		console.log(data);
	}
	
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-max">
				<label>
					First Name
					<input {...register('firstName',
						{
							required: true,
							minLength: { value: 3, message: 'Min Len should be atleast 3' },
							maxLength: { value: 6, message: 'Max Len should be atleast 6' }
						})} />
					{errors.firstName && <p className="text-sm text-red-400">{errors.firstName.message}</p>}
				</label>
				<label>
					Last Name
					<input {...register('lastName')} />
				</label>
				<input type="submit" disabled={isSubmitting} value={isSubmitting ? "submitting" : "submit"} className="bg-blue-500 p-2 text-white text-xl" />
			</form>
		</div>
	)

};

export default App;