import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Box } from '@mui/material';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import './Navbar.css';

function Navbar() {

  const [token, setToken] = useLocalStorage('token')
  let navigate = useNavigate()

  function goLogout() {
    setToken('')
    alert("Usuário deslogado")
    navigate('/login')
  }

  return (
    <>
      <AppBar position="static" style={{background: '#67727b', color: '#F2F2F2'}}>
        <Toolbar variant="dense">
          <Box style={{ cursor: "default" }}>
            <Typography variant="h5" color="inherit">
              Lucas Dantas //
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                home
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                cadastrar tema
              </Typography>
            </Box>
            <Link to="/login" className="text-decorator-none">
            
            <Box mx={1} style={{ cursor: "pointer" }} onClick={goLogout}>
              <Typography variant="h6" color="inherit" className="logout">
                logout
              </Typography>
              </Box>

            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar
