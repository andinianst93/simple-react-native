import { StyleSheet, View, Text, Pressable } from "react-native";

export default function TextItemComponent(props) {
  return (
    <View style={styles.textItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.theText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: "#191919",
    marginVertical: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  theText: {
    fontSize: 14,
    padding: 8,
    color: "#f2f2f2",
  },
});
