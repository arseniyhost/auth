import React, { useState } from 'react'

const LoginForm = ({ Login, error, showRegister }) => {
    const [details, setDetails] = useState({ name: "", password: "" })


    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <div className="form-container">
            <button className="btn-change" onClick={showRegister}>Register</button>
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Login</h2>
                    <div className="input-group">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="inner-input"
                            value={details.name}
                            onChange={e => setDetails({ ...details, name: e.target.value })}
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
                            required
                        />
                    </div>
                    {(error !== "") ? (<div className="error">{error}</div>) : ""}
                    <input
                        type="submit"
                        className="btn"
                        value="Login"
                    />
                </div>
            </form>
        </div>
    )
}

export default LoginForm
