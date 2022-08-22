import React, {useCallback, useState} from 'react'
import styled from 'styled-components'

type Props = {
    label?: string;
    value?: number[];
    options: string[];
};

const Container = styled.div`
  padding: 1rem;
  margin: auto;
  max-width: 460px;
  text-align: center;
`

const SelectedOption = styled.div`
  border: solid 1px rgba(001, 235, 175);
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 0.25rem 0;
`

const SelectOption = styled.li`
  padding: 0.5rem;

  :hover {
    font-weight: bold;
    cursor: pointer;
  }
`

const SelectButton = styled.button`
  cursor: pointer;
  border: solid 1px rgba(001, 235, 175);
  border-radius: 1rem;
  padding: 0.5rem;
  width: 100%;
`

const OptionsWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const DropdownStyled = styled.div`
  border-radius: 1rem;
  background: aqua;
  min-width: 120px;
`

export const Dropdown = ({label, value = [], options}: Props) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(value)
  const toggle = useCallback(() => {
    setOpen(!open)
  }, [open])

  const onSelect = useCallback((index) => {
    setSelected((prev: number[]) => {
      const filtered = prev.filter((val) => val !== index)
      return filtered.length < prev.length ? [...filtered] : [...prev, index]
    })
  }, [])

  return (
    <Container>
      <DropdownStyled>
        <SelectButton
            data-testid="select-btn"
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          className={open ? 'expanded' : ''}
          onClick={toggle}
        >
          {label ? `${label} ` : null}
        </SelectButton>
        {open && (
          <OptionsWrapper
            className={`options ${open ? 'show' : ''}`}
            role="listbox"
            tabIndex={-1}
          >
            {options.map((option, i) => (
              <SelectOption
                key={i}
                id={option}
                role="option"
                tabIndex={0}
                onClick={() => onSelect(i)}
              >
                {option}
              </SelectOption>
            ))}
          </OptionsWrapper>
        )}
      </DropdownStyled>
      <div>
        {selected.map((i) => (
          <SelectedOption key={i}>{options[i]}</SelectedOption>
        ))}
      </div>
    </Container>
  )
}
