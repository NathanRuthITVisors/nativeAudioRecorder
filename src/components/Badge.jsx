import { Component, createElement } from "react";
import { Platform, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

import { defaultBadgeStyle } from "../ui/styles";

import Icon from "react-native-vector-icons/MaterialIcons";

export class Badge extends Component {
    styles = mergeNativeStyles(defaultBadgeStyle, this.props.style);


    render() {
        const Touchable = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

        return (
            <View style={[this.styles.container, this.props.disabled ? {opacity: 0.5} : null]}>
                <Touchable style={this.styles.badge} onPress={this.props.onClick} useForeground={false} disabled={this.props.disabled}>
                    {this.renderContent()}
                </Touchable>
            </View>
        );
    }

    renderContent() {
        const icon = <Icon name={this.props.iconName} size={55} color={this.props.iconColor}/>;
        
        return <View style={[this.styles.badge, this.props.passedStyle]}>{icon}</View>;
    }
}
