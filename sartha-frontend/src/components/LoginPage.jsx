import React, { useContext, useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from 'axios';
import { Link , useNavigate} from 'react-router-dom';
import { myContext } from '../App';

export const LoginPage = ({setToggle,toggle}) => {
    const {setValid} = useContext(myContext);
    const navigate = useNavigate();
    const [loginData, setLoginDAta] = useState({
        email:"",
        password:""
    })


    const handleChange = (e)=>{
        const {name, value} = e.target;

        setLoginDAta(prev =>({
            ...prev,
            [name]:value
        }))
    }   


    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', loginData);
            console.log(response.data);
            const userDAta = response.data;
            console.log(userDAta.token ,"the token>>>>>")
            if(userDAta.token !== ""){
                navigate('/dashboard')
                setValid(true)
            }else{
                navigate('/')
            }
        } catch (error) {
            console.error('There was an error!', error);
        }

        setLoginDAta({
            email: "",
            password: ""
        });
    }

    return (
        <div className='flex items-center justify-center mt-10'>
            <div className='relative border rounded-md w-[400px] h-[450px] flex flex-col items-center justify-center gap-3 bg-[#333069]'>
                <div onClick={()=>setToggle(!toggle)} className='bg-[aqua] absolute top-[-12px] w-[200px] h-[50px] flex justify-center items-center  text-xl cursor-pointer '>
                   <Link to='/signUp'>SIGN UP</Link> 
                </div>
                <div className='text-[100px] mt-5 '>
                   <p className='text-[#ffffff68]'> <CgProfile /></p>
                </div>
                <form>
                    <label className='flex flex-col '>
                        <div className='relative'>
                            <input
                                className='border w-[300px] h-12 rounded-lg bg-[#ffffff68] outline-none pl-12 text-[20px] '
                                type="text" 
                                placeholder='email'
                                name='email'
                                value={loginData.email}
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
                            value={loginData.password}
                            onChange={handleChange}
                            />
                            
                            <p className='absolute top-3 text-[22px]  border-r-[1.5px] px-2'><RiLockPasswordLine /></p>
                        </div>
                        <div className='flex justify-between px-1'>
                            <div className='flex gap-1'>
                                <input type="checkbox" />
                                <p className='text-[aqua]'>Remember me</p>
                            </div>
                            <p className='text-[aqua]'>forget Password?</p>
                        </div>
                        <button onClick={handleSubmit} className='bg-[aqua] mt-10 h-[45px] rounded-md font-[20px]'>LOGIN</button>
                    </label>
                </form>
            </div>
        </div>
    )
}