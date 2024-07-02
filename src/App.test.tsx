import { render, screen } from '@testing-library/react'
import App from './App'

test.skip('renders number', () => {
  render(<App />)
  const linkElement = screen.getByText(/0/i)
  expect(linkElement).toBeInTheDocument()
})
