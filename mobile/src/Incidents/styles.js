import { StyleSheet } from 'react-native';
import Contants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Contants.statusBarHeight + 20
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 48,
        marginBottom: 16
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    incidentsList: {
        marginTop: 33
    },

    incident: {
        backgroundColor: '#FFF',
        padding: 25,
        marginBottom: 16,
        borderRadius: 8
    },

    incidentProperty: {
        fontWeight: 'bold',
        color: '#41414d',
        fontSize: 14,
        textTransform: 'uppercase'
    },

    incidentValue: {
        color: '#737380',
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },

    detailsButtonText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#E02041'
    },
});