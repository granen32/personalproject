import React, { FC } from 'react'
import ExpenseItem from './components/ExpenseItem'
import { ThemeProvider } from 'styled-components'
import { Theme } from 'styles/Theme'
import { GlobalStyle } from 'styles/globalStyle'
const App: FC = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <ExpenseItem />
      </ThemeProvider>
    </>
  )
}

export default App
