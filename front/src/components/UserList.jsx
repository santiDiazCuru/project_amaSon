import React from 'react'
import { Link } from 'react-router-dom';

export default ({ list }) => {
    console.log("SOY PROPS", list)
    return <div className="row">
        <div>
            <table>
                {
                    list && list.map(user => (
                        <tr>
                            <td>
                                {user.id}
                            </td>
                            <td>{user.username}</td>
                            <td>
                                {user.email}
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>

    </div>
}
