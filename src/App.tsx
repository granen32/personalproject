import React, { FC } from 'react'
import ExpenseItem from './components/ExpenseItem'
import { ThemeProvider } from 'styled-components'
import { Theme } from 'styles/Theme'
const App: FC = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <ExpenseItem />
      </ThemeProvider>
    </>
  )
}

export default App
