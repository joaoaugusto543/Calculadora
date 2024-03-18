import { Component, ReactNode } from 'react'
import { SafeAreaView, View } from 'react-native'
import Button from './components/Button/Button'
import styles from './styles'
import Display from './components/Display/Display'

type myState ={
  displayValue:string
}

export default class App extends Component<any,myState>{

  state ={
    displayValue:'0'
  }

  render(): ReactNode {
    return(
      <SafeAreaView style={styles.container}>
        <Display value={this.state.displayValue}/>
        <View style={styles.buttons}>
          <Button label='AC'/>
          <Button label='/'/>
          <Button label='7'/>
          <Button label='8'/>
          <Button label='9'/>
          <Button label='*'/>
          <Button label='4'/>
          <Button label='5'/>
          <Button label='6'/>
          <Button label='-'/>
          <Button label='1'/>
          <Button label='2'/>
          <Button label='3'/>
          <Button label='+'/>
          <Button label='0'/>
          <Button label='.'/>
          <Button label='='/>
        </View>
      </SafeAreaView>
    )
  }
}
