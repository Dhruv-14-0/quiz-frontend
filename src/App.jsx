import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import LoginPage from './LoginPage.jsx'
import { ThemeProvider, UserProvider } from './Context/index.js'

function App() {
    const [themeMode, setThemeMode] = useState('light');
    const lightTheme = () => {
        setThemeMode('light')
    }
    const darkTheme = () => {
        setThemeMode('dark')
    }
    const [quizId,setQuizId]= useState(0)
    return (
        <BrowserRouter>
            <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
                <UserProvider value = {{quizId}}>
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route path='' element={<LoginPage />} />
                        </Route>
                    </Routes>
                </UserProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App