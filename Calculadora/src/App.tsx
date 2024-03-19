import { Component, ReactNode } from 'react'
import { SafeAreaView, View } from 'react-native'
import Button from './components/Button/Button'
import styles from './styles'
import Display from './components/Display/Display'

type myState ={
  displayValue:string,
  current:number,
  previous:number,
  result:number,
  operation:string,
  isNewNumber:boolean

}

export default class App extends Component<any,myState>{

  state ={
    displayValue:'0',
    current:0,
    previous:0,
    operation:'',
    result:0,
    isNewNumber:true
  }

  clearMemory = () =>{
    this.setState({displayValue:'0',current:0,previous:0,operation:'',isNewNumber:true,result:0})
  }

  addDigit = (n:string) =>{

    const displayValue = this.state.displayValue
    const isNewNumber = this.state.isNewNumber

    if(n + displayValue === '00'){
      return
    }

    if(isNewNumber){
      this.setState({displayValue:n,isNewNumber:false,current:Number(n)})
      return
    }

    if(displayValue.includes('.') && n==='.'){
      return
    }

    this.setState({displayValue:`${displayValue}${n}`,current:Number(`${displayValue}${n}`)})

  }

  operation = (operation:string)=>{

    const current = this.state.current
    const result = this.state.result
    const oldOperation = this.state.operation

    this.setState({operation})

    if(result === 0){
      this.setState({isNewNumber:true,result:current,current:0})
      return
    }

    if(current === 0){
      return
    }

    const finalResult = eval(`${result} ${oldOperation} ${current}`)

    this.setState({displayValue:String(finalResult),result:finalResult,current:0,isNewNumber:true,previous:current})

  }

  result = () =>{

    const current = this.state.current
    const result = this.state.result
    const operation = this.state.operation
    const previous = this.state.previous

    if(result === 0){
      return
    }

    if(current === 0){

      const finalResult = eval(`${result} ${operation} ${previous}`)

      this.setState({displayValue:String(finalResult),result:finalResult,current:0,isNewNumber:true})

      return

    }

    const finalResult = eval(`${result} ${operation} ${current}`)

    this.setState({displayValue:String(finalResult),result:finalResult,current:0,isNewNumber:true,previous:current})

  }

  render(): ReactNode {
    return(
      <SafeAreaView style={styles.container}>
        <Display value={this.state.displayValue}/>
        <View style={styles.buttons}>
          <Button label='AC' type='triple' onClick={this.clearMemory}/>
          <Button label='/' type='operation' onClick={()=>this.operation('/')}/>
          <Button label='7' type='' onClick={()=> this.addDigit('7')} />
          <Button label='8' type='' onClick={()=> this.addDigit('8')}/>
          <Button label='9' type='' onClick={()=> this.addDigit('9')}/>
          <Button label='*' type='operation' onClick={()=>this.operation('*')}/>
          <Button label='4' type='' onClick={()=> this.addDigit('4')}/>
          <Button label='5' type='' onClick={()=> this.addDigit('5')}/>
          <Button label='6' type='' onClick={()=> this.addDigit('6')}/>
          <Button label='-' type='operation' onClick={()=>this.operation('-')}/>
          <Button label='1' type='' onClick={()=> this.addDigit('1')}/>
          <Button label='2' type='' onClick={()=> this.addDigit('2')}/>
          <Button label='3' type='' onClick={()=> this.addDigit('3')}/>
          <Button label='+' type='operation' onClick={()=>this.operation('+')}/>
          <Button label='0' type='double' onClick={()=> this.addDigit('0')}/>
          <Button label='.' type='' onClick={()=> this.addDigit('.')}/>
          <Button label='=' type='operation' onClick={this.result}/>
        </View>
      </SafeAreaView>
    )
  }
}
