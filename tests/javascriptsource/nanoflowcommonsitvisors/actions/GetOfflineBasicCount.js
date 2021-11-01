// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE

import { addConstraint, addSort, checkDateConstraintsBasic } from "../GetOfflineUtils";

// END EXTRA CODE

/**
 * Basic implementation for getting data offline. All constraints must match. 
 * 
 * The object count is returned, zero if not found.
 * 
 * @param {string} entityToReturn
 * @param {string} attribute1 - The attribute (or reference) to constrain on
 * @param {"NanoflowCommonsITvisors.GetOfflineOperator.equals"|"NanoflowCommonsITvisors.GetOfflineOperator.lessThan"|"NanoflowCommonsITvisors.GetOfflineOperator.lessThanOrEquals"|"NanoflowCommonsITvisors.GetOfflineOperator.greaterThan"|"NanoflowCommonsITvisors.GetOfflineOperator.greaterThanOrEquals"|"NanoflowCommonsITvisors.GetOfflineOperator.contains"} operator1 - One of equals (default), lessThan, lessThanOrEquals, greatherThan, greaterThanOrEquals, contains
 * @param {string} value1 - The value to constrain on, for associations this is the GUID. Use DateTimeToMilliseconds to get the correct value to use for date constraints.
 * @param {boolean} negate1 - If true, return the objects not matching the constraint.
 * @param {string} attribute2
 * @param {"NanoflowCommonsITvisors.GetOfflineOperator.equals"|"NanoflowCommonsITvisors.GetOfflineOperator.lessThan"|"NanoflowCommonsITvisors.GetOfflineOperator.lessThanOrEquals"|"NanoflowCommonsITvisors.GetOfflineOperator.greaterThan"|"NanoflowCommonsITvisors.GetOfflineOperator.greaterThanOrEquals"|"NanoflowCommonsITvisors.GetOfflineOperator.contains"} operator2
 * @param {string} value2
 * @param {boolean} negate2
 * @param {string} attribute3
 * @param {"NanoflowCommonsITvisors.GetOfflineOperator.equals"|"NanoflowCommonsITvisors.GetOfflineOperator.lessThan"|"NanoflowCommonsITvisors.GetOfflineOperator.lessThanOrEquals"|"NanoflowCommonsITvisors.GetOfflineOperator.greaterThan"|"NanoflowCommonsITvisors.GetOfflineOperator.greaterThanOrEquals"|"NanoflowCommonsITvisors.GetOfflineOperator.contains"} operator3
 * @param {string} value3
 * @param {boolean} negate3
 * @param {string} sort1
 * @param {boolean} asc1
 * @param {string} sort2
 * @param {boolean} asc2
 * @param {string} sort3
 * @param {boolean} asc3
 * @returns {Promise.<Big>}
 */
export async function GetOfflineBasicCount(entityToReturn, attribute1, operator1, value1, negate1, attribute2, operator2, value2, negate2, attribute3, operator3, value3, negate3, sort1, asc1, sort2, asc2, sort3, asc3) {
	// BEGIN USER CODE
	return new Promise(function(resolve, reject) {

		try {
			var constraints = [],
				filter = {limit : 1, offset : 0},
				sortArray = [];

			addConstraint(attribute1, operator1, value1, negate1, constraints);
			addConstraint(attribute2, operator2, value2, negate2, constraints);
			addConstraint(attribute3, operator3, value3, negate3, constraints);

			checkDateConstraintsBasic(constraints, entityToReturn);

			addSort(sort1, asc1, sortArray);
			addSort(sort2, asc2, sortArray);
			addSort(sort3, asc3, sortArray);
			filter.sort = sortArray;

			mx.data.getOffline(entityToReturn, constraints, filter,
				function (mxobjs, count) {
					resolve(count);
				},
				function (error) {
					if (error && error.message) {
						reject("GetOfflineBasicCount failed: " + error.message);
					} else {
						reject("GetOfflineBasicCount failed to retrieve data.");
					}
				}
			);
		} catch (error) {
			if (error && error.message) {
				reject("GetOfflineBasicCount failed: " + error.message);
			} else {
				reject("GetOfflineBasicCount failed.");
			}
		}
	});
	// END USER CODE
}
