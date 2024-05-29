import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import HomeListings from './HomeListings.js'
import store from '../../app/store.js';
describe('HomeListings', () => {
    const mockListings = <Provider store={store}><HomeListings /></Provider>
    it('renders a div of listings', async () => {
        const listings = await waitFor(() => screen.getAllByTestId('listing'));
        await waitFor(() => render(mockListings))
            .then(() => console.log(listings))
    })
})