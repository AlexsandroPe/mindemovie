import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function Assistidos() {
    return (
        <SafeAreaView style={{
            flex: 1, 
            backgroundColor: "#1b1a1d",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Text style={{color: "#fff", fontSize: 32}}>Em desenvolvimento</Text>
        </SafeAreaView>
    )
}