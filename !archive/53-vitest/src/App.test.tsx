import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  describe('Static Content', () => {
    test('renders Vite + React heading', () => {
      render(<App />)
      const linkElement = screen.getByText(/Vite \+ React/i)
      expect(linkElement).toBeInTheDocument()
    })
  })

  describe('Interactive Elements', () => {
    test('counter increments when button is clicked', () => {
      render(<App />)
      const button = screen.getByRole('button')
      expect(button).toHaveTextContent('count is 0')
      fireEvent.click(button)
      expect(button).toHaveTextContent('count is 1')
    })
  })
})
