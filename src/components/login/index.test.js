import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '.';
import {jest} from '@jest/globals'

describe('Login', () => {
  const data=[{
    user: "teste",
    password: "teste",
    email: "teste",
    name: "teste",
    id: 45
  }]
  const setPage = jest.fn()


  it('testar senha errada', async () => {
    const { getByTestId, getByText } = render(<Login data={data} setPage={setPage}/>);
    const userInput = getByTestId('user');
    const passwordInput = getByTestId('password');
    const submitButton = getByText('Entrar');

    fireEvent.change(userInput, { target: { value: 'teste' } });
    fireEvent.change(passwordInput, { target: { value: 'errado' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      const error = getByTestId('error');
      expect(error).toBeInTheDocument();
    });
  });

  it('login correto', async () => {
    const { getByTestId, getByText } = render(<Login data={data} setPage={setPage}/>);
    const userInput = getByTestId('user');
    const passwordInput = getByTestId('password');
    const submitButton = getByText('Entrar');

    fireEvent.change(userInput, { target: { value: 'teste' } });
    fireEvent.change(passwordInput, { target: { value: 'teste' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(setPage).toHaveBeenCalledTimes(1);
    });
  });
});
