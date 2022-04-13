import React from 'react';

const ItemTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    {/* <th>ID</th> */}
                    <th>Name</th>
                    <th>Definition</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.items.length > 0 ? (
                    props.items.map(item => {
                        const { id, name, definition } = item;
                        return (
                            <tr key={id}>
                                {/* <td>{id}</td> */}
                                <td>{name}</td>
                                <td>{definition}</td>
                                <td>
                                    <button onClick={() => props.deleteItem(id)}>Delete</button>
                                    <button onClick={() => props.editDefinition(id, item)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No Items found</td>
                    </tr>
                )
                }
            </tbody>
        </table>
    )
}

export default ItemTable;