import React , { useContext } from "react";
import { IconButton, useTheme } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ColorModeContext } from './ColorModeContext'

const ThemeToggle = () => {
    const theme = useTheme ()
    const colorMode = useContext(ColorModeContext)
  return (

   
    <div>
         <IconButton 
           onClick={colorMode. toggleColorMode}
            sx={{
                backgroundColor: 
                theme.palette.mode === 'light' ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)",
                borderRadius : "50%",
                width:40,
                height:40,
                marginTop:'12px',
                padding:'23px'
            }}
         
         > 
         {theme.palette.mode === "dark" ? 
           <Brightness7 /> : <Brightness4/>}
         </IconButton>
    </div>
  )
}

export default ThemeToggle
