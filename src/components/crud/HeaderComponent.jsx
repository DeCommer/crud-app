import {Link} from 'react-router-dom'

export default function HeaderComponent() {
    return (
        <div className="header">
                <div className='header-left'>
                    <h2>📚 Listicles</h2>
                    <Link to="/">Home</Link>
                    <Link to="/list">List of Stuff</Link>
                </div>
                <div className='header-right'>
                    <Link to="/login">Login</Link>
                    <Link to="/logout">Logout</Link>
                </div>
        </div>
    )
}