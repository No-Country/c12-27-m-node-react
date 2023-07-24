'use client'
import { useContext, useEffect } from 'react';
import { UserContext } from '@/app/utils/context/userContext';
const BtnTheme = () => {
    const { theme, setTheme } = useContext(UserContext);
    return (
        <label className="label cursor-pointer">
            <span className="label-text">Modo oscuro</span>
            <input type="checkbox"
                className="toggle"
                onClick={() => {
                    theme === 'light' ? setTheme('dark')
                        : setTheme('light')
                }} />
        </label>
    )
}

export default BtnTheme;