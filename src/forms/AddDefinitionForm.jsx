import React, { useState } from 'react';

const AddItemForm = (props) => {

    const initItem = { id: null, name: '', definition: '' };

    const [item, setItem] = useState(initItem);

    const handleChange = e => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (item.name && item.definition) {
            handleChange(e, props.addItem(item));
        }
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={item.name} name="name" onChange={handleChange} />
            <label>Definition</label>
            <input className="u-full-width" type="text" value={item.definition} name="definition" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Add definition</button>
        </form>
    )
}

export default AddItemForm;