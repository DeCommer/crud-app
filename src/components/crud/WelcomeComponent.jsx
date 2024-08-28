import {useParams, Link} from 'react-router-dom';
import HomepageComponent from './HomePageComponent';
import axios from 'axios';



export default function WelcomeComponent() {

    function callHelloRestApi() {
        axios.get('http://localhost:8080/hello-world')
            .then((response) => successfulRes(response))
            .catch((error) => errorlRes(error))
            .finally(() => console.log("Done"))
    }

    function successfulRes(response) {
        console.log(response);
    }
    function errorlRes(error) {
        console.log(error);
    }

    const { username } = useParams();
    console.log(username)
    // const { password } = useParams();
    return (
        <div className="welcome-comp">
            <div>
                <HomepageComponent />
                <p>Manage your list <Link to="/list">here</Link></p>
            </div>
            <div>
                <button className="btn" onClick={callHelloRestApi}>Hello</button>
            </div>
        </div>
    )
}
