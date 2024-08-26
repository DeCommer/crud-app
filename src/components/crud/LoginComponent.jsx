import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function LoginComponenet() { 
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [showLoginSuccessMessage, setShowLoginSuccessMessage] = useState(false);
    const [showLoginFailMessage, setShowLoginFailMessage] = useState(false);

    const navigate = useNavigate();

    function handleUsernameChange(event) {
        setUserName(event.target.value);
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit() {
        if(username === `Joseph` && password === `password`) {
            console.log('success');
            setShowLoginSuccessMessage(true);
            setShowLoginFailMessage(false);
            navigate(`/welcome/${username}`);
        }else {
            console.log('failed')
            setShowLoginFailMessage(true);
            setShowLoginSuccessMessage(false);
        }
    }
    return (
        <div className='login-main-container'>
            <div className="login">
                <div className="login-form">
                        <h2>Login</h2>
                    <div>
                        <label>Username</label>
                        <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <div>
                        <button type="button" name="login" onClick={handleSubmit}>Login</button>
                    </div>
                </div>
                {showLoginSuccessMessage && <div className='successMessage'>Authentication successful</div>}
                {showLoginFailMessage && <div className='errorMessage'><p>Enter valid credentials</p></div>}
            </div>
        </div>
    )
}