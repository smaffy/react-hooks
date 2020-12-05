import React, {useState} from 'react';
import Main from "./Main";
import Alert from "./Alert";


export const AllertContext = React.createContext()

function App() {
    const [alert, setAlert] = useState(false)

    const toggleAlert = () => setAlert(prev => !prev)

    return (
        <AllertContext.Provider value={alert}>
            <div className='container pt-3'>
                <Alert />
                <Main toggle={toggleAlert} />
            </div>
        </AllertContext.Provider>
    )
}

export default App;

