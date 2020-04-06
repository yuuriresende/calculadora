import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


export default class App extends Component {
 constructor(){
    super()
    this.state = {
      resultText: "",
      textoCalcular: ""
    }
    this.operacoes = ['D','+', '-', '*', '/']

 }
  calcularResultado(){
    const text = this.state.resultText
    console.log(text, eval(text))
    this.setState({
      textoCalcular: eval(text)
    })
  } 

  validar(){
    const text = this.state.resultText
    switch(text.slice(-1)){
      case '+':
      case '-':
      case '*':
      case '/':
        return false
    } 
    return true
  }

  pressionarBotao(text){
    console.log(text)

    if(text == '=') {
      return this.validar() && this.calcularResultado()
    }

    this.setState({
        resultText: this.state.resultText+text
    })
  }
  operar(operacao){
      switch(operacao){
        case 'DEL':
          const text = this.state.resultText.split('')
          text.pop()
          text.join('')
          this.setState({
            resultText: text.join('')
          })
          break
        
        case '+':
        case '-':
        case '/':
        case '*':
          
          const ultimoChar = this.state.resultText.split('').pop()

          if(this.operacoes.indexOf(ultimoChar) > 0) return
        
          if(this.state.text == "") return
          this.setState({
            resultText: this.state.resultText + operacao
          })
          
  
        } 
  }
  render(){
  let nums = [[1,2,3], [4,5,6], [7,8,9], ['.', 0, '=']]
  let rows = []
  
  for(let i = 0; i < 4; i++){
    
    let row = []
    for(let j = 0; j < 3; j++){
      
      row.push(        
        <TouchableOpacity key={nums[i][j]} onPress={() => this.pressionarBotao(nums[i][j])} style={styles.btn}>
          <Text style={styles.btnTexto}>{nums[i][j]}</Text>
        </TouchableOpacity>
      )      
      
    }
    rows.push(<View key={i} style={styles.row}>{row}</View>)
  }

    
  this.operacoes = ['DEL','+', '-', '*', '/']
  let ops = []
  for (let i = 0; i < 5; i++){
    ops.push(
      <TouchableOpacity key={this.operacoes[i]} style={styles.btn} onPress={() => this.operar(this.operacoes[i])}>
        <Text style={styles.textoOp}>{this.operacoes[i]}</Text>
      </TouchableOpacity>
    )
  }
  return (
    
    <View style={styles.container}>
      <View style={styles.resultado}>
        <Text style={styles.textoResultado}>
          {this.state.resultText}
        </Text>
      </View>
      <View style={styles.calcular}>
        <Text style={styles.textoCalcular}>{this.state.textoCalcular}</Text>
      </View>
      <View style={styles.botoes}>
        <View style={styles.numeros}>
          {rows}
        </View>
      
        <View style={styles.operacoes}>
          {ops}
        </View>      
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  
  textoResultado: {
    fontSize: 28,
    color: 'black'
  },

  textoCalcular: {
    fontSize: 18,
    color: 'black'
  },

  textoOp:{
    color: 'white'
  },

  row:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: "space-around",
    alignItems: 'center'
  },

  btn:{
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  btnTexto:{
    fontSize: 30,
    color: 'white'
  },

  btnOp:{
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  resultado: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  calcular: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  botoes: {
    flex: 7,
    flexDirection: 'row'
  },

  numeros: {
    flex: 3,
    backgroundColor: '#434343',
    color: 'white'
  },

  operacoes: {
    flex: 1,
    backgroundColor: '#636363',
    flexDirection: 'column',
    justifyContent: "space-around",
    alignItems: 'center'
    
  }
});
