import React, { useState } from 'react'
import { useUser } from './Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const [data,setData] = useState({});
  const {setQuizId} = useUser()
  const navigate=useNavigate()
  
  const handleChange = (event)=>{
    setData ((prev) => ({...prev,[event.target.name]:event.target.value}))
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    axios.post("",data).then(res => {
      setQuizId(res.data);
      navigate("/questions");
    })
    console.log(data);
  }
  return (
    <div class="max-w-md mx-auto mt-10 bg-white rounded-md shadow-md ">
      <h1 class="text-lg font-semibold mb-4 text-center bg-blue-600 rounded-t-md p-4 text-white">Byte Brain Challenge</h1>
      <form className='m-4' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
          <input type="email" name="email" placeholder='Enter Email' onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-400 rounded-md bg-gray-100 shadow-md" />
        </div>
        <div className="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
          <input type="password" name="password" placeholder='Enter Password' onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-400 rounded-md bg-gray-100 shadow-md" />
        </div>
        <div>
          <label htmlFor="Category" className='block text-sm font-medium text-gray-700'>Select Category</label>
          <select className='w-full p-2 bg-gray-100 border border-gray-400 rounded-md mt-1' name='category' onChange={handleChange}>
            <option value="technical" >Technical</option>
            <option value="non-technical">Non-Technical</option>
          </select>
        </div>
        <div>
          <div class="flex justify-center">
            <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-md m-4 hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginPage