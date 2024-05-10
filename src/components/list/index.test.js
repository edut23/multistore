import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import List from '.';
import {jest} from '@jest/globals'

describe('List', () => {
  const data = [
    {
      user: "um",
      password: "teste",
      email: "um@um.com",
      name: "um",
      id: 45
    },
    {
      user: "dois",
      password: "teste",
      email: "dois@dois.com",
      name: "dois",
      id: 49
    },
  ];
  
  const setPage = jest.fn()
  const setData = jest.fn()


  it('testar filtro', async () => {
    const { getByTestId, getByText } = render(<List data={data} setPage={setPage} setData={setData}/>);
    const filterInput = getByTestId('filter');
    const user = getByText('dois');

    fireEvent.change(filterInput, { target: { value: 'um' } });

    await waitFor(() => {
      expect(user).not.toBeInTheDocument();
    });
  });
});
