import React, { useState } from 'react'

const RegisterForm = ({ showLogin, registerUser }) => {
    const [details, setDetails] = useState({ name: "", email: "", password: "" })

    const submitHandler = e => {
        e.preventDefault();

        registerUser(details);
    }

    return (
        <div className="form-container">
            <button className="btn-change" onClick={showLogin}>Login</button>
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Register</h2>
                    <div className="input-group">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="inner-input"
                            value={details.name}
                            onChange={e => setDetails({ ...details, name: e.target.value })}
                            required
                            minlength="3"
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="inner-input"
                            onChange={e => setDetails({ ...details, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="inner-input"
                            onChange={e => setDetails({ ...details, password: e.target.value })}
                            minlength="5"
                            required
                        />
                    </div>
                    <input
                        type="submit"
                        className="btn"
                        value="Register"
                    />
                </div>
            </form>
        </div>
    )
}

export default RegisterForm
