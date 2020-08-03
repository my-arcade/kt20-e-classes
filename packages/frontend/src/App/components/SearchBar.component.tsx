import React from 'react'
import styled from 'styled-components';
import { Input } from '@ui/core';

const Search = styled(Input)`
  height: 30%;
  width: 100px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 1px;
  border-style: solid;
`

const SearchBar: React.FC<{}> = () => {

  return (
    <Search />
  )
}

export default SearchBar;