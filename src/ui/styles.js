import { NativeModules } from "react-native";

export const darkMode =
    NativeModules && NativeModules.RNDarkMode && NativeModules.RNDarkMode.initialMode
        ? NativeModules.RNDarkMode.initialMode === "dark"
        : false;

export const defaultBadgeStyle = {
    container: {
        flexDirection: "row",
        borderRadius: 80,
        overflow: "hidden",
        //borderColor: "#000000",
        //borderWidth: 3,
        margin: 5,
        shadowColor: darkMode ? "white" : "black",
        shadowOpacity: 0.9,
        elevation: 10
    },
    badge: {
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 80,
        padding: 8,
        backgroundColor: "#ffffff"
    }
};

export const defaultNativeAudioRecorderStyle = {
    container: {
        alignItems: "center",
        flexDirection: "column",
        flex: 1,
        justifyContent: "center"
    },
    footerButtons: {
        padding: 10,
        alignItems: "center",
        marginTop: "auto"
    },
    footerButtonDisabled: {
        backgroundColor: "lightgray",
        color: "grey"
    },
    footerButton: {
        padding: 10,
        backgroundColor: "#2196F3",
        color: "#FFFFFF"
    },
    bigButtons: {
        alignItems: "center",
        flexDirection: "row"
    },
    label: {
        color: darkMode ? "#FFFFFF" : "#000000"
    }
};
