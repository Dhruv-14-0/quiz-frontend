import React from 'react'

function Question({
    queNo,
    question,
    option1,
    option2,
    option3,
    option4,
    question_id,
    handleChange
}) {
    return (
        <div className=''>
            <div className='py-3 text-white ml-2'>
                <p>{queNo} : {question}</p>
            </div>
            <ul className="w-auto text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                    <div className="flex items-center ps-3">
                        <input id="list-radio-license" type="radio" value={1} name={question_id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 "onChange={(e)=>handleChange && handleChange(e)}/>
                            <label htmlFor="list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">{option1} </label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                    <div className="flex items-center ps-3">
                        <input id="list-radio-id" type="radio" value={2} name={question_id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 "onChange={(e)=>handleChange && handleChange(e)}/>
                            <label htmlFor="list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900" >{option2}</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                    <div className="flex items-center ps-3">
                        <input id="list-radio-military" type="radio" value={3} name={question_id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "onChange={(e)=>handleChange && handleChange(e)}/>
                            <label htmlFor="list-radio-military" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">{option3}</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                    <div className="flex items-center ps-3">
                        <input id="list-radio-passport" type="radio" value={4} name={question_id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:ring-2 "onChange={(e)=>handleChange && handleChange(e)}/>
                            <label htmlFor="list-radio-passport" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">{option4}</label>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Question