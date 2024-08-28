
export default function ListItemsComponent() {
    
    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());

    const items = [
                    {id: 1, description: 'Jack it', isDone: true, completeBy: targetDate},
                    {id: 2, description: 'Eat', isDone: false, completeBy: targetDate},
                    {id: 3, description: 'Sleep', isDone: false, completeBy: targetDate}
                ]
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
                            items.map (
                                item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.description}</td>
                                        <td>{item.isDone.toString()}</td>
                                        <td>{item.completeBy.toDateString()}</td>
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