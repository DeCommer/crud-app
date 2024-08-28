import { useEffect, useState } from 'react';
import { getAllCrudsForUsername } from './api/CrudApiService';

export default function ListItemsComponent() {

    const [cruds, setCruds] = useState([]);
        useEffect (() => refreshCruds(), []);

        function refreshCruds() {
            getAllCrudsForUsername('Joseph')
            .then(response =>  {
                // console.log(response.data)
                setCruds(response.data)
            })
            .catch(error => (error));
        }
    return (
        <div className="ListTodos-comp">
            <div className='main-container'>
                <h1>List of Stuff</h1>
                <table className='basic-table'>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Description</td>
                            <td>Done</td>
                            <td>Complete By</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cruds.map (
                                crud => (
                                    <tr key={crud.id}>
                                        <td>{crud.id}</td>
                                        <td>{crud.description}</td>
                                        <td>{crud.done.toString()}</td>
                                        <td>{crud.targetDate.toString()}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}