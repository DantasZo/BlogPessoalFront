import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import Navbar from "./componentes/estaticos/navbar/Navbar";
import Footer from "./componentes/estaticos/footer/footer";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaTema from "./componentes/temas/ListaTemas/ListaTema";
import ListaPostagem from "./componentes/postagem/listapostagem/ListaPostagem";

import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import CadastroPost from "./componentes/postagem/cadastroPost/CadastroPost";
import CadastroTema from "./componentes/temas/cadastroTema/CadastroTema";
import DeletarPostagem from "./componentes/postagem/deletarPostagem/DeletarPostagem";
import DeletarTema from "./componentes/temas/deletaTema/DeletarTema";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ToastContainer } from "react-toastify/dist/components/ToastContainer";


function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/posts" element={<ListaPostagem />} />
            <Route path="/formularioPostagem" element={<CadastroPost />} />
            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
            <Route path="/formularioTema" element={<CadastroTema />} />
            <Route path="/formularioTema/:id" element={<CadastroTema />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
