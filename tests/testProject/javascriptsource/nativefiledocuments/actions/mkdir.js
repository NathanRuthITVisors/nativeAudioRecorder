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
 * Create a directory at dirpath. Automatically creates parents and does not throw if already exists (works like Linux mkdir -p).
 * 
 * For iOS only, the excludeFromBackup property can be set to exclude the directory from all backups of app data. Be aware that allowing backups may violate company policies even if the backup is encrypted. As we download files from the Mendix backend it is usually safe to turn this on.
 * @param {string} dirpath - Path to create
 * @param {"NativeFileDocuments.PathType.FullPath"|"NativeFileDocuments.PathType.DocumentsDirectory"} pathType
 * @param {boolean} excludeFromBackup - Exclude directory from all backups of app data. See JS action docs for more details.
 * @param {boolean} writeToLog
 * @returns {Promise.<boolean>}
 */
export async function mkdir(dirpath, pathType, excludeFromBackup, writeToLog) {
	// BEGIN USER CODE
	return new Promise(function (resolve, reject) {
		if (!dirpath) {
			reject("No file path specified");
		}
		if (!pathType) {
			reject("No path type specified");
		}
		if (writeToLog) {
			NativeFileDocumentsUtils.writeToLog({
				actionName: "mkdir",
				logType: "Parameters",
				logMessage: JSON.stringify({
					dirpath: dirpath,
					pathType: pathType
				})
			});
		}

		const fullPath = NativeFileDocumentsUtils.getFullPath(dirpath, pathType, RNFS, Platform.OS);

		let options = {};
		if (Platform.OS === "ios" && excludeFromBackup) {
			// Only supported on iOS
			options.NSURLIsExcludedFromBackupKey = true;
		}

		if (writeToLog) {
			NativeFileDocumentsUtils.writeToLog({
				actionName: "mkdir",
				logType: "Info",
				logMessage: "mkdir options: " + JSON.stringify({
					fullPath: fullPath,
					options: options
				})
			});
		}

		RNFS.mkdir(fullPath, options).then(() => {
			resolve(true);
		});
	});
	// END USER CODE
}