import React from 'react'
import styled from 'styled-components'

const HomeWrap = styled.div``

const MainHeader = styled.h2``

class Home extends React.Component {
  render() {
    return (
      <HomeWrap>
        <MainHeader>Pizza Time</MainHeader>
      </HomeWrap>
    )
  }
}

export default Home
