import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TextInput, 
  TouchableOpacity, 
  TouchableWithoutFeedback,
  Alert,
  Keyboard
} from 'react-native';

const currencyPerDollar = {
  DOLLAR: 1,
  EURO: 0.86,
  YEN: 105.63,
  POUND: 1.27,
  CANDOLLAR: 1.34,
  AUSDOLLAR: 1.43,
  YUAN: 6.82,
  FRANC: 0.93,
  RUBLE: 78.44,
  RAND: 17.12,
  RUPEE: 73.71,
  BITCOIN: 0.0001
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: "",
      resetValue: "0.0"
    }
  }

  buttonPressed = (currency) => {
    if (this.state.inputValue === '') {
      Alert.alert('Enter some value ')
    }
    let result = parseFloat(this.state.inputValue) * currencyPerDollar[currency]

    this.setState({ resetValue: result.toFixed(2)})
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.screenview}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>
              {this.state.resetValue}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              selectionColor='#fff'
              keyboardType='numeric'
              placeholder='Enter Value'
              value={this.state.inputValue}
              onChangeText={ inputValue => this.setState({
                inputValue
              })}
            />
          </View>
          <View style={styles.converterButtonContainer}>
            <TouchableOpacity 
            onPress={ () => this.buttonPressed('EURO') }
            style={styles.converterButton}>
              <Text style={styles.converterButtonText}>
                &euro;-Euro
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => this.buttonPressed('YEN') }
            style={styles.converterButton}>
              <Text style={styles.converterButtonText}>
                &#165;-Yen
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => this.buttonPressed('POUND') }
            style={styles.converterButton}>
              <Text style={styles.converterButtonText}>
                &pound;-Pound
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => this.buttonPressed('CANDOLLAR') }
            style={styles.converterButton}>
              <Text style={styles.converterButtonText}>
                $-Canadian
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => this.buttonPressed('AUSDOLLAR') }
            style={styles.converterButton}>
              <Text style={styles.converterButtonText}>
                $-Australian
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => this.buttonPressed('YUAN') }
            style={styles.converterButton}>
              <Text style={styles.converterButtonText}>
                &#20803;-Yuan
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => this.buttonPressed('FRANC') }
            style={styles.converterButton}>
              <Text style={styles.converterButtonText}>
                &#8355;-Franc
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => this.buttonPressed('RUBLE') }
            style={styles.converterButton}>
              <Text style={styles.converterButtonText}>
                &#8381;-Ruble
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => this.buttonPressed('RAND') }
            style={styles.converterButton}>
              <Text style={styles.converterButtonText}>
                &#82;-Rand
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => this.buttonPressed('RUPEE') }
            style={styles.converterButton}>
              <Text style={styles.converterButtonText}>
                &#8377;-Rupee
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => this.buttonPressed('BITCOIN') }
            style={styles.converterButton}>
              <Text style={styles.converterButtonText}>
                &#x20BF;-Bitcoin
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#535c68',
    marginTop: 20,
  },
  screenview: {
    flex: 1,
  },
  resultContainer: {
    height: 70,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c1c1c1',
    backgroundColor: '#0a79de',
    borderWidth: 2
  },
  resultValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c1c1c1',
    borderWidth: 2,
    backgroundColor: '#0a79de',
  },
  input: {
    fontSize: 30,
    color: "#FFF",
  },
  converterButtonContainer: {
    flexDirection: "row",
    flexWrap: 'wrap',
    marginTop: 20,
    borderColor: '#c1c1c1',
    borderWidth: 2
  },
  converterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A79DF',
    height: 100,
    borderColor: '#c1c1c1',
    borderWidth: 2,
    width: '33.3%'
  },
  converterButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
