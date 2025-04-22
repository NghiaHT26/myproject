import React, { useState } from 'react';
import users from './User';
function Button(){
  const [count, setCount] = useState(0);

  const handleClicked = () => {
    setCount(count + 1);
  }
  const handleResetCount = () => {
    setCount(0);
  }
  return (
    <>
      <button onClick= {handleClicked}>Click Me!</button>
      <p>Click: {count}</p>
      <button onClick= {handleResetCount}>Reset</button>
    </>
    
  );
}
function UserCard(props){
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.age}</p>
      <p>{props.isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
function RegistrationForm(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [IsAgree, setIsAgree] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const [submittedUsername, setSubmittedUsername] = useState('');
  const [submittedPassword, setSubmittedPassword] = useState('');
  const [submittedIsAgree, setSubmittedIsAgree] = useState(false);

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const handleRegistration = (e) => {
    e.preventDefault();
    let isValid = true;
    if(username === ''){
      setUsernameError('Username is required');
      isValid = false;
    }
    else{
      setUsernameError('');
    }
    if(password === ''){
      setPasswordError('Password is required');
      isValid = false;
    }
    else{
      setPasswordError('');
    }
    if(isValid){
    setSubmittedUsername(username);
    setSubmittedPassword(password);
    setSubmittedIsAgree(IsAgree);
    setIsRegistered(true);
    setUsername('');
    setPassword('');
    setIsAgree(false);
    }
    else {
      setIsRegistered(false);
    }
  }
 return (
   <form onSubmit={handleRegistration}>
    <div>
          <label>Username: </label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          {usernameError && <p>{usernameError}</p>}
        </div>
        <div>
          <label>Password: </label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          {passwordError && <p>{passwordError}</p>}
        </div>
        <div>
          <label>Agree to terms and conditions: </label>
          <input 
            type="checkbox" 
            checked={IsAgree} 
            onChange={(e) => setIsAgree(e.target.checked)} 
          />
        </div>
        <button type="submit">Register</button>
        {isRegistered &&
          <div>
            <p>Registration successful!</p>
            <p>Username: {submittedUsername}</p>
            <p>Password: {submittedPassword}</p>
            <p>Agree to terms and conditions: {submittedIsAgree ? "Yes" : "No"}</p>
          </div>
        }
   </form>
 ) 
}
function UserInfo(user){
  return(
    <div>
      <p>Username: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Status: {user.isOnline ? "Online" : "Offline"}</p>
    </div>
  )
}
function App() {
  
  return (
    <div className="App">
      <h1>Hello Project System</h1>
      <Button />
      <UserCard name = "Lan" email = "Lan@gmail.com" age = {12} isOnline = {true}/>
      <RegistrationForm/>
      <h2>User List</h2>
      {
        users.push({
          id: 4,
          name: "Mai",
          email: "Mai@gmail.com",
          isOnline: true
        })
      }
      {
        users.map((user) => (
          <UserInfo key = {user.id} name = {user.name} email = {user.email} isOnline = {user.isOnline}/>
        ))
      }
    </div>
  );
}

export default App;
