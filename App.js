import React, { Component } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: [],
      textData: [],
    };
  }

  addTextInput = (index) => {
    console.log("in addtextinput index", index);
    let textInput = this.state.textInput;
    textInput.push(
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => this.onChangeText(text, index)}
      />
    );
    this.setState({ textInput });
  };

  removeTextInput = () => {
    console.log('on remoce click')
    let textInput = this.state.textInput;
    let textData = this.state.textData;
    textInput.pop();
    textData.pop();
    this.setState({ textInput, textData });
  };

  onChangeText = (text, index) => {
    let data = this.state.textData;
    let flag = false;
    if (data.length !== 0) {
      data.forEach((element) => {
        if (element.index === index) {
          element.text = text;
          flag = true;
        }
      });
    }
    if (flag) {
      this.setState({
        textData: data,
      });
    } else {
      data.push({ text: text, index: index });
      this.setState({
        textData: data,
      });
    }
  };

  onSubmit = () => {
    console.log("Data", this.state.textData);
  };
  render() {
    return (
      <View>
        <View style={styles.rowView}>
          <View style={styles.margin}>
            <Button
              title='ADD'
              onPress={() => this.addTextInput(this.state.textInput.length)}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Button title='Remove' onPress={() => this.removeTextInput()} />
          </View>
        </View>
        {this.state.textInput.map((value, i) => {
          return value;
        })}
        <Button title='Submit' onPress={() => this.onSubmit()} />
      </View>
    );
  }
}
export default Profile;

const styles = StyleSheet.create({
  margin:{ margin: 10 },
  textInput: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    margin: 20,
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
