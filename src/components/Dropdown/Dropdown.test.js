import React from "react";
import {fireEvent, render, screen} from '@testing-library/react'
import {Dropdown} from './index'

it('should have values preselected, when value is passed', () => {
    render(<Dropdown label="Select" value={[2, 3]}
                     options={["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]}/>)
    expect(screen.getByText('Option 3')).toBeInTheDocument()
    expect(screen.getByText('Option 4')).toBeInTheDocument()
})

it('should toggle select dropdown', () => {
    render(<Dropdown label="Select" value={[2, 3]}
                     options={["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]}/>)
    const selectButton = screen.getByTestId('select-btn')
    fireEvent.click(selectButton)
    expect(selectButton)
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 5')).toBeInTheDocument()
    fireEvent.click(selectButton)
    expect(() => screen.getByText('Option 1').toThrow())
    expect(() => screen.getByText('Option 5').toThrow())
})

it('should add/remove  options', ()=>{
    render(<Dropdown label="Select" value={[]}
                     options={["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]}/>)
    const selectButton = screen.getByTestId('select-btn')
    fireEvent.click(selectButton)
    fireEvent.click(screen.getByText('Option 1'))
    expect(screen.getAllByText('Option 1')).toHaveLength(2)
    fireEvent.click(screen.getByText('Option 3'))
    expect(screen.getAllByText('Option 3')).toHaveLength(2)
    fireEvent.click(screen.getAllByText('Option 1')[0])
    expect(screen.getAllByText('Option 1')).toHaveLength(1)
})
