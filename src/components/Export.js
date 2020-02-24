import React from 'react'
import styled from 'styled-components'

const ExportWrap = styled.div``

const Yuh = styled.h2``

const ClickMe = styled.button``

class Export extends React.Component {
  handleExport = () => {
    console.log('the button works')
  }

  render() {
    return (
      <ExportWrap>
        <Yuh>Click me to export to excel</Yuh>
        <ClickMe onClick={this.handleExport} />
      </ExportWrap>
    )
  }
}

export default Export
