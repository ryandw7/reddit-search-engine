import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar.js';

test('it renders input', ()=> {
    render(<SearchBar />);
})