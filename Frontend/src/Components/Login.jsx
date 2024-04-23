import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data); 
    }

    return (
        <>
            <div>
                <dialog id="login_button" className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* Close modal button */}
                            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </Link>
                            <h3 className="font-bold text-lg ">Login</h3>
                            <div className='mt-4 space-y-2'>
                                <span>Email</span><br />
                                <input
                                    type='email' placeholder='Enter Your Email'
                                    className='w-80 px-3 rounded-md border outline-none py-1'
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* password */}
                            <div className='mt-4 space-y-2'>
                                <span>Password</span><br />
                                <input
                                    {...register("password", { required: true })}
                                    type='password' placeholder='Enter Your password'
                                    className='w-80 px-3 rounded-md border outline-none py-1'
                                />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='flex justify-around mt-4'>
                                <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700'>Login</button>
                                <p>Not Registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login;
