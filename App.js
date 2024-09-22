import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import TextInputComponent from "./components/TextInput";
import TextItemComponent from "./components/TextItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userText, setUserText] = useState([]);

  function startAddTextHandler() {
    setModalIsVisible(true);
  }

  function cancelAddTextHandler() {
    setModalIsVisible(false);
  }

  function addTextHandler(enteredUserText) {
    setUserText((currentText) => [
      ...currentText,
      { text: enteredUserText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  }

  function deleteTextHandler(id) {
    setUserText((currentText) => {
      return currentText.filter((text) => text.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add your text"
          color="#36454F"
          onPress={startAddTextHandler}
        />
        <TextInputComponent
          visible={modalIsVisible}
          onAddText={addTextHandler}
          onCancel={cancelAddTextHandler}
        />
        <View style={styles.textsContainer}>
          <FlatList
            data={userText}
            renderItem={(itemData) => {
              return (
                <TextItemComponent
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteTextHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 24,
  },
  textsContainer: {
    flex: 5,
    marginTop: 20,
  },
});
