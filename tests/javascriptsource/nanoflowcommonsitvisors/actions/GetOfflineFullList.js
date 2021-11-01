// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE

import { checkDateConstraintsFull } from "../GetOfflineUtils";

// END EXTRA CODE

/**
 * Get offline implementation using JSON strings as parameters. See getOffline at https://apidocs.mendix.com/7/client/mx.data.html for details.
 * 
 * Returns a list of objects, empty if not found.
 * 
 * Use DateTimeToMilliseconds to get the correct value to use for date constraints.
 * @param {string} entityToReturn
 * @param {string} constraintsJson
 * @param {string} filterJson
 * @returns {Promise.<MxObject[]>}
 */
export async function GetOfflineFullList(entityToReturn, constraintsJson, filterJson) {
	// BEGIN USER CODE
	return new Promise(function(resolve, reject) {

		try {
			var constraints,
				filter;

			constraints = JSON.parse(constraintsJson);
			checkDateConstraintsFull(constraints, entityToReturn);

			filter = JSON.parse(filterJson);

			mx.data.getOffline(entityToReturn, constraints, filter,
				function (mxobjs, count) {
					if (count > 0) {
						resolve(mxobjs);
					} else {
						resolve([]);
					}
				},
				function (error) {
					if (error && error.message) {
						reject("GetOfflineFullList failed: " + error.message);
					} else {
						reject("GetOfflineFullList failed to retrieve data.");
					}
				}
			);
		} catch (error) {
			if (error && error.message) {
				reject("GetOfflineFullList failed: " + error.message);
			} else {
				reject("GetOfflineFullList failed.");
			}
		}
	});
	// END USER CODE
}
