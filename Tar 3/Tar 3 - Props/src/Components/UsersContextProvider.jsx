import { createContext, useEffect, useState } from "react"

export const UsersContext = createContext();

export default function UsersContextProvider(props) {

  const [usersList, setUsersList] = useState([]);
  const [rememberUser, setRememberUser] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem('last user') !== null) {
      let lastUser = JSON.parse(localStorage.getItem('last user'));
      setRememberUser(lastUser);
    }

    if (localStorage.getItem("users") !== null) {
      let usersFromLocal = JSON.parse(localStorage.getItem("users"));
      setUsersList(usersFromLocal);
    }
    
    if (sessionStorage.getItem("currentUser") !== null) {
      let current = JSON.parse(sessionStorage.getItem("currentUser"));
      setCurrentUser(current);
    }

    
  }, [])



  const loginUser = (user) => {
    let exist = usersList.find(userLC => userLC['userName'] === user.userName && userLC['password'] === user.password);
    if (exist != undefined) {
      setCurrentUser(exist);
      sessionStorage.setItem("currentUser", JSON.stringify(exist));
      if (user.remember) {
        localStorage.setItem('last user', JSON.stringify(exist));
      }
      else{
        localStorage.removeItem('last user')
      }
      return true;
    }
    else {
      return false;
    }
  }

  const registerUser = (user) => {

    //check if the current user isn't exists
    if (!usersList.find(u => u.userName == user.userName || u.email == user.email)) {
      let tempUsers = [...usersList, user];
      setUsersList(tempUsers);
      localStorage.setItem('users', JSON.stringify(tempUsers));

      sessionStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user);
      return true;
    }
    else {
      console.log('User allready exists')
      return false;
    }
  }

  const deleteUser = (userEmail) => {
    let tempUsers = usersList.filter(u => u.email !== userEmail)
    setUsersList(tempUsers);
    localStorage.setItem('users', JSON.stringify(tempUsers));
  }

  const updateUser = (updateUser, isCurrent) => {
    //remove the user who updated
    let tempUsers = usersList.filter(u => u['email'] !== updateUser.email);
    //push the new user to temp
    tempUsers = [...tempUsers, updateUser];
    //push temp to usersList
    setUsersList(tempUsers);
    //push the new array to LC
    localStorage.setItem('users', JSON.stringify(tempUsers));
    
    if (isCurrent) {
      sessionStorage.setItem('currentUser', JSON.stringify(updateUser));
      setCurrentUser(updateUser);
      rememberUser.userName!=null && localStorage.setItem('last user', JSON.stringify(updateUser));
    }
    //open modal
    //setOpenModal(true);
  }



  return (
    <UsersContext.Provider value={{ rememberUser, loginUser, currentUser, registerUser, usersList, deleteUser, updateUser }}>
      {props.children}
    </UsersContext.Provider>
  )
}

