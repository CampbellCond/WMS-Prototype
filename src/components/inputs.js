import React from 'react'
import styled from 'styled-components'

const InputsWrap = styled.div``

const NameWrap = styled.div``

const WhatsYoName = styled.h2``

const NameInput = styled.input``

const OrderWrap = styled.div``

const CanIHaveYoNumber = styled.h2``

const OrderNum = styled.input``

const CustNameWrap = styled.div``

const CustomersName = styled.h2``

const CustName = styled.input``

const WhatchuDoing = styled.div``

const PullOrQC = styled.h2``

const PullButt = styled.button``

const QCButt = styled.button``

let date = new Date().getDate()

let month = new Date().getMonth() + 1

let year = new Date().getFullYear()

class Inputs extends React.Component {
  state = {
    CustomerName: '',
    EmployeeName: '',
    OrderNumber: '',
    Wyd: '',
    date: month + '/' + date + '/' + year
  }

  handleCustNameUpdate = e => {
    this.setState({ CustomerName: e.target.value })
  }

  handleOrderNumUpdate = e => {
    this.setState({ OrderNumber: e.target.value })
  }

  handleEmployeeNameUpdate = e => {
    this.setState({ EmployeeName: e.target.value })
  }

  handlePullButton = () => {
    this.setState({ Wyd: 'Pulled' })
  }

  handleQCButton = () => {
    this.setState({ Wyd: 'QCed' })
  }

  render() {
    return (
      <InputsWrap>
        <NameWrap>
          <WhatsYoName>Name: </WhatsYoName>
          <NameInput onChange={this.handleEmployeeNameUpdate} />
        </NameWrap>
        <OrderWrap>
          <CanIHaveYoNumber>Order Number: </CanIHaveYoNumber>
          <OrderNum onChange={this.handleOrderNumUpdate} />
        </OrderWrap>
        <CustNameWrap>
          <CustomersName>Customer Name: </CustomersName>
          <CustName onChange={this.handleCustNameUpdate} />
        </CustNameWrap>
        <WhatchuDoing>
          <PullOrQC>Pull/QC</PullOrQC>
          <PullButt onClick={this.handlePullButton}>Pulling</PullButt>
          <QCButt onClick={this.handleQCButton}>QCing</QCButt>
        </WhatchuDoing>
      </InputsWrap>
    )
  }
}

export default Inputs
