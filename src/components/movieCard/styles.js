import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {

    },

    metaDatas: {
        paddingVertical: 5,
        width: 110,
        gap: 20,
    },
    movieMetaDatas: {
        paddingVertical: 7,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    
    image: {
        height: 350,
        width: "60%",
        borderRadius: 16,
    },
    noPoster: {
        width: "60%",
        height: 350,
        borderRadius: 20,
    },
    title: {
        fontSize: 32,
        color: "#fff",
        fontWeight: "700"
    },

    info: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "600",
        width: "100%",
    },
    infoLabel: {
        color: "#b2b2b2",
        fontSize: 14,
    },

    infoBox: {
        flex: 1,
        gap: 6,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default styles;