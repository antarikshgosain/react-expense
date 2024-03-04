import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'

function IconButton({icon, size, color, onPress}) {



    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <Ionicons name={icon} size={size} color={color} onPress={onPress}></Ionicons>
            </View>
        </Pressable>
    );
    

}

export default IconButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 8,
        marginVertical: 2,
        marginHorizontal: 8,
    },
    pressed: {
        opacity: 0.75,
    },
});