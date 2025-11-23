import React , {useState, useMemo} from 'react'
import { ColorModeContext } from './Component/ColorModeContext'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Nav from './Component/Nav'
import CssBaseline from '@mui/material/CssBaseline'
import { colors, GlobalStyles } from '@mui/material'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import About from './Page/About'
import Contact from './Page/Contact'
import Skill from './Page/Project'
import Skil from './Page/Skill'
import Zynox from './Page/Zynox'
import Foot from './Component/Footer'

const App = () => {
    const [mode, setMode] = useState('light')

    const colorMode = useMemo (
      () => ({
        toggleColorMode: () => {
        setMode ((prev) => (prev === "light" ? "dark" : 'light'))
       },
      }),
      []
    )

    const theme = useMemo (
        () => 
            createTheme({
                palette: {
                    mode,
                    background: {default: mode === "light" ? "rgb(223, 221, 221)" : "#242323ff" , },
                    borderColor: mode === "light"? "#e0e0e0" :"#333333" ,
                },
            }),
        [mode]
    )
  return (
    <div className='main'>
       <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>

            <GlobalStyles 
            styles={{
              body: {
                backgroundColor: theme.palette.background.default,
               color: theme.palette.text.primary ,
               border:theme.palette.borderColor
                    }
            }}/>
          
            <Nav/>

            <Routes>
               <Route path='/' element={<Home/>} />
               <Route path='/about' element={<About/>} />
               <Route path='/foot' element={<Foot/>} />
               <Route path='/contact' element={<Contact/>} />
               <Route path='/project' element={<Skill/>} />
               <Route path='/skill' element={<Skil/>} />
               <Route path='/zynox' element={<Zynox/>} />
            </Routes>


              <Foot/>
            
        </ThemeProvider>
       </ColorModeContext.Provider>
    </div>
  )
}

export default App
