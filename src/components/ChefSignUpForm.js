// WIP --- something to start
import React, { useState } from 'react';

const ChefSignUpForm = () => {
    const [chef, setChef] = useState({ name: '', email: '', username: '', password: '', confirm: '' });

    console.log('chef,', chef)

    const handleChange = e => {
        setChef({ ...chef, [e.target.name]: e.target.value });
    }

    const signup = e => {
        e.preventDeafault();
        setChef(chef);
    }
    return (
        // This is not finished yet --- I am using this as a starter point... 
        <div>

            <form onSubmit={signup}>
                Name:
                <input
                    id='name'
                    type='text'
                    name='name'
                    placeholder='Full Name'
                    value={chef.name}
                    onChange={handleChange}
                />
                Email:
                <input
                    id='email'
                    type='text'
                    name='email'
                    placeholder='Email'
                    value={chef.email}
                    onChange={handleChange}
                />
                Username:
                <input
                    id='username'
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={chef.username}
                    onChange={handleChange}
                />
                Password:
                <input
                    id='password'
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={chef.password}
                    onChange={handleChange}
                />
                Confirm Password:
                <input
                    id='conf-password'
                    type='password'
                    name='conf-password'
                    placeholder='Confirm Password'
                />
                <button name="signup">signup</button>

            </form>
        </div>
    );
}

export default ChefSignUpForm;