import React from 'react'
import * as S from './style'

const ExpenseItem = () => {
  return (
    <>
      <S.ExpenseItemWrap>
        <div>March 28th 2021</div>
        <div className="description">
          <h2>Car Insurance</h2>
          <div className="price">$294.67</div>
        </div>
      </S.ExpenseItemWrap>
    </>
  )
}

export default ExpenseItem
