import React, { useState } from 'react';
import Header from './Header';
import Speakers from './Speakers';

const App = () => {
    const [theme, setTheme] = useState('light');
    const speakersProps = { theme, setTheme };
    return (
        <div className={theme === 'light' ? 'container-fluid light' : 'container-fluid dark'}>
            <Header theme={theme} />
            <Speakers {...speakersProps} />
        </div>
    );
}

export default App;
