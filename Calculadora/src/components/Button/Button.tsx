import { Component, ReactNode } from 'react'
import { TouchableHighlight, Text } from 'react-native'
import styles from './styles'

type Props = {
    label:string
}

export default class Button extends Component<Props>{
    render(): ReactNode {
        return(
            <TouchableHighlight>
                <Text style={styles.button}>{this.props.label}</Text>
            </TouchableHighlight>
        )
    }
}