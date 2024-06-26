import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo={
            email:data.email,
            password:data.password,
            
        };
         await axios.post("http://localhost:4000/user/login",userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                
                toast.success("Login Successfully");
                document.getElementById("login_button").close()
                setTimeout(()=>{
                    
                    window.location.reload();
                    localStorage.setItem("Users",JSON.stringify(res.data.user))
                },1000)
                
                
            }
            
        }).catch((err)=>{
            if(err.response){
                console.log(err)
                toast.error("Error:" + err.response.data.message)
                setTimeout(()=>{},3000)
            }
        })
    }

    
  
    

    

    return (
        <>
            <div>
                <dialog id="login_button" className="modal" >
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                           
                            <Link to='/'  className="dark:bg-black btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
                            onClick={()=>document.getElementById("login_button").close()}
                            >
                                ✕
                            </Link>
                            <h3 className="font-bold text-lg ">Login</h3>
                            <div className='mt-4 space-y-2'>
                                <span>Email</span><br />
                                <input
                                    type='email' placeholder='Enter Your Email'
                                    className='w-80 px-3 rounded-md border outline-none py-1 dark:bg-slate-900 dark:text-white'
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500 '>This field is required</span>}
                            </div>
                      
                            <div className='mt-4 space-y-2'>
                                <span>Password</span><br />
                                <input
                                    {...register("password", { required: true })}
                                    type='password' placeholder='Enter Your password'
                                    className='dark:bg-slate-900 dark:text-white w-80 px-3 rounded-md border outline-none py-1'
                                />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='flex justify-around mt-4'>  
                                <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700'>Login</button>
                                <p>Not Registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link>{" "}</p>
                            </div>
                        </form>
                    </div>
                    
                </dialog>
            </div>

        </>
    )
}

export default Login;
