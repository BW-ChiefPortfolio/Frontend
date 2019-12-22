// WIP --- something to start
//Update! --- I am experimenting with react hook form to create the sign up form... You must install it using yarn add react-hook-form....
// The <br></br> Will be removed once we start styling.. they were used for temp styiling.
import React from 'react';
import useForm from 'react-hook-form';

const ChefSignUpForm = () => {
    const { register, errors, handleSubmit } = useForm();
    //when the form is submitted it will gather the data from the form the user inputed...
    const onSubmit = data => {
        console.log('data : ', data);
        //submit the form and get an alert on what the user inputed... Remember [data] is what the user inputed.
        alert(`User First Name: ${data.firstName} User Last Name: ${data.lastName} User Username: ${data.username} User Password: ${data.password}`)

    };


    return (
        // Updated the form by using react-hook-form... Not done, but it was simple to add this form. It is super resuable...
        <div>
            <div>
                <h2>Register as a Chef!</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='firstName'>First Name: </label>
                <input
                    name='firstName'
                    placeholder='First Name'
                    ref={register({
                        required: 'You must provide your First Name!',
                    })}
                />
                <br />
                {errors.firstName && errors.firstName.message}
                <br />

                <label htmlFor='lastName'>Last Name: </label>
                <input
                    name='lastName'
                    placeholder='Last Name'
                    ref={register({
                        required: 'You must provide your Last Name!',
                    })}
                />
                <br />
                {errors.lastName && errors.lastName.message}
                <br />

                <label htmlFor='username'>Username: </label>
                <input
                    name='username'
                    placeholder='username'
                    type='text'
                    ref={register({
                        required: 'You must provide a Username!',
                        maxLength: {
                            value: 8,
                            message: 'Max length is 8',
                        },
                    })}
                />
                <br />
                {errors.username && errors.username.message}
                <br />

                <label htmlFor='email'>Email: </label>
                <input
                    name='email'
                    placeholder='test@email.com'
                    type='text'
                    ref={register({
                        required: 'You must provide an Email',
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: 'Please provide a valid Email!',
                        },
                    })}
                />
                <br />
                {errors.email && errors.email.message}
                <br />

                <label htmlFor='password'>Password: </label>
                <input
                    name='password'
                    placeholder='Password'
                    type='password'
                    ref={register({
                        required: 'You must provide a valid Password!',
                        minLength: {
                            value: 8,
                            message: 'Your password must be 8 characters long',
                        }
                    })}
                />
                <br />
                {errors.password && errors.password.message}
                <br />

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
}

export default ChefSignUpForm;