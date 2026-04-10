import React from "react";
 
import { useState } from "react";
 
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
 
type LoginProps = {
  irParaCadastro: () => void;
};
 
function Login({ irParaCadastro }: LoginProps) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
 
  const entrar = () => {
    console.log("Tentando login com:", { email, senha });
    Alert.alert("Login", "Botão entrar clicado com sucesso!");
    setMensagem(`Bem-vindo(a)! login tentando com o email: ${email}`);
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={entrar} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cadastrar" onPress={irParaCadastro} />
      </View>
      {mensagem ? <Text style={styles.message}>{mensagem}</Text> : null}
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  buttonContainer: {
    marginTop: 8,
  },
  message: {
    marginTop: 20,
    textAlign: "center",
    color: "#333333",
  },
});
 
export default Login;