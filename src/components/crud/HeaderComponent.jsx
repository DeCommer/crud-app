import { Link } from 'react-router-dom';
import { useAuth } from './security/AuthContext';

export default function HeaderComponent() {

    const authContext = useAuth();
    const isAuthenticated = authContext.isAuthenticated;

    function logout() {
        authContext.logout();
    }

    return (
        <div className="header">
                <div className='header-left'>
                    <h2>📚 Listicle</h2>
                    {isAuthenticated && <Link to="/Welcome/Joseph">Home</Link>}
                    {/* {isAuthenticated && <Link to="/list">List of Stuff</Link>} */}
                </div>
                <div className='header-right'>
                {!isAuthenticated && <Link to="/login">Login</Link>}
                {isAuthenticated && <Link to="/logout" onClick={logout}>Logout</Link>}
                </div>
        </div>
    )
}