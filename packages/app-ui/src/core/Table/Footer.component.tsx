import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import ReactPaginate from 'react-paginate'

type FooterProps = {

}

function getTotalPages({count, pageSize} : { count: number, pageSize: number }) : number {
  let totalPages = 1;
  if (count && pageSize) {
    totalPages = Math.ceil(count / pageSize);
  }
  return totalPages;
}

const Container = styled.div`
  display: flex;
  justify-content: center;

  & > ul {
    display: inline-block;
    list-style: none;
    padding-left: 0px;
  }

  & > ul > li {
    display: inline;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
    color: ${({theme}) => theme.colors.text};
    cursor: pointer;
  }

  & > ul > li > a:focus {
    outline: none;
  }

  .active_page {
    background: ${({theme}) => theme.colors.clearBackground};
  }
`
const Footer : FC<FooterProps> = ({count, pageSize, onPageChange}) => {
  const totalPages = getTotalPages({count, pageSize})

  if (totalPages <= 1) return null;

  return (
    <Container>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break_element'}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={onPageChange}
        activeClassName='active_page'
      />
    </Container>
  )
}

export default Footer