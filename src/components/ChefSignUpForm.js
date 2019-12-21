// WIP --- something to start
//Update! --- I am experimenting with react hook form to create the sign up form... You must install it using yarn add react-hook-form;
import React from 'react';
import useForm from 'react-hook-form';

const ChefSignUpForm = (prop) => {
    const { register, errors, handleSubmit } = useForm({
        validateCriteriaMode: "all"
    });
    const onSubmit = data => {
        console.log('data : ', data);

    };


    return (
        // Updated the form by using react-hook-form... Not done, but it was simple to add this form. It is super resuable...
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='firstName'>First Name: </label>
                <input
                    name='firstName'
                    placeholder='First Name'
                    ref={register({
                        required: 'Required',
                        maxLength: {
                            value: 15,
                            message: 'Max length is 15',
                        },
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
                        required: 'Required',
                        maxLength: {
                            value: 15,
                            message: 'Max length is 15',
                        },
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
                        required: 'Required',
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
                    placeholder='blah@gmail.com'
                    type='text'
                    ref={register({
                        required: 'Required',
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: 'Please provide a valid email',
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
                        required: true,
                        minLength: 10,
                    })}
                />
                <br />
                {errors.password && errors.password.types.required && (
                    <p>Password Required!</p>
                )}
                <br />

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
}

export default ChefSignUpForm;