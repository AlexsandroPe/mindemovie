import { View, FlatList,Text} from "react-native";
import { Image } from "expo-image";
import Styles from './styles.js';

export default function WatchProviders({ providers }) {

    return (
        <View style={providers.length === 0 ? Styles.noProvidersContainer : {paddingVertical: 8}}>
            {
                providers.length === 0
                ? (
                    <Text style={Styles.noProviders}>Nenhuma plataforma de streaming fornece esse filme no Brasil.</Text>
                )
                : (
                    <FlatList 
                        data={providers}
                        renderItem={({item}) => (
                            <View>
                                <Image
                                    source={`https://image.tmdb.org/t/p/original/${item.logo}`}
                                    style={Styles.logoIcon}
                                />
                            </View>
                        )}
                        style={Styles.listContainer}
                        contentContainerStyle={Styles.listContentContainer}
                        horizontal
                        showsHorizontalScrollIndicator = {false}
                        keyExtractor={(item) => item.id}
                    />
                )
            }
        </View>
    )
}