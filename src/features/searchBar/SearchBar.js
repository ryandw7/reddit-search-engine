import { useState } from 'react';
import { submitSearch, selectCurrentSearch } from './searchBarSlice.js';
import { useSelector, useDispatch } from 'react-redux';

export default function SearchBar() {
    const dispatch = useDispatch();
    const search = useSelector(selectCurrentSearch);
    const [text, setText] = useState('');
    const handleChange = (e) => {
        const value = e.target.value;
        setText(value);
        console.log(text);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitSearch(text));
        setText('');
        console.log(search)
    }
    return (
        <div className="search-bar" data-testid="search-bar">
            <form onSubmit={handleSubmit}>
                <input data-testid="search-bar-input" className="search-bar-input" type="text" name="search" onChange={handleChange} value={text} placeholder="search..." />
                <button data-testid="search-bar-button" className="search-bar-button" type="submit">{'>'}</button>
            </form>
            <div>{search}</div>
        </div>
    )
}