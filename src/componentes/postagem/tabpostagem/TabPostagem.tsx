import { useState } from 'react';
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';

import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';

function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string){
      setValue(newValue);
  }
return (
  <>
    <TabContext value={value}>
      <AppBar position="static" style={{ background: "#74849C" }}>
        <Tabs centered indicatorColor="secondary" onChange={handleChange}>
          <Tab label="Todas as postagens" value="1" className='bold-weight'/>
          <Tab label="Sobre mim" value="2" className='bold-weight'/>
        </Tabs>
      </AppBar>
      <TabPanel value="1" >
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <ListaPostagem />
        </Box>
      </TabPanel>
      <TabPanel value="2">
        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre Mim</Typography>
        <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Eu sou o Lucas e tenho 21 anos, moro em Osasco/São Paulo, tenho dois cachorro e cuido deles como se fossem meus filhos. Minha ultima experiência foi trabalhando dentro do Customer Service do Grupo Carrefour(mais especificamente cuidando do cartão de crédito), lá dentro eu tinha de gerenciar uma alta demanda de reclamações e infortúnios aos quais nossos cliente poderiam estar passando. Atualmente eu me encontro 100% devoto a área de tecnologia, cursando uma faculdade de analise e desenvolvimento de sistemas na UNIMAR, e cursando o bootcamp de pessoas desenvolvedora Java, da generation.</Typography>
      </TabPanel>
    </TabContext>
  </>
);
}
export default TabPostagem;