import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';

type CadastroProps = {
    voltarParaLogin: () => void;
};

function Cadastro({ voltarParaLogin }: CadastroProps) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagemSucesso, setMensagemSucesso] = useState('');

    const cadastrar = () => {
        console.log('Dados cadastrados:', { nome, email, senha });
        setMensagemSucesso('Cadastro realizado com sucesso!');
        setNome('');
        setEmail('');
        setSenha('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Criar Conta</Text>

            <View style={styles.card}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#666"
                    value={nome}
                    onChangeText={setNome}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#676767"
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

                <TouchableOpacity style={styles.botaoPrincipal} onPress={cadastrar}>
                    <Text style={styles.textoBotao}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoSecundario} onPress={voltarParaLogin}>
                    <Text style={styles.textoBotaoSecundario}>Voltar para Login</Text>
                </TouchableOpacity>
            </View>

            {mensagemSucesso ? (
                <Text style={styles.mensagem}>{mensagemSucesso}</Text>
            ) : null}
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
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
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

export default Cadastro;