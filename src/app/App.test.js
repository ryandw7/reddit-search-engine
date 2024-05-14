import { render, screen } from '@testing-library/react';
import App from './App.js';

test('it renders search bar feature', () => {
  render(<App />);
  const searchBarElement = screen.getByTestId("search-bar")
  expect(searchBarElement).toBeInTheDocument();
});

test('it renders the profile feature', () => {
  render(<App />);
  const profileElement = screen.getByTestId("profile");
  expect(profileElement).toBeInTheDocument();
});

test('it renders the subreddits feature', () => {
  render(<App />);
  const subredditsElement = screen.getByTestId("subreddits");
  expect(subredditsElement).toBeInTheDocument();
});

test('it renders trending feature', () => {
  render(<App />);
  const trendingElement = screen.getByTestId("trending");
  expect(trendingElement).toBeInTheDocument();
});


