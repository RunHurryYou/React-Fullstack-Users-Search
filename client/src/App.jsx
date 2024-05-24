import React, { useState, useEffect } from "react";
import SearchBar from './components/searchBar';
import UserList from './components/userList';
import axios from "axios";
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("http://[::1]:3000");
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  const handleSearch = async (term) => {
    const response = await axios.get(`http://[::1]:3000?term=${term}`);;
    setUsers(response.data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar onSearch={handleSearch} />
      </header>
      <main>
        <UserList users={users} />
      </main>
    </div>
  );
}

export default App;
