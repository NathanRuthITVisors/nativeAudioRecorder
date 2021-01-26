import { createElement } from "react";
const React = { createElement };

import { StyleProperty } from "mendix/StyleProperty";

import { itvisors_nativeaudiorecorder_NativeAudioRecorder } from "externalWidgets";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "C:/Users/NathanRuth/Documents/Dev/nativeAudioRecorder-js/tests/testProject/deployment/native/layouts/Atlas_UI_Resources.NativePhone_Default.js";

import * as styles from "C:/Users/NathanRuth/Documents/Dev/nativeAudioRecorder-js/tests/testProject/theme/styles.js";

const { $itvisors_nativeaudiorecorder_NativeAudioRecorder } = asPluginWidgets({ itvisors_nativeaudiorecorder_NativeAudioRecorder });

const placeholder$Main = () => [
    <$itvisors_nativeaudiorecorder_NativeAudioRecorder key="p0.NativeMobile.Home_Native.nativeAudioRecorder1"
        $widgetId="p0.NativeMobile.Home_Native.nativeAudioRecorder1"
        onClick={undefined}
        style={StyleProperty({
            styles: [ styles.itvisors_nativeaudiorecorder_NativeAudioRecorder ]
        })} />
];

export const placeholder$Header = () => null;

export const $$title = t([
    "Home"
] );

export const $$style = [ styles.Layout, styles.Page ];

export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar(placeholder$Main);

