import { useState } from "react";

export const useTheme = (startingTheme = 'light') => {
    const [theme, setTheme] = useState(startingTheme);

    const updateTheme = (startingTheme) => {
        if (startingTheme === 'light') {
            return setTheme('light');
        } else {
            return setTheme('dark');
        }
    }

    return {
        theme,
        setTheme: updateTheme
    }
}