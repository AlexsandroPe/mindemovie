import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: "100%", 
        flex: 1,
        alignItems: 'center', 
        gap: 8,
        // backgroundColor: "#343434c7"
    },
    image: {
        flex: 1,
        width: "100%", 
        borderRadius: 60
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
    }
})

export default styles;