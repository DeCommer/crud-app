import {useParams} from 'react-router-dom';
import { useAuth } from './security/AuthContext';
export default function HomepageComponent() {

    const authContext = useAuth();
    const isAuthenticated = authContext.isAuthenticated;

    const { username } = useParams();

    return (
        <div className="main-container">
            <div className="home-description">
                {!isAuthenticated && <h1>Welcome to Listicles</h1>}
                {isAuthenticated && <h1>Welcome, {username}</h1>}
                <p>Listicles is the place to keep all of your lists.</p>
                <ul className="list">
                    <li>Create lists!</li>
                    <li>Read lists!</li>
                    <li>Update lists!</li>
                    <li>Delete lists!</li>
                </ul>
                <p>You can do it all with Listicle!</p>
            </div>
        </div>
    )
}