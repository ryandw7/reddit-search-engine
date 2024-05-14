import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar.js';
import { submitSearch } from './searchBarSlice.js';
import store from '../../app/store.js';
import { Provider } from 'react-redux';

test('submitSearch returns a search string', ()=>{
    let input = submitSearch('a search string');
    let expected = {
        payload: 'a search string',
        type: 'searchBar/submitSearch'
    }
    expect(input).toEqual(expected)
});

test('handleChange updates text state', ()=>{
    render(<Provider store={store}><SearchBar /></Provider>);
    const input = screen.getByTestId("search-bar-input");
    fireEvent.change(input, {target: {value: 'a'}});
    expect(input.value).toEqual('a');
})