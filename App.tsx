import React from "react"; //Importar para criar componentes
import { useState } from "react"; // Importar para guardar e atualizar estados
import { SafeAreaView, StyleSheet } from "react-native"; // Importar componentes visuais
import Login from "./Login"; // Importar o componente Login
import Cadastro from "./cadastro"; // Importar o componente Cadastro

function App() {
  // useState cria uma variável de estafo chamada telaAtual
  // Ela começa um valor "login"
  // setTelaAtual é usado para trocar o valor
  const [telaAtual, setTelaAtual] = useState <'login' | 'cadastro'>('login');

  // Esta função muda a tela atual para "cadastro"
  const irParaCadastro = () => {
    setTelaAtual('cadastro');
  };
  //Esta função muda a tela atual para "login"
  const voltarParaLogin = () => {
    setTelaAtual('login')
  };

  return (
    <SafeAreaView>
      {
        /* {Navegação manuel:
        Se a telaAtual for "login", mostra a tela login.
        Se não for, mostra a tela cadastro.
        isso substitui o uso de bibliotecas de navegação neste exemplo.
        } */}
        {telaAtual === 'login' ? (
          // Passa a função irParaCadastro como prop para o componente login
          <Login irParaCadastro={irParaCadastro}  />
        ) : (
          // Passa a função VoltarParaLogin como prop para o componente cadastro
          <Cadastro voltarParaLogin={voltarParaLogin}/>
        )}
    </SafeAreaView>
  );
}

//Criar os estilos do componente 
const styles = StyleSheet.create({
  container: {
    //Faz a tela ocupar todo o espaço disponível
    flex: 1,
    //Fundo branco
    backgroundColor: '#fff',
  }
});
// Exporta o componente para ser usado como entrada do projeto
export default App;