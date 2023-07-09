import React from 'react'
import styled from 'styled-components'
import Cell from './Cell.jsx'

export default function Board() {
  function fillBoard() {
    const filledBoard = Array(9)
      .fill(1)
      .map((value, inx) => Array(9).fill(value + inx))
    console.log('filledBoard:', filledBoard)
    return filledBoard
  }

  return (
    <>
      <h2>Tablero</h2>
      <Container>
        {fillBoard().map((row) =>
          row.map((col, inx) => <Cell cellValue={''} />)
        )}
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 650px;
`
