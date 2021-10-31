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
 * Converts a date to the number of milliseconds since January 1, 1970. Calls JavaScript getTime()
 *
 * Returns empty if date is empty.
 * @param {Date} dateToConvert
 * @returns {Promise.<string>}
 */
export async function DateTimeToMilliseconds(dateToConvert) {
    // BEGIN USER CODE
    return new Promise(function (resolve, reject) {
        if (typeof dateToConvert !== "undefined" && dateToConvert !== null) {
            resolve("" + dateToConvert.getTime());
        }
        // Returning null does not work, needs to be undefined
        resolve(undefined);
    });
    // END USER CODE
}
