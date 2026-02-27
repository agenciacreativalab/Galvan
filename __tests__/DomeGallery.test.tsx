import { render, screen } from '@testing-library/react'
import { DomeGallery } from '../components/DomeGallery'

// Mock de useRouter y next/image
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
    }
  },
}))

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />
  },
}))

describe('DomeGallery', () => {
  it('renders the gallery with provided items', () => {
    const mockItems = [
      { id: '1', title: 'Test Project 1', image: '/test1.jpg', description: 'Desc 1' },
      { id: '2', title: 'Test Project 2', image: '/test2.jpg', description: 'Desc 2' },
    ]

    render(<DomeGallery items={mockItems} />)
    
    // Verificamos que los textos de los proyectos aparezcan
    expect(screen.getByText('Test Project 1')).toBeInTheDocument()
    expect(screen.getByText('Test Project 2')).toBeInTheDocument()
  })
})