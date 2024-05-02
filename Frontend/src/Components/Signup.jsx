import React from "react";
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom'
import Login from "./Login"
import toast from 'react-hot-toast'
import axios from "axios"
import { useForm } from "react-hook-form"
function Signup() {
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,

        }
        await axios.post("http://localhost:4000/user/signup", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success("Signup Successfully");
                    navigate(from, { replace: true })


                }
                localStorage.setItem("Users", JSON.stringify(res.data.user))
            }).catch((err) => {
                if (err.response) {
                    console.log(err)
                    toast.error("Error:" + err.response.data.message)
                }
            })
    }
    return (
        <>
            <div className="flex h-screen  items-center justify-center ">
                <div className="" >
                    <div className="modal-box w-[500px]">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                          
                            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:bg-black">✕</Link>

                            <h3 className="font-bold text-lg ">Signup</h3>
                            <div className='mt-4 space-y-2'>
                                <span>Name</span><br />
                                <input type='text' placeholder='Enter Your Name'
                                    className='dark:bg-slate-900 dark:text-white w-80 px-3 rounded-md border outline-none py-1'
                                    {...register("fullname", { required: true })}
                                />
                                <br />
                                {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Email</span><br />
                                <input type='email' placeholder='Enter Your Email'
                                    className='dark:bg-slate-900 dark:text-white w-80 px-3 rounded-md border outline-none py-1'
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* password */}
                            <div className='mt-4 space-y-2'>
                                <span>Password</span><br />
                                <input type='password' placeholder='Enter Your password'
                                    className='dark:bg-slate-900 dark:text-white w-80 px-3 rounded-md border outline-none py-1'
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className="flex justify-around mt-4">
                                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                    Signup
                                </button>
                                <p className="text-xl">
                                    Have account?{" "}
                                    <button
                                        className="underline text-blue-500 cursor-pointer"
                                        onClick={() => document.getElementById("login_button").showModal()}                                >
                                        Login
                                    </button>{" "}
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup;