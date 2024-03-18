import { Component, ReactNode } from 'react'
import { SafeAreaView, Text } from 'react-native'
import styles from './styles'

type Props={
    value:string
}

export default class Display extends Component<Props>{

    render(): ReactNode {
        return(
            <SafeAreaView style={styles.display}>
                <Text style={styles.displayValue} numberOfLines={1}>
                    {this.props.value}
                </Text>
            </SafeAreaView>
        )
    }

}