import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";

export default function TextInputComponent(props) {
  const [enteredUserText, setEnteredUserText] = useState("");

  function textInputHandler(enteredText) {
    setEnteredUserText(enteredText);
  }

  function addTextHandler() {
    props.onAddText(enteredUserText);
    setEnteredUserText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/strategy.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter you text..."
          placeholderTextColor="#555555"
          onChangeText={textInputHandler}
          value={enteredUserText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Text" onPress={addTextHandler} color="#36454F" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
    backgroundColor: "#111111",
  },
  image: {
    width: 100,
    height: 100,
    margin: 16,
    alignSelf: "center",
  },
  textInput: {
    borderColor: "#222222",
    borderWidth: 1,
    padding: 16,
    width: "100%",
    color: "#ffffff",
    borderRadius: 6,
    backgroundColor: "#222222",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 4,
  },
});
