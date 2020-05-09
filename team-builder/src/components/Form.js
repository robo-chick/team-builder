import React, { useState } from 'react';

const MemberForm = (props) => {
    const [formData, setFormData] = useState({
        id: Date.now(),
        name: '',
        email: '',
        role: ''
    });

    const clearForm = () => {
        setFormData({id: Date.now(), name: '', email: '', role: ''})
    };

    const handleChange = e => {
        console.log(e)
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit(formData);
        clearForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='entry-field'>
                <label htmlFor='name'>Name:</label>
                <textarea
                id='name'
                type='text'
                placeholder='Enter name'
                value={formData.name}
                name='name'
                onChange={handleChange}
                />
            </div>

            <div className='entry-field'>
                <label htmlFor='name'>EMail:</label>
                <textarea
                id='email'
                type='text'
                placeholder='Enter email'
                value={formData.email}
                name='email'
                onChange={handleChange}
                />
            </div>

            <div className='entry-field'>
                <label htmlFor='name'>Role:</label>
                <textarea
                id='role'
                type='text'
                placeholder='Enter role'
                value={formData.role}
                name='role'
                onChange={handleChange}
                />
            </div>
                <button type='submit'>Add New Member</button>
        </form>
    )
}

export default MemberForm;