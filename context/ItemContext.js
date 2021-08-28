import { createContext } from 'react';

const SearchItemContext = createContext({
    searchItem: "",
    setSearchItem: () => { }
});

export default SearchItemContext;