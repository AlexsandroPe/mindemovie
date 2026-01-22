import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        position: "relative",
        gap: 8,
    },
    image: {
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: 0,
        bottom: 0,
        width: "70%",
        height: 380,
        borderRadius: 20,
    },
    noPoster: {
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: 0,
        bottom: 0,
        width: "70%",
        height: 380,
        borderRadius: 20,
    },
    title: {
        fontSize: 26,
        paddingVertical: 8,
        fontWeight: "bold",
        color: "#f3f3f3",
        textAlign: "center",
        backgroundColor: "#010101cd",
        paddingHorizontal: 18,
        borderRadius: 20
    },

    info: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
        width: "100%",
        justifyContent: "flex-end"
    },
    infoLabel: {
        color: "#b2b2b2",
        fontSize: 14,
    },

    infoBox: {
        alignItems: "left",
        paddingRight: 14,
        width: 96,
        
    }
})

export default styles;