import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Routes, Route, Link } from 'react-router-dom'
import { describe, it, expect } from 'vitest'

// Small test components
function Home() { return <h1>Home</h1> }
function About() { return <h1>About</h1> }
function User({ id }) { return <h1>User {id}</h1> }

// Route setup for tests
function TestApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserWrapper />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

function UserWrapper() {
  // If using react-router-dom v6+, use useParams:
  const { useParams } = require('react-router-dom')
  const { id } = useParams()
  return <User id={id} />
}

describe('routing', () => {
  it('renders home at / and navigates to about', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={['/']}>
        <TestApp />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument()

    await user.click(screen.getByRole('link', { name: /about/i }))
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
  })

  it('renders user route with param', () => {
    render(
      <MemoryRouter initialEntries={['/users/42']}>
        <TestApp />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: /user 42/i })).toBeInTheDocument()
  })

  it('shows 404 for unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/nope']}>
        <TestApp />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: /not found/i })).toBeInTheDocument()
  })
})