import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { StyleProperty } from "mendix/StyleProperty";

import { DataView } from "mendix/DataView";
import { itvisors_nativeaudiorecorder_NativeAudioRecorder } from "externalWidgets";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "C:/Users/NathanRuth/Documents/Dev/nativeAudioRecorder/tests/testProject/deployment/native/layouts/Atlas_UI_Resources.NativePhone_Default.js";

import * as styles from "C:/Users/NathanRuth/Documents/Dev/nativeAudioRecorder/tests/testProject/theme/styles.js";

const { $DataView, $itvisors_nativeaudiorecorder_NativeAudioRecorder } = asPluginWidgets({ DataView, itvisors_nativeaudiorecorder_NativeAudioRecorder });

const placeholder$Main = () => [
    <$DataView key="p1.NativeMobile.Record_Native.dataView1"
        $widgetId="p1.NativeMobile.Record_Native.dataView1"
        style={StyleProperty({
            styles: [ styles.DataView ]
        })}
        object={AssociationObjectProperty({
            scope: "$pageParameter"
        })}
        content={[
            <$itvisors_nativeaudiorecorder_NativeAudioRecorder key="p1.NativeMobile.Record_Native.nativeAudioRecorder2"
                $widgetId="p1.NativeMobile.Record_Native.nativeAudioRecorder2"
                saveToFileDocument={ActionProperty({
                    action: { "type": "callNanoflow", "argMap": { "Record": { "widget": "$pageParameter", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/NathanRuth/Documents/Dev/nativeAudioRecorder/tests/testProject/deployment/native/nanoflows/NativeMobile.SaveToMendixFileDocument").SaveToMendixFileDocument }, "disabledDuringExecution": false },
                    abortOnServerValidation: false
                })}
                style={StyleProperty({
                    styles: [ styles.itvisors_nativeaudiorecorder_NativeAudioRecorder ]
                })} />
        ]} />
];

export const placeholder$Header = () => null;

export const $$title = t([
    "Record"
] );

export const $$style = [ styles.Layout, styles.Page ];

export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar(placeholder$Main);

