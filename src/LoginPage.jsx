import React, { useState } from 'react'
import { useUser } from './Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const [data, setData] = useState({});
  const { addQuizId } = useUser()
  const navigate = useNavigate()
  const [errors,setErrors] = useState()

  const handleChange = (event) => {
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(data);
    axios.post("http://localhost:8080/quiz/auth", data).then((res) => {
      console.log(res.data);
      if(res.data!=0){
        addQuizId(res.data);
        navigate('/display');
      }
      else{
        setErrors("Invalid Login credentials");
      }
    }).catch((res)=>{
      setErrors("Invalid Login credentials")
      console.log(res);
    })
    // localStorage.setItem('quizId',JSON.stringify(1000))
    // addQuizId(1000)
    // console.log(data);
  }
  return (
    <div class="max-w-md mx-auto m-10 bg-white rounded-md shadow-md dark:bg-blue-900 ">
      <h1 class="text-lg font-semibold mb-4 text-center bg-blue-600 rounded-t-md p-4 text-white dark:bg-blue-950 dark:text-gray-200">
        Byte Brain Challenge
      </h1>
      <form className='m-4' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Email:</label>
          <input type="email" name="email" placeholder='Enter Email' onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-400 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-gray-400 shadow-md dark:border-gray-800" />
        </div>
        <div className="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-200 ">Password:</label>
          <input type="password" name="password" placeholder='Enter Password' onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-400 rounded-md bg-gray-100 shadow-md dark:bg-gray-700 dark:text-gray-400 dark:border-gray-800" />
        </div>
        <div>
          <label htmlFor="Category" className='block text-sm font-medium text-gray-700 dark:text-gray-200'>Select Category</label>
          <select className='w-full p-2 bg-gray-100 border border-gray-400 shadow-md rounded-md mt-1 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-800' name='category' onChange={handleChange}>
            <option value="Java" >Technical</option>
            <option value="normal">Non-Technical</option>
          </select>
        </div>
        <div>
        <div>{errors && <span className='text-red-600'>{errors}</span>}</div>
          <div class="flex justify-center">
            <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-md m-4 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 border border-gray-800">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginPage