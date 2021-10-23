// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";
import { Platform, NativeModules } from "react-native";
import PushNotification from "react-native-push-notification";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {Big} badgeNumber - This field is required. Should be greater than or equal to 0.
 * @returns {Promise.<void>}
 */
export async function SetBadgeNumber(badgeNumber) {
	// BEGIN USER CODE
    // Documentation https://github.com/zo0r/react-native-push-notification
    const isIOS = Platform.OS === "ios";
    if (
        NativeModules &&
        ((isIOS && !NativeModules.RNCPushNotificationIOS) || (!isIOS && !NativeModules.RNPushNotification))
    ) {
        return Promise.reject(new Error("Notifications module is not available in your app"));
    }
    if (!badgeNumber) {
        return Promise.reject(new Error("Input parameter 'Badge number' is required"));
    }
    if (badgeNumber.lt(0)) {
        return Promise.reject(new Error("Input parameter 'Badge number' should be zero or greater"));
    }
    return PushNotification.setApplicationIconBadgeNumber(Number(badgeNumber));
	// END USER CODE
}