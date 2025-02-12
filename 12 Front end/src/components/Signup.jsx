import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Route, Routes, useNavigate } from "react-router-dom";


function Signup() {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
    const [password, setConfirm] = useState({ "pass": false, "conf": false });
    const navigate = useNavigate();

    async function onSubmit(data) {
        let response = await fetch('http://localhost/signup/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        let convert = await response.json();
        if (convert.signin) {
            navigate('/dashboard');
        }
        console.log(convert);

    }
    return (

        <div className="w-[80vw] m-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="p-4 flex gap-3 flex-col w-full items-center shadow-xl  mt-10 rounded-xl">
                <label className="flex gap-8">
                    First Name
                    <input  {...register('first_name', {
                        maxLength: { value: 10, message: 'Max Len should be atleast 6' }
                    })} className="border-2 border-[#ccc]  rounded-sm p-2 pl-3" placeholder="First Name" />
                    {errors.firstName && <p className="text-sm text-red-400">{errors.first_name.message}</p>}
                </label>

                <label className="flex flex-col">
                    <div className="flex gap-8">
                        Last Name
                        <input {...register('last_name', {
                            minLength: { value: 6, message: 'Please enter Last Name atleast 6 length' }
                        })} className="border-2 border-[#ccc] w-22 rounded-sm p-2 pl-3" placeholder="Last Name"
                        />
                    </div>
                    <div>
                        {errors.last_name && <p className="text-red-500 text-xs float-end">{errors.last_name.message}</p>}
                    </div>
                </label>

                <label className="">
                    <div className="flex gap-8">
                        Email
                        <input type="email" {...register('email')} required className="border-2 w-22 border-[#ccc]  rounded-sm p-2 pl-3" placeholder="xyz@gmail.com" />
                    </div>
                </label>
                <label className="">
                    <div className="flex gap-8">
                        Create Password
                        <input type={password.pass ? 'text' : 'password'} {...register('password')} required className="border-2 w-22 border-[#ccc]  rounded-sm p-2 pl-3" placeholder="absS@123" />
                        <div onClick={() => setConfirm((prev) => ({ ...prev, pass: !password.pass }))}>
                            {password.pass ? <IoIosEye /> : <IoIosEyeOff />}
                        </div>
                    </div>
                </label>
                <label className="">
                    <div className="flex flex-col gap-2">

                        <div className="flex gap-3">
                            Confirm Password
                            <input type={password.conf ? 'text' : 'password'} {...register('confirm', {
                                required: true,
                                validate: (value, form_value) => value === form_value.password || 'Password not matches'
                            })} required className="border-2 w-22 border-[#ccc]  rounded-sm p-2 pl-3" placeholder="absS@123" />
                            <div onClick={() => setConfirm((prev) => ({ ...prev, conf: !password.conf }))}>
                                {password.conf ? <IoIosEye /> : <IoIosEyeOff />}
                            </div>
                        </div>
                        <div>
                            {errors.confirm && <p className="text-red-500 text-xs float-end transition-all duration-3000">{errors.confirm.message}</p>}
                        </div>
                    </div>
                </label>



                <button type="submit" className="mt-4 bg-blue-600 cursor-pointer w-24 h-12 text-white w-22 rounded-lg">Submit</button>

            </form>

        </div >
    )
}

export default Signup
