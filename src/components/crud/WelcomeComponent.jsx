import {Link, useParams} from 'react-router-dom';
import { useState } from 'react';
import HomepageComponent from './HomePageComponent';
import { getHelloWorldBean } from './api/HelloWorldAPIService';

export default function WelcomeComponent() {

    const { username } = useParams();
    console.log(username);

    const [message, setMessage] = useState(null);
    function callHelloRestApi() {
        getHelloWorldBean("Joseph")
            .then((response) => successfulRes(response))
            .catch((error) => errorlRes(error))
            .finally(() => console.log("Done"))
    }

    function successfulRes(response) {
        console.log(response);
        setMessage(response.data.message);
    }
    function errorlRes(error) {
        console.log(error);
    }

    return (
        <div className="welcome-comp">
            <div>
                <HomepageComponent />
                <p>Manage your list <Link to="/list">here</Link></p>
            </div>
            <div>
                <button className="btn" onClick={callHelloRestApi}>Message from API</button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}
