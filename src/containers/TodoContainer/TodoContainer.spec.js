import React from 'react';
import TodoContainer from './TodoContainer';
import { render, fireEvent } from '@testing-library/react';
import todos from '__mocks__/todos';

const mockUseSelector = jest.fn((state) => { todoReducer: todos });

jest.requireMock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: mockUseSelector 
}));

describe('TodoContainer test section', () => {
  it('should render one Todo component for each todo provided', () => {
    // prepare
    render(<TodoContainer />);
    // execution
    expect(document.getElementsByClassName('todo').length).toBe(6);
  });
})