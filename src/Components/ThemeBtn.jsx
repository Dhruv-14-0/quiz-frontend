import React from 'react'
import {useTheme} from '../Context/index'


function ThemeBtn() {
    const {themeMode,lightTheme,darkTheme} = useTheme()
    const handleChange = (e) =>{
        const darkModeStatus= e.currentTarget.checked;
        if(darkModeStatus){
            darkTheme();
        }
        else{
            lightTheme();
        }
    }
    return (
        <>
            <label className='relative inline-flex items-center cursor-pointer'>
                <input type="checkbox"
                    value=""
                    className='sr-only peer'
                    onChange={handleChange}
                    checked={themeMode==='dark'}
                    />
                <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-checked:ring-blue-900 after:rounded-full rounded-full after:bg-white after:h-5 after:w-5 after:top-[2px] after:left-[2px] after:absolute peer-checked:after:translate-x-full after:content-[''] after:transition-all peer-checked:bg-blue-700 peer-focus:outline-none after:border-gray-300 after:border peer-checked:after:border peer-checked:after:border-blue-900"></div>
            </label>
        </>
    )
}

export default ThemeBtn