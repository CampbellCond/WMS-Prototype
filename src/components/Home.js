import React from 'react'
import styled from 'styled-components'

const HomeWrap = styled.div``

const WhatTime = styled.h2``

class Home extends React.Component {
  render() {
    return (
      <HomeWrap>
        <WhatTime>Pizza Time</WhatTime>
      </HomeWrap>
    )
  }
}

export default Home
