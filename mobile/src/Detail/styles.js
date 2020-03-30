import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },

    header: {
        marginTop: Constants.statusBarHeight + 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    detailIncident: {
        backgroundColor: '#FFF',
        marginTop: 50,
        padding: 25,
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

    contactBox: {
        backgroundColor: '#FFF',
        marginTop: 50,
        padding: 25,
        borderRadius: 8,
        marginTop: 15
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#41414d'
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 15
    },

    actions: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
});