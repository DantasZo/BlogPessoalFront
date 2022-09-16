
import "./Home.css";
import TabPostagem from "../../componentes/postagem/tabpostagem/TabPostagem";
import { Grid, Button, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import ModalPostagem from "../../componentes/postagem/modalPostagem/ModalPostagem";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function Home() {
  let navigate = useNavigate();
  
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  )

  useEffect(() => {
    if (token == "") {
      toast.error('Usuário precisa estar logado', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: 'colored',
        progress: undefined,
      })
        navigate("/login")

    }
}, [token]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="container"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo-h3"
            >
              Seja bem-vindo!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo-h5"
            >
              Blog pessoal com meus estudos sobre linguagens de programação e
              tecnologias.
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Button variant="outlined" className="btn">
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://pbs.twimg.com/media/FbBPK--WAAARYvn?format=png&name=small" 
            alt="" 
            width="500px" 
            height="512px"
            
          />
        </Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
