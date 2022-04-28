/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  Button,
  View,
} from 'react-native';
import home1 from '../images/home1.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontWeight: '700',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  text2: {alignItems: 'center'},
  textInput: {
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
});

const HomeScreen = () => {
  const [text, setText] = useState('hi');

  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        defaultValue={text}
        style={styles.textInput}
        onChangeText={newText => setText(newText)}
      />
      <Button
        title={show ? 'Hide' : 'Show'}
        onPress={() => {
          setShow(!show);
        }}
      />
      {show ? <Text style={styles.text}>{text}</Text> : null}
    </View>
  );
};

export default HomeScreen;
