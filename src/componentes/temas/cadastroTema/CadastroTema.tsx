import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/actions';
import { toast } from 'react-toastify'

function CadastroTema() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();


  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });

  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  )

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado', {
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
  }, [token])
  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        'Authorization': token
      }
    })
  }

  function updatedTema(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
     
      try {
        await put(`/temas`, tema, setTema, {
            headers: {
                'Authorization': token
            }
        })

        toast.success('Tema atualizada com sucesso', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: 'colored',
            progress: undefined,
          })

        // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
    } catch (error) {
        console.log(`Error: ${error}`)
        toast.warning('Erro, por favor verifique a quantidade minima de caracteres', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: 'colored',
            progress: undefined,
          })
    }

    // Se o ID for indefinido, tente Cadastrar
} else {

  // TRY: Tenta executar o cadastro
  try {
      await post(`/temas`, tema, setTema, {
          headers: {
              'Authorization': token
          }
      })

      toast.success('Tema cadastrado com sucesso', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: 'colored',
          progress: undefined,
        })

      // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
  } catch (error) {
    console.log(`Error: ${error}`)
    toast.warning('Erro, por favor verifique a quantidade minima de caracteres', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: 'colored',
        progress: undefined,
      })
}
}

back()

  }

  function back() {
    navigate('/temas')
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Cadastro de tema:
        </Typography>
        <TextField
          value={tema.descricao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
          id="descricao"
          label="Descrição"
          variant="outlined"
          placeholder="Insira no mínimo 3 caracteres"
          name="descricao"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" className="btn">
          Finalizar
        </Button>
      </form>
    </Container>
  );
}

export default CadastroTema;
