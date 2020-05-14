import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Todo from './Todo';

describe('Todo test section', () => {
  it('should render a checkbox', () => {
    // prepare
    render(<Todo />);
    // execution
    expect(document.getElementsByTagName('input').length).toBe(1);
  });

  it('should render a title', () => {
    // prepare
    render(<Todo title="test" />);
    // execution
    expect(document.getElementsByClassName('title')[0].textContent).toBe('test');
  });

  it('should render the creationDate', () => {
    // prepare
    const creationDate = new Date();
    creationDate.setDate(creationDate.getDate() - 5);
    render(<Todo creationDate={creationDate} />);
    // execution
    expect(document.getElementsByClassName('creation-date')[0].textContent).toBe('Created 5 days ago');
  });

  it('should call handleClick when the checkbox is clicked', () => {
    // prepare
    const mockHandleClick = jest.fn();
    render(<Todo title="test" handleClick={mockHandleClick} />);
    // execution
    fireEvent.click(document.getElementsByClassName('todo')[0]);
    expect(mockHandleClick).toHaveBeenCalled();
  });
});