import {useParams, Link} from 'react-router-dom';
import HomepageComponent from './HomePageComponenet';



export default function WelcomeComponent() {



    const { username } = useParams();
    console.log(username)
    // const { password } = useParams();
    return (
        <div className="welcome-comp">
            <div>
                <HomepageComponent />
                <p>Manage your list <Link to="/list">here</Link></p>
            </div>
        </div>
    )
}
