import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from  'axios'
import { Link } from 'react-router-dom';

export const RegistrationPage = ({setToggle,toggle}) => {
    const [formData, setFormData] = useState({
        name:"",
        dateOfBirth:"",
        email:"",
        password:""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', formData);
            console.log(response.data);
        } catch (error) {
            console.error('There was an error!', error);
        }
       setFormData({
        name:"",
        dateOfBirth:"",
        email:"",
        password:""
    })
    }
  return (
    <div className='flex items-center justify-center mt-5 '>
            <div className='relative border rounded-md w-[400px]  flex flex-col items-center justify-center gap-3 bg-[#333069]'>
                <div onClick={()=>setToggle(!toggle)} className='bg-[aqua] absolute top-[-12px] w-[200px] h-[50px] flex justify-center items-center  text-xl cursor-pointer '>
                   <Link to='/signIn'>LOG IN</Link> 
                </div>
                <div className='text-[100px] mt-12 '>
                   <p className='text-[#ffffff68]'> <CgProfile /></p>
                </div>
                <form>
                    <label className='flex flex-col '>
                        <div className='relative'>
                            <input
                                className='border w-[300px] h-12 rounded-lg bg-[#ffffff68] outline-none pl-12 text-[20px] '
                                type="text" 
                                placeholder='name'
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                />
                            <p className='absolute top-3 text-[22px]  border-r-[1.5px] px-2'><CgProfile /> </p>
                        </div>
                        <br />
                        <div className='relative'>
                            <input 
                            className='border w-[300px] h-12 rounded-lg bg-[#ffffff68] outline-none pl-12 text-[20px] '
                            type="date"
                            placeholder='Date of birth'
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            />
                            
                            <p className='absolute top-3 text-[22px]  border-r-[1.5px] px-2'><RiLockPasswordLine /></p>
                        </div>
                        <br />
                        <div className='relative'>
                            <input
                                className='border w-[300px] h-12 rounded-lg bg-[#ffffff68] outline-none pl-12 text-[20px] '
                                type="email" 
                                placeholder='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                />
                            <p className='absolute top-3 text-[22px]  border-r-[1.5px] px-2'><CgProfile /> </p>
                        </div>
                        <br />
                        <div className='relative'>
                            <input 
                            className='border w-[300px] h-12 rounded-lg bg-[#ffffff68] outline-none pl-12 text-[20px] '
                            type="password"
                            placeholder='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            />
                            
                            <p className='absolute top-3 text-[22px]  border-r-[1.5px] px-2'><RiLockPasswordLine /></p>
                        </div>

                        <button onClick={handleSubmit} className='bg-[aqua] m-10 h-[45px] rounded-md font-[20px]'>SIGN-UP</button>
                    </label>
                </form>
            </div>
        </div>
  )
}