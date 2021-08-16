import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permisions';
import { BarcodeScanner } from 'expo-barcode-scanner';

export default class TransactionScreen extends React.Component {
  constructor() {
    super();
    this.state={
      hasCameraPerm: null,
      scanStatus: false,
      scanData: '',
      buttonState: 'unclicked',
      scanBookID: '',
      scanSchoolID: '',
    }
  }

  getCameraPermissions = async(Id)=>{
    const {status} = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      hasCameraPerm: status==="granted",
      buttonState: Id,
      scanStatus: false,
    })
  }

  handleBarcodeScan = async({type, data})=>{
    this.setState({
      scanStatus: true,
      scanData: data,
      buttonState: 'unclicked'
    })
  }

    render() {
      const hasCameraPermissions = this.state.hasCameraPerm;
      const scanned = this.state.scanStatus;
      const buttonState = this.state.buttonState;
      if (buttonSate==='clicked' && hasCameraPermissions) {
        return (
          <BarCodeScanner onBarCodeScanned={scanned ? undefined : this.handleBarcodeScan} />
        )
      }
      else if(buttonState==='unclicked'){
        return (
          <View style={styles.container}>
            <View>
              <Image
               source={require("./assets/WRITESTORY.png")} />
               <Text>
                 Book Hub
               </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.textInput} placeHolder= "STORY TITLE" 
              value={this.state.scanBookID}/>
              <TouchableOpacity style={styles.scannerBTN} onPress={this.getCameraPermissions("Title Id")}>
                <Text>
                  Scan
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
              <TextInput style={styles.textInput} placeHolder= "AUTHOR"
              value={this.state.scanSchoolID}/>
              <TouchableOpacity style={styles.scannerBTN} onPress={this.getCameraPermissions("Author Id")}>
                <Text>
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
              <TextInput style={styles.textInput} placeHolder= "STORY...."
              value={this.state.scanSchoolID}/>
              <TouchableOpacity style={styles.scannerBTN} onPress={this.getCameraPermissions("Story Id")}>
                <Text>
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      backgroundColor:"#1f2ae3",
    },
    inputContainer: {
      flexDirection: 'row',
      margin:20
    },
    textInput: {
      width: 200,
      height: 40,
      border: 'groove',
      borderWidth: 10,
      borderColor: 'limegreen'
    },
    scannerBTN: {
      backgroundColor: "#ffffff",
      fontFamily: "Bahnscript",
      fontSize: 15,
    }
  });
  