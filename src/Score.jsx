import React, { useEffect, useState } from 'react'
import { useUser } from './Context'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Score() {
    const { quizId } = useUser();
    const navigate = useNavigate();
    const [userDetails,setUserDetails] = useState();

    useEffect(()=>{
        if(quizId!=null){
            console.log(quizId)
            axios.get(`http://localhost:8080/quiz/getLastPage/${quizId}`)
            .then((res)=>{
                console.log(res.data);
                setUserDetails(res.data)
            })
        } 
        console.log("line 17",quizId);
    },[quizId])
    // const loadDetails = ()=>{
    //     axios.get(`/api/details/${user.emailId}`)
    //     .then((res)=>{
    //         console.log(res.data);
    //         setUserDetails(res.data)
    //     })
    // }
    if(userDetails==null){
        return(
            <div className='mx-auto bg-white rounded-xl shadow-md max-w-md p-5'>
                <p>Please go to Login Page</p>
                <div className='flex justify-center pt-2'>
                    <button className='inline-block  p-2 bg-blue-500 rounded-md font-medium hover:bg-blue-700 hover:text-gray-200 hover:shadow-lg' onClick={()=>{navigate('/')}}
                    >
                        Login Page
                    </button>

                </div>
            </div>
        )
    }
    return (
        // <div className="max-w-60 mx-auto bg-white rounded-xl shadow-md overflow">
        //     <div className="p-5">
        //         <h1 className='text-center mb-5'>User Details</h1>
        //         <table className='w-full border border-black'>
        //             <tr className='border'>
        //                 <td className='p-2 border border-black'>Name </td>
        //                 <td className='p-2 border border-black'>{userDetails.name}</td>
        //             </tr>
        //             <tr className='border'>
        //                 <td className='p-2 border border-black'>Email </td>
        //                 <td className='p-2 border border-black'>{userDetails.email}</td>
        //             </tr>
        //             <tr className='border'>
        //                 <td className='p-2 border border-black'>Phone </td>
        //                 <td className='p-2 border border-black'>{userDetails.Phone}</td>
        //             </tr> 
        //         </table>
        //     </div>
        // </div>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <h1 className='text-center p-2 text-2xl font-semibold bg-blue-500'>User Details</h1>
            <div className="p-5">
                <table className='w-full border-collapse border border-gray-300'>
                    <tbody>
                        <tr className='border-b border-gray-300'>
                            <td className='p-2 font-semibold'>Name:</td>
                            <td className='p-2'>{userDetails.name}</td>
                        </tr>
                        <tr className='border-b border-gray-300'>
                            <td className='p-2 font-semibold'>Email:</td>
                            <td className='p-2'>{userDetails.email}</td>
                        </tr>
                        <tr className='border-b border-gray-300'>
                            <td className='p-2 font-semibold'>Phone:</td>
                            <td className='p-2'>{userDetails.phone}</td>
                        </tr>
                        <tr className='border-b border-gray-300'>
                            <td className='p-2 font-semibold'>Category:</td>
                            <td className='p-2'>{userDetails.category}</td>
                        </tr>
                        <tr className='border-b border-gray-300'>
                            <td className='p-2 font-semibold'>Your Final Score</td>
                            <td className='p-2'>{userDetails.score}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='flex justify-center pt-2'>
                    <button className='inline-block  p-2 bg-blue-500 rounded-md font-medium hover:bg-blue-700 hover:text-gray-200 hover:shadow-lg'
                    onClick={()=>{navigate('/')}}
                    >
                        Login Page
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Score