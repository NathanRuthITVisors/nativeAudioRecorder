import { createElement } from "react";
const React = { createElement };


import { Placeholder } from "mendix/Placeholder";
import { asPluginWidgets, t } from "mendix/native";

import * as styles from "C:/Users/NathanRuth/Documents/Dev/nativeAudioRecorder-js/tests/testProject/theme/styles.js";

const { $Placeholder } = asPluginWidgets({ Placeholder });

export const mainContent = (placeholder$Main) => [
    <$Placeholder key="l1.Atlas_UI_Resources.NativePhone_TopBarOnly.Main"
        $widgetId="l1.Atlas_UI_Resources.NativePhone_TopBarOnly.Main"
        content={placeholder$Main()} />
];

export const sidebar = (placeholder$Main) => [];

