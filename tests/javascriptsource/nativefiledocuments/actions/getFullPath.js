// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE

import NativeFileDocumentsUtils from "../nativefiledocumentsutils";
import RNFS from "react-native-fs";
import { Platform } from 'react-native';

// END EXTRA CODE

/**
 * Gets the full path for the given parameters. Can be passed to other libraries.
 * 
 * Do not store full paths in the database!
 * @param {string} filepath - The path to the file or directory.
 * @param {"NativeFileDocuments.PathType.FullPath"|"NativeFileDocuments.PathType.DocumentsDirectory"} pathType
 * @param {boolean} writeToLog
 * @returns {Promise.<string>}
 */
export async function getFullPath(filepath, pathType, writeToLog) {
	// BEGIN USER CODE

	if (!filepath) {
		Promise.reject("No file path specified");
	}
	if (!pathType) {
		Promise.reject("No path type specified");
	}
	if (writeToLog) {
		NativeFileDocumentsUtils.writeToLog({
			actionName: "getFullPath",
			logType: "Parameters",
			logMessage: JSON.stringify({
				filepath: filepath,
				pathType: pathType
			})
		});
	}

	const fullPath = NativeFileDocumentsUtils.getFullPath(filepath, pathType, RNFS, Platform.OS);

	if (writeToLog) {
		NativeFileDocumentsUtils.writeToLog({
			actionName: "getFullPath",
			logType: "Info",
			logMessage: "Full path: " + fullPath
		});
	}

	return fullPath;

	// END USER CODE
}
