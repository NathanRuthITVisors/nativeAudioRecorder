// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";
import TouchID from "react-native-touch-id";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} reason - The reason for requesting authentication. If empty, the system default message is used.
 * @returns {Promise.<boolean>}
 */
export async function BiometricAuthentication(reason) {
    // BEGIN USER CODE
    // Documentation https://github.com/naoufal/react-native-touch-id
    return TouchID.authenticate(reason)
        .then(() => true)
        .catch(() => false);
    // END USER CODE
}
