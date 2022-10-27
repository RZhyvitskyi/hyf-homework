import React, { useState, useContext } from 'react';

const SearchContext = React.createContext({});

export const useSearch = () => {
  return useContext(SearchContext);
};

const SearchProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');

  return (
    <SearchContext.Provider
      value={{
        users,
        setUsers,
        isLoading,
        setIsLoading,
        isError,
        setIsError,
        error,
        setError,
      }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
