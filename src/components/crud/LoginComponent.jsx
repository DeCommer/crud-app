import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './security/AuthContext';

export default function LoginComponenet() { 

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [showLoginFailMessage, setShowLoginFailMessage] = useState(false);

    const navigate = useNavigate();

    const authContext = useAuth();

    function handleUsernameChange(event) {
        setUserName(event.target.value);
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit() {
        if(authContext.login(username, password)) {
            navigate(`/welcome/${username}`);
        }else {
            setShowLoginFailMessage(true);
        }
    }
    return (
        <div className="login">
            <div className='login-main-container'>
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
            </div>
            {showLoginFailMessage && <div className='errorMessage'><p>Enter valid credentials</p></div>}
        </div>
    )
}