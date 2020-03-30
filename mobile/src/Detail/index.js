import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../assets/logo.png';

import styles from './styles';

function Detail() {

    const navigation = useNavigation();
    const message = 'Olá AVOSOS, estou entrando em contato, pois gostaria de constribuir para o caso Cadelinha Atropelada, com a quantia de R$150,00 reais.';

    function navigateBack() {
        navigation.goBack();
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=5579991216292&text=${message}`);
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cadelinha Atropelada',
            recipients: ['vpma_amorim@hotmail.com'],
            body: message
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={20} color="#E02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.detailIncident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Caso</Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                <Text style={styles.incidentProperty}>ONG</Text>
                <Text style={styles.incidentValue}>AVOSOS</Text>

                <Text style={styles.incidentProperty}>Descrição</Text>
                <Text style={styles.incidentValue}>A cadelinha foi atropleada no bairro Jabotiana e precisará passar por uma cirúrgia nas patas</Text>

                <Text style={styles.detailIncidentProperty}>Valor</Text>
                <Text style={styles.detailIncidentValue}>R$ 120,00 reais</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription}>Entre em contato</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp} >
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Detail;