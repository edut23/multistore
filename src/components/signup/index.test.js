import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Signup from '.';
import {jest} from '@jest/globals'

describe('Signup', () => {
  it('deve exibir erro ao submeter o formulário emails diferentes', async () => {
    const setPage = jest.fn();
    const setData = jest.fn();
    const { getByTestId, getByText } = render(<Signup setPage={setPage} setData={setData}/>);
    const submitButton = getByText('Cadastrar');

    const nameInput = getByTestId('name');
    const userInput = getByTestId('user');
    const emailInput = getByTestId('email');
    const confirmEmailInput = getByTestId('confirmEmail');
    const passwordInput = getByTestId('password');
    

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(userInput, { target: { value: 'johndoe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(confirmEmailInput, { target: { value: 'wrong@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      const error = getByTestId('error');
      expect(error).toBeInTheDocument();
    });
  });

  it('deve atualizar o estado ao digitar nos campos', async () => {
    const { getByTestId } = render(<Signup />);
    const nameInput = getByTestId('name');
    const userInput = getByTestId('user');
    const emailInput = getByTestId('email');
    const confirmEmailInput = getByTestId('confirmEmail');
    const passwordInput = getByTestId('password');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(userInput, { target: { value: 'johndoe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(confirmEmailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    await waitFor(() => {
      expect(nameInput).toHaveValue('John Doe');
      expect(userInput).toHaveValue('johndoe');
      expect(emailInput).toHaveValue('john@example.com');
      expect(confirmEmailInput).toHaveValue('john@example.com');
      expect(passwordInput).toHaveValue('password123');
    });
  });

  it('deve enviar o formulário ao ser submetido', async () => {
    const setPage = jest.fn();
    const setData = jest.fn();
    const { getByText } = render(<Signup  setPage={setPage} setData={setData}/>);
    const submitButton = getByText('Cadastrar');

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(setData).toHaveBeenCalledTimes(1);
    });
  });
});
