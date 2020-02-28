import React from 'react'
import styled from 'styled-components'

const SearchWrap = styled.div``

const SearchMe = styled.h2``

const DateSearch = styled.h2``

const DateInput = styled.input``

const OrderNumSearch = styled.h2``

const OrderNumInput = styled.input``

const CustNameSearch = styled.h2``

const CustNameInput = styled.input``

const SearchButt = styled.h2``

const SearchButton = styled.button``

class Search extends React.Component {
  state = {
    searchDate: '',
    searchNum: '',
    searchName: ''
  }

  handleDateInput = e => {
    this.setState({ searchDate: e.target.value })
  }

  handleOrderNumInput = e => {
    this.setState({ searchNum: e.target.value })
  }

  handleCustNameInput = e => {
    this.setState({ searchName: e.target.value })
  }

  handleSearch = () => {
    console.log([this.state.searchDate, this.state.searchNum, this.state.searchName])
  }

  render() {
    return (
      <SearchWrap>
        <SearchMe>Search by date, order number, customer name, or all three!</SearchMe>
        <DateSearch>Date:</DateSearch>
        <DateInput onChange={this.handleDateInput} />
        <OrderNumSearch>Order Number:</OrderNumSearch>
        <OrderNumInput onChange={this.handleOrderNumInput} />
        <CustNameSearch>Customer Name:</CustNameSearch>
        <CustNameInput onChange={this.handleCustNameInput} />
        <SearchButt>Search!</SearchButt>
        <SearchButton onClick={this.handleSearch} />
      </SearchWrap>
    )
  }
}

export default Search
