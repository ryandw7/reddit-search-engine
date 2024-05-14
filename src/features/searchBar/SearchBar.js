import { useState } from 'react';
import{ submitSearch, selectCurrentSearch } from './searchBarSlice.js';
import { useSelector } from 'react-redux';

export default function SearchBar() {
    const search = useSelector(selectCurrentSearch);
    const [text, setText] = useState('');
    const handleChange = (e) => {
        const value = e.target.value;
        setText(value);
        console.log(text)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        submitSearch({text: text});
        setText('');
        console.log(search)
    }
    return (
        <div className="search-bar" data-testid="search-bar">
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" onChange={handleChange} value={text} placeholder="search..." />
                <button type="submit">Search</button>
            </form>
            <div>{search}</div>
        </div>
    )
}