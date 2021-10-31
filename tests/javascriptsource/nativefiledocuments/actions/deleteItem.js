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
import { Platform } from "react-native";

// END EXTRA CODE

/**
 * Unlinks (deletes) the item at filepath. If the item does not exist, an error will be thrown. Because unlink may be confusing for many Mendix developers and just 'delete' may be reserved it is called deleteItem.
 *
 * Also recursively deletes directories (works like Linux rm -rf).
 * @param {string} filepath - The path to the file or directory.
 * @param {"NativeFileDocuments.PathType.FullPath"|"NativeFileDocuments.PathType.DocumentsDirectory"} pathType
 * @param {boolean} writeToLog
 * @returns {Promise.<boolean>}
 */
export async function deleteItem(filepath, pathType, writeToLog) {
    // BEGIN USER CODE
    return new Promise(function (resolve, reject) {
        if (!filepath) {
            reject("No file path specified");
        }
        if (!pathType) {
            reject("No path type specified");
        }
        if (writeToLog) {
            NativeFileDocumentsUtils.writeToLog({
                actionName: "deleteItem",
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
                actionName: "deleteItem",
                logType: "Info",
                logMessage: "Full path: " + fullPath
            });
        }

        RNFS.unlink(fullPath).then(() => {
            resolve(true);
        });
    });
    // END USER CODE
}
