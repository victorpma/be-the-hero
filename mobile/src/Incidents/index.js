import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import logoImg from '../assets/logo.png';

import styles from './styles';

function Incidents() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de
                    <Text style={styles.headerTextBold}> 0 casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-Vindo</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>

            <FlatList
                data={[1, 2, 3]}
                style={styles.incidentsList}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>Caso</Text>
                        <Text style={styles.incidentValue}>Cadelinhas atropelada</Text>

                        <Text style={styles.incidentProperty}>ONG</Text>
                        <Text style={styles.incidentValue}>AVOSOS</Text>

                        <Text style={styles.incidentProperty}>Valor</Text>
                        <Text style={styles.incidentValue}>R$ 120,00 reais</Text>

                        <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetail}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather style={styles.detailsButtonIcon} name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

export default Incidents;