// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Checks whether the native module is present, to allow a user friendly message, for example when running the app using the Make It Native app, which does not have the library.
 * @returns {Promise.<boolean>}
 */
export async function IsNativeFileSystemAvailable() {
    // BEGIN USER CODE
    return !!require("react-native").NativeModules.RNFSManager;
    // END USER CODE
}
