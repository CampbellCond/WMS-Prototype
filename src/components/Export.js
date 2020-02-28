import React from 'react'
import styled from 'styled-components'

const ExportWrap = styled.div``

const Yuh = styled.h2``

const ClickMe = styled.button``

const RangeTitle = styled.h2``

const DateRange = styled.input``

class Export extends React.Component {
  state = {
    date: ''
  }

  handleExport = () => {
    console.log(this.state.date)
  }

  handleDateChange = e => {
    this.setState({ date: e.target.value })
  }

  render() {
    return (
      <ExportWrap>
        <Yuh>Click me to export to excel</Yuh>
        <RangeTitle>Enter Date/s to export</RangeTitle>
        <DateRange onChange={this.handleDateChange} />
        <ClickMe onClick={this.handleExport}>Export!</ClickMe>
      </ExportWrap>
    )
  }
}

export default Export
