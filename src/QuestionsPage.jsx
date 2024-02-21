import React from 'react'
import Question from './Components/Question'
import { useUser } from './Context'
function QuestionsPage() {
    const [questions, setQuestions] = useState([])
    const [answer, setAnswers] = useState({})
    const { quizId } = useUser();

    useEffect(() => {
        axios.get(`http://localhost:8080/questions/${quizId}`).then((res) => setQuestions(res.data))
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAnswers(values => ({ ...values, [name]: value }))
        console.log(answer);
    }

    const handleSubmit = () =>{

    }
    
    return (
        <div className='w-full bg-cover h-screen'>
            <div className='w-full'>
                <div className='w-auto max-w-2xl mx-auto my-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-black/70'>
                    <form action="" onSubmit={handleSubmit}>
                        {questions.map((q) => (
                            <div className='mt-3'>
                                <Question queNo={i++} question={q.question} option1={q.option1} option2={q.option2} option3={q.option3} option4={q.option4} question_id={q.question_id} handleChange={handleChange} />
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