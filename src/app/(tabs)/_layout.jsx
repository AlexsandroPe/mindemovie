import { Tabs } from "expo-router";
import { Home, HomeIcon, FolderMinus } from "lucide-react-native";
import { View, StyleSheet } from "react-native";

export default function TabLayout() {
    return (
        <Tabs initialRouteName="index" screenOptions = {{
            tabBarStyle: {
                position: "absolute",
                bottom: 40,
                width: 262,
                elevation: 0,
                marginHorizontal: 75,
                borderRadius: 60,
                borderWidth: 0,
                backgroundColor: "#000",
                paddingBottom: 0,
                borderTopWidth: 0,
                paddingTop: 0,
            },
            tabBarIconStyle: {
                flex: 1,
            },
            tabBarShowLabel: false
        }}>
            <Tabs.Screen name="index" options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={focused ? styles.iconContainer : null}>
                        <HomeIcon color="#fff" size={30} />
                    </View>
                ),
            }} />

            <Tabs.Screen name="watched" options={{
                headerShown: true,
                headerTransparent: true,
                headerTitleAlign: "center",
                headerTitleStyle: {
                    color: "#fff",
                    fontSize: 32
                },
                headerTitle: "Assistidos",
                
                tabBarIcon: ({ focused }) => (
                    <View style={focused ? styles.iconContainer : null}>
                        <FolderMinus color="#fff" size={30} />
                    </View>
                )
            }} />
        </Tabs>
    )
}


const styles = StyleSheet.create({
    iconContainer: {
        paddingBottom: 10,
        alignItems: "center",
        justifyContent: "flex-end",
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 28,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#FA8226",
        borderBottomWidth: 4,
    }
})