import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { StyleProperty } from "mendix/StyleProperty";

import { Button } from "mendix/Button";
import { View } from "mendix/View";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "C:/Users/NathanRuth/Documents/Dev/nativeAudioRecorder/tests/testProject/deployment/native/layouts/Atlas_UI_Resources.NativePhone_Default.js";

import * as styles from "C:/Users/NathanRuth/Documents/Dev/nativeAudioRecorder/tests/testProject/theme/styles.js";

const { $View, $Button } = asPluginWidgets({ View, Button });

const placeholder$Main = () => [
    <$View key="p0.NativeMobile.Home_Native.layoutGrid1"
        $widgetId="p0.NativeMobile.Home_Native.layoutGrid1"
        style={StyleProperty({
            styles: [ styles.LayoutGrid ]
        })}
        content={[
            <$View key="p0.NativeMobile.Home_Native.layoutGrid1$row0"
                $widgetId="p0.NativeMobile.Home_Native.layoutGrid1$row0"
                style={StyleProperty({
                    styles: [ styles.row ]
                })}
                content={[
                    <$View key="p0.NativeMobile.Home_Native.layoutGrid1$row0$column0"
                        $widgetId="p0.NativeMobile.Home_Native.layoutGrid1$row0$column0"
                        style={StyleProperty({
                            styles: [ styles.col ]
                        })}
                        content={[
                            <$Button key="p0.NativeMobile.Home_Native.actionButton1"
                                $widgetId="p0.NativeMobile.Home_Native.actionButton1"
                                style={StyleProperty({
                                    styles: [ styles.ActionButton ]
                                })}
                                caption={t([
                                    ExpressionProperty({
                                        expression: { "expr": { "type": "literal", "value": "New recording" }, "args": {} }
                                    })
                                ])}
                                icon={undefined}
                                onClick={ActionProperty({
                                    action: { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => require("C:/Users/NathanRuth/Documents/Dev/nativeAudioRecorder/tests/testProject/deployment/native/nanoflows/NativeMobile.ACT_Record_New").ACT_Record_New }, "disabledDuringExecution": true },
                                    abortOnServerValidation: false
                                })} />
                        ]} />
                ]} />
        ]} />
];

export const placeholder$Header = () => null;

export const $$title = t([
    "Home"
] );

export const $$style = [ styles.Layout, styles.Page ];

export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar(placeholder$Main);

