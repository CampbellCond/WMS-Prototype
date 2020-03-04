import React from 'react'
import styled from 'styled-components'

const SearchWrap = styled.div``

const SearchMe = styled.h2``

const DateText = styled.h2``

const DateInput = styled.input``

const OrderNumText = styled.h2``

const OrderNumInput = styled.input``

const CustNameText = styled.h2``

const CustNameInput = styled.input``

const SearchText = styled.h2``

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
        <DateText>Date:</DateText>
        <DateInput onChange={this.handleDateInput} />
        <OrderNumText>Order Number:</OrderNumText>
        <OrderNumInput onChange={this.handleOrderNumInput} />
        <CustNameText>Customer Name:</CustNameText>
        <CustNameInput onChange={this.handleCustNameInput} />
        <SearchText>Search!</SearchText>
        <SearchButton onClick={this.handleSearch} />
      </SearchWrap>
    )
  }
}

export default Search
