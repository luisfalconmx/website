import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Component Testing - Button', () => {
  test('Should be true if founds exact text', () => {
    // Arrange
    const text = 'hello world'

    // Act
    render(<Button>{text}</Button>)

    // Assert
    expect(screen.getByText(text)).toBeDefined()
  })
})
