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
 * Calculate distance between two coordinates using the haversine formula.
 * https://en.wikipedia.org/wiki/Haversine_formula
 * 
 * Taken from https://stackoverflow.com/questions/14560999/using-the-haversine-formula-in-javascript (ES6 version)
 * @param {string} lat1
 * @param {string} lng1
 * @param {string} lat2
 * @param {string} lng2
 * @returns {Promise.<Big>}
 */
export async function CalculateDistance(lat1, lng1, lat2, lng2) {
	// BEGIN USER CODE
      const toRadian = angle => (Math.PI / 180) * angle;
      const distance = (a, b) => (Math.PI / 180) * (a - b);
      const RADIUS_OF_EARTH_IN_KM = 6371;

      const dLat = distance(lat2, lat1);
      const dLng = distance(lng2, lng1);

      lat1 = toRadian(lat1);
      lat2 = toRadian(lat2);

      // Haversine Formula
      const a =
        Math.pow(Math.sin(dLat / 2), 2) +
        Math.pow(Math.sin(dLng / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
      const c = 2 * Math.asin(Math.sqrt(a));

      let finalDistance = RADIUS_OF_EARTH_IN_KM * c;

      return new Big(finalDistance);
	// END USER CODE
}
