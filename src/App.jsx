import React, { useState,useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import LoginPage from './LoginPage.jsx'
import { ThemeProvider, UserProvider } from './Context/index.js'
import Display from './Display.jsx'

function App() {
    const [themeMode, setThemeMode] = useState('light');
    const [quizId,setQuizId] = useState(0);
    const lightTheme = () => {
        setThemeMode('light')
    }
    const darkTheme = () => {
        setThemeMode('dark')
    }
    const addQuizId=async (quizId)=>{
        setQuizId(quizId);
    }
    useEffect(()=>{
        document.querySelector('html').classList.remove('dark','light')
        document.querySelector('html').classList.add(themeMode)
      },[themeMode])
    
    useEffect(()=>{
        addQuizId(JSON.parse(localStorage.getItem('quizId')))
    },[])

    useEffect(()=>{
        localStorage.setItem('quizId',JSON.stringify(quizId));
    },[quizId])
    return (
        <BrowserRouter>
            <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
                <UserProvider value = {{quizId,addQuizId}}>
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route path='' element={<LoginPage />} />
                            <Route path='display' element={<Display/>}/>
                        </Route>
                    </Routes>
                </UserProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App