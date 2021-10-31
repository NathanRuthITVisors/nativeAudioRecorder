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
 * Updates an entity object without needing to refresh the whole page via passing an entity object.
 * @param {MxObject} objectToRefresh - Object which will be refreshed.
 * @returns {Promise.<void>}
 */
export async function RefreshObject(objectToRefresh) {
    // BEGIN USER CODE
    if (!objectToRefresh) {
        return Promise.reject(new Error("ObjectToRefresh parameter is required"));
    }
    return new Promise(resolve => {
        mx.data.update({
            guid: objectToRefresh.getGuid(),
            callback: () => resolve(true)
        });
    });
    // END USER CODE
}
