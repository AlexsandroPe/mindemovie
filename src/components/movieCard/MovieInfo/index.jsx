import { View } from 'react-native';
import { Styles } from './styles';
export function MovieInfo({children}) {
    return (
        <View style={Styles.container}>
            {children}
        </View>
    )
}