import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        justifyContent: "center",
        position: "relative",
        gap: 4,
    },
    image: {
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: 0,
        bottom: 0,
        width: "75%",
        borderRadius: 20,
    },
    noPoster: {
        position: "absolute",
        height: 370,
        zIndex: 1,
        top: 0,
        left: 0,
        bottom: 0,
        width: "75%",
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
        fontSize: 20,
    }
})

export default styles;