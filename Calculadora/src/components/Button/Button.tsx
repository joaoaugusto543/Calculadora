import { Component, ReactNode } from 'react'
import { TouchableHighlight, Text, GestureResponderEvent } from 'react-native'
import styles from './styles'

type Props = {
    label:string,
    type:string,
    onClick:(event: GestureResponderEvent) => void;
}

export default class Button extends Component<Props>{

    render(): ReactNode {

        const stylesButton: any = [styles.button]

        if(this.props.type === 'double'){
            stylesButton.push(styles.buttonDouble)
        }

        if(this.props.type === 'triple'){
            stylesButton.push(styles.buttonTriple)
        }

        if(this.props.type === 'operation'){
            stylesButton.push(styles.operationButtton)
        }

        return(
            <TouchableHighlight onPress={this.props.onClick}>
                <Text style={stylesButton}>{this.props.label}</Text>
            </TouchableHighlight>
        )
    }
}

