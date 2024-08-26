import {useParams, Link} from 'react-router-dom'

export default function WelcomeComponent() {

    const { username } = useParams();
    console.log(username)
    // const { password } = useParams();
    return (
        <div className="welcome-comp">
            <div>
                <h1>Welcome, {username}</h1>
                <p>Manage your list <Link to="/list">here</Link></p>
            </div>
        </div>
    )
}
