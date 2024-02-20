import React, { useState,useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import LoginPage from './LoginPage.jsx'
import { ThemeProvider, UserProvider } from './Context/index.js'
import Display from './Display.jsx'

function App() {
    const [themeMode, setThemeMode] = useState('light');
    const [user,setUser] = useState({});
    const lightTheme = () => {
        setThemeMode('light')
    }
    const darkTheme = () => {
        setThemeMode('dark')
    }
    const addUser=async (user)=>{
        setUser(user);
    }
    useEffect(()=>{
        document.querySelector('html').classList.remove('dark','light')
        document.querySelector('html').classList.add(themeMode)
      },[themeMode])
    
    useEffect(()=>{
        addUser({
            quizId : JSON.parse(localStorage.getItem('quizId')),
            emailId : JSON.parse(localStorage.getItem('emailId')),
        })
    },[])

    useEffect(()=>{
        localStorage.setItem('quizId',JSON.stringify(user.quizId));
        localStorage.setItem('emailId',JSON.stringify(user.emailId));
    },[user])
    return (
        <BrowserRouter>
            <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
                <UserProvider value = {{user,addUser}}>
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