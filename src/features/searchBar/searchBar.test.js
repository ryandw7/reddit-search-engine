import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar.js';
import { submitSearch } from './searchBarSlice.js';

test('submitSearch returns a search string', ()=>{
    let input = submitSearch('a search string');
    let expected = {
        payload: 'a search string',
        type: 'searchBar/submitSearch'
    }
    expect(input).toEqual(expected)
})