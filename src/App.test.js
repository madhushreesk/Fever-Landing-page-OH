import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import BookNowSection from './components/BookNowSection';

test('header renders with react testing tutorial in the document', () => {
  render(<App />);
  const linkElement = screen.getByText(/Comprehensive Fever Profile/i);
  expect(linkElement).toBeInTheDocument();
});


test("render all components in the document",() =>{
  const {getByPlaceholderText} = render(<BookNowSection/>);
  const childElement = screen.getByPlaceholderText("Enter your phone number")
  expect(childElement).toBeTruthy();
})