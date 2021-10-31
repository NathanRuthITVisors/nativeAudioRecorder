import { Appearance } from "react-native";

export const darkMode = Appearance.getColorScheme() === "dark";

//Big buttons styling
export const defaultBadgeStyle = {
    container: {
        //flexDirection: "row",
        //borderRadius: 80,
        //overflow: "hidden",
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
        //padding: 8,
        backgroundColor: "#ffffff"
    }
};

//Save/delete buttons styling

const footerButton = {
    padding: 10,
    alignSelf: "stretch",
    alignItems: "center"
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
    footerButtonSave: {
        ...footerButton,
        borderRadius: 5,
        backgroundColor: "#2196F3"
    },
    footerButtonSaveDisabled: {
        ...footerButton,
        borderRadius: 5,
        backgroundColor: "lightgray"
    },
    footerButtonDelete: {
        ...footerButton,
        backgroundColor: "transparent"
    },
    footerButtonTextSave: {
        color: "white"
    },
    footerButtonTextDelete: {
        color: "red"
    },
    footerButtonTextDeleteDisabled: {
        color: darkMode ? "lightgrey" : "darkgrey"
    },
    bigButtons: {
        alignItems: "center",
        flexDirection: "row"
    },
    label: {
        color: darkMode ? "#FFFFFF" : "#000000"
    }
};
