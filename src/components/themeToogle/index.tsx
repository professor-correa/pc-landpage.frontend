import React, { useEffect, useState } from "react";

export const ThemeToogle: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return <button onClick={() => setDarkMode(!darkMode)} >
        {darkMode ? 'Modo Claro' : 'Modo Escuro'}
    </button>
}