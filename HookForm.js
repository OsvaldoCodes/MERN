import React, { useState } from 'react';

const HookForm = (props) => {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstName, setFirstName] = useState("");

    const [lastName, setLastName] = useState("");

    return (
        <div>
            <h1>Hook Form</h1>
            <form class="form">
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} />
                    {firstName.length < 2 && firstName.length > 0 ? ( <p>Must be at least 2 characters</p> ) : null}
                </div>
                
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} />
                    {lastName.length < 2 && lastName.length > 0 ? ( <p>Must be at least 2 characters</p> ) : null}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
                    {email.length < 5 ? <p>Must be at least 5 characters</p> : null}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    {password.length < 8 ? ( <p>Must be at least 8 characters</p> ) : null}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
                    {confirmPassword !== password ? <p>Passwords must match!</p> : null}

                </div>
            </form>

            <div class="form">

                <h3>Your Form Data</h3>

                <p>First Name: {firstName}</p>

                <p>Last Name: {lastName}</p>

                <p>Email: {email}</p>

                <p>Password: {password}</p>

                <p>Confirm Password: {confirmPassword}</p>

            </div>
        </div>
    )
}

export default HookForm;