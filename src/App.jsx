import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider";

export default function App() {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role);
      setLoggedInUserData(parsedUser.data);
    }
  }, []);
   

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser("admin");
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (userData && userData.employees) {
      const employee = userData.employees.find((e) => email === e.email && password === e.password);
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === 'admin' ? (
        <AdminDashboard  changeuser={setUser}/>
      ) : user === 'employee' ? (
        <EmployeeDashboard data={loggedInUserData} changeuser={setUser}/>
      ) : null}
    </>
  );
}
