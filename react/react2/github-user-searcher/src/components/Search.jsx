import React from 'react';
import { useSearch } from './SearchContext';

const API_URL = (user) => {
  return `https://api.github.com/search/users?q=${user}`;
};

const Search = () => {
  const {
    users,
    setUsers,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
    error,
    setError,
  } = useSearch();

  const fetchUser = async (userName) => {
    try {
      setIsLoading(true);
      const response = await fetch(API_URL(userName));

      const data = await response.json();

      if (data.message) {
        setIsLoading(false);
        setIsError(true);
        setUsers([]);
        setError(data.message);
      } else {
        setIsLoading(false);
        setIsError(false);
        setUsers(data.items);
      }
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  const inputHandler = (e) => {
    if (e.target.value !== '') {
      fetchUser(e.target.value);
    } else {
      setUsers([]);
    }
  };

  return (
    <>
      <h1>Github user searcher</h1>
      <input type="text" onChange={inputHandler} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error}</p>}
      {users.length === 0 && !isError ? <p>No users found</p> : ''}
      {users.length > 0 && (
        <ul>
          {users.map((user) => {
            return <p key={user.id}>{user.login}</p>;
          })}
        </ul>
      )}
    </>
  );
};

export default Search;
