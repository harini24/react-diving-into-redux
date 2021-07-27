import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { testActions } from '../store/Test'
const Test = props => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.test.users)
    useEffect(() => {

        const fetchUsers = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/users')
            if (!data.ok) {
                console.log("error")
            }
            const resp = await data.json()
            console.log(resp)
            dispatch(testActions.getUsers(resp))
        }

        fetchUsers()
    }, [])

    return (
        <div>
            <table>
                <tr>
                    <th>Address</th>
                    <th>COmpany</th>
                    <th>email</th>
                    <th>id</th>
                    <th>name</th>
                </tr>
                {users && users.map(user => {
                    return (
                        <tr>
                            <td>{user.address.city} {user.address.street} {user.address.suite} {user.address.zipcode}</td>
                            <td>{user.company.name}</td>
                            <td>{user.email}</td>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Test