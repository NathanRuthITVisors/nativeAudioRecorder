import { Component, createElement } from "react";
import { View, Pressable } from "react-native";
import { Icon } from "mendix/components/native/Icon";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

import { defaultBadgeStyle } from "../ui/styles";

export class Badge extends Component {
    styles = mergeNativeStyles(defaultBadgeStyle, this.props.style);

    render() {
        //const Touchable = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

        return (
            <View style={[this.styles.container, this.props.disabled ? { opacity: 0.5 } : null]}>
                <Pressable
                    style={this.styles.badge}
                    onPress={this.props.onClick}
                    useForeground={false}
                    disabled={this.props.disabled}
                >
                    {this.renderContent()}
                </Pressable>
            </View>
        );
    }

    renderContent() {
        const icon = <Icon icon={this.props.icon} size={30} color={this.props.iconColor} />;
        return <View style={[this.styles.badge, this.props.passedStyle]}>{icon}</View>;
    }
}
