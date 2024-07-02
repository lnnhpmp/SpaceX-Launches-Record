import { render, screen } from '@testing-library/react'
import App from './App'

test('renders number', () => {
  render(<App />)
  const linkElement = screen.getByText(/0/i)
  expect(linkElement).toBeInTheDocument()
})
