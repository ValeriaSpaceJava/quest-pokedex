import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../contexts/ThemeContext';
import Home from '../pages/Home';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';



describe('Home Page', () => {
  it('deve renderizar o título da Pokédex', () => {
    render(
      <BrowserRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(screen.getByText(/Pokédex/i)).toBeInTheDocument();
  });

  it('deve ter um botão de alternar tema', () => {
    render(
      <BrowserRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(screen.getByRole('button', { name: /Alternar Tema/i })).toBeInTheDocument();
  });
});
