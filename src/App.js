import React, { useState } from 'react'
import LoginForm from './components/LoginForm';
import "./App.css";
import RegisterForm from './components/RegisterForm';

const App = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [isRegister, setIsRegister] = useState(false);

  const [users, setUsers] = useState([
    {
      name: "Admin",
      email: "admin@gmail.com",
      password: "12345"
    },
    {
      name: "Arseny",
      email: "ars@gmail.com",
      password: "arseny"
    }
  ])

  const [user, setUser] = useState({ name: "", email: "" });

  const [error, setError] = useState("");

  const registerUser = (user) => {
    const newUsers = [user, ...users];
    setUsers(newUsers)

    showLogin();
  }

  const showLogin = () => {
    setIsLogin(true);
    setIsRegister(false);
  }

  const showRegister = () => {
    setIsRegister(true);
    setIsLogin(false);
  }

  const Login = details => {
    for (let i = 0; i < users.length; i++) {
      if (details.name === users[i].name && details.password === users[i].password) {
        console.log("Logged in");
        setUser({
          name: details.name,
          email: details.email
        })
      } else {
        console.log("Wrong name or password")
        setError("Wrong name or password")
      }
    }
  }

  const Logout = () => {
    setUser({ name: "", email: "" })
  }

  return (
    <div className="box-container">
      {(user.email != "") ? (
        <div className="welcome">
          <h1>Welcome, <span>{user.name}</span></h1>
          <div className="img-box">
            <img src="https://images.pexels.com/photos/5898313/pexels-photo-5898313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="photo" />
          </div>
          <button className="btn-out" onClick={Logout}>Logout</button>
        </div>
      ) : (
        isLogin ? <LoginForm Login={Login} error={error} showRegister={showRegister} /> : <RegisterForm registerUser={registerUser} showLogin={showLogin} />
      )}
    </div>
  )
}

export default App
