import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


export default class App extends Component {
 constructor(){
    super()
    this.state = {
      resultText: ""
    }
 }
  calcularResultado(){
    const text = this.state.resultText
  } 

  pressionarBotao(text){
    console.log(text)

    if(text == '=') {
      return this.calcularResultado()
    }

    this.setState({
        resultText: this.state.resultText+text
    })
  }
  operar(operacao){
      switch(operacao){
        case 'D':
          const text = this.state.resultText.split('')
          text.pop()
          text.join('')
          this.setState({
            resultText: text.join('')
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
        <TouchableOpacity onPress={() => this.pressionarBotao(nums[i][j])} style={styles.btn}>
          <Text style={styles.btnTexto}>{nums[i][j]}</Text>
        </TouchableOpacity>
      )      
      
    }
    rows.push(<View style={styles.row}>{row}</View>)
  }

    
  let operacoes = ['D','+', '-', '*', '/']
  let ops = []
  for (let i = 0; i < 5; i++){
    ops.push(
      <TouchableOpacity style={styles.btn} onPress={() => this.operar(operacoes[i])}>
        <Text style={styles.textoOp}>{operacoes[i]}</Text>
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
        <Text style={styles.textoCalcular}>144</Text>
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
    color: 'white'
  },

  textoCalcular: {
    fontSize: 18,
    color: 'white'
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
    fontSize: 30
  },

  btnOp:{
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  resultado: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  calcular: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  botoes: {
    flex: 7,
    flexDirection: 'row'
  },

  numeros: {
    flex: 3,
    backgroundColor: 'yellow'
  },

  operacoes: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: "space-around",
    alignItems: 'center'
  }
});
