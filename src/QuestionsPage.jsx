import React, { useEffect, useState } from 'react'
import Question from './Components/Question'
import { useUser } from './Context'
import axios from 'axios'
function QuestionsPage() {
    const [questions, setQuestions] = useState([])
    const [answer, setAnswers] = useState({})
    const { quizId } = useUser();

    useEffect(() => {
        if(quizId!=null){
            axios.get(`http://localhost:8080/quiz/question/${quizId}`).then((res) => setQuestions(res.data))
            console.log(questions);
        }
    }, [quizId]);

    const handleChange = (event) => {
        const name = event.target.name;
        console.log(name);
        const value = event.target.value;
        setAnswers(values => ({ ...values, [name]: value }))
        console.log(answer);
    }

    const handleSubmit = () =>{
        axios.post(``,answer)
    }
    let i=1;
    return (
        <div className='w-full bg-cover h-screen'>
            <div className='w-full'>
                <div className='w-auto max-w-2xl mx-auto my-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-black/70'>
                    <form action="" onSubmit={handleSubmit}>
                        {questions.map((q) => (
                            <div className='mt-3' key={q.id}>
                                <Question queNo={i++} question={q.questionTitle} option1={q.option1} option2={q.option2} option3={q.option3} option4={q.option4} question_id={q.id} handleChange={handleChange} />
                            </div>
                        )
                        )}

                        <div className='w-full flex justify-center m-2'>
                            <button type='submit' className='w-auto bg-blue-500 p-2 rounded-lg hover:bg-blue-900 text-white'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default QuestionsPage