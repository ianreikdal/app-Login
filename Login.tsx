import React, { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity
} from "react-native";

type LoginProps = {
    irParaCadastro: () => void;
};

function Login({ irParaCadastro }: LoginProps) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    const entrar = () => {
        console.log('Tentando login com:', { email, senha });
        Alert.alert('Login', 'Botão entrar clicado com sucesso!');
        setMensagem(`Bem-vindo(a)! login tentando com o email: ${email}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Coritiba FC</Text>
            <Text style={styles.subtitulo}>Acesse sua conta</Text>

            <View style={styles.card}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#666"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#666"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.botaoPrincipal} onPress={entrar}>
                    <Text style={styles.textoBotao}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoSecundario} onPress={irParaCadastro}>
                    <Text style={styles.textoBotaoSecundario}>Ir para Cadastro</Text>
                </TouchableOpacity>
            </View>

            {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: '#0B6623',
        justifyContent: 'center',
        padding: 24,
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    subtitulo: {
        fontSize: 16,
        color: '#CFFFE2',
        textAlign: 'center',
        marginBottom: 24,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
    },
    input: {
        backgroundColor: '#F3F4F6',
        borderRadius: 10,
        padding: 14,
        marginBottom: 12,
    },
    botaoPrincipal: {
        backgroundColor: '#1FA34A',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 8,
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    botaoSecundario: {
        marginTop: 12,
        alignItems: 'center',
    },
    textoBotaoSecundario: {
        color: '#0B6623',
        fontWeight: 'bold',
    },
    mensagem: {
        marginTop: 20,
        textAlign: 'center',
        color: '#A7F3D0',
        fontWeight: 'bold',
    },
});

export default Login;