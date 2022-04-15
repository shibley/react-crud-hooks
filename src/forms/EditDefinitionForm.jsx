import React, { useState, useEffect } from 'react';

const EditdefinitionForm = (props) => {

    useEffect(() => {
        setdefinition(props.currentItem)
    }, [props])

    const [item, setdefinition] = useState(props.currentItem);

    const handleChange = e => {
        const { name, value } = e.target;
        setdefinition({ ...item, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (item.name && item.definition) props.updateDefinition(item);
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={item.name} name="name" onChange={handleChange} />
            <label>Definition</label>
            <input className="u-full-width" type="text" value={item.definition} name="definition" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit definition</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditdefinitionForm;