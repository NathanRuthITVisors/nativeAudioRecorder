import React, { Component, createElement } from "react";

import { Platform, Alert, Linking, Text, View, Button, PermissionsAndroid } from 'react-native';

import { Badge } from "./components/Badge";

import AudioRecorderPlayer, { AudioEncoderAndroidType, AudioSourceAndroidType, AVEncoderAudioQualityIOSType, AVEncodingOption, AudioSet } from "react-native-audio-recorder-player";


export class NativeAudioRecorder extends Component {    

    audioRecorderPlayer = null;

    constructor(props) {
      super(props);
      this.state = {
        recordSecs: 0,
        recordTime: '00:00:00',
        currentPositionSec: 0,
        currentDurationSec: 0,
        playTime: '00:00:00',
        duration: '00:00:00',
      };
    }

    onStartRecord = async () => {
        if (Platform.OS === 'android') {
            try {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                  title: 'Permissions for write access',
                  message: 'Give permission to your storage to write a file',
                  buttonPositive: 'ok',
                },
              );
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the storage');
              } else {
                console.log('permission denied');
                return;
              }
            } catch (err) {
              console.warn(err);
              return;
            }
          }
          if (Platform.OS === 'android') {
            try {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                {
                  title: 'Permissions for recording audio',
                  message: 'Give permission to your microphone to record audio',
                  buttonPositive: 'ok',
                },
              );
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the mic');
              } else {
                console.log('permission denied');
                return;
              }
            } catch (err) {
              console.warn(err);
              return;
            }
          }
          const path = Platform.select({
            ios: 'hello.m4a',
            android: 'sdcard/hello.mp4',
          });
          const audioSet = {
            AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
            AudioSourceAndroid: AudioSourceAndroidType.MIC,
            AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
            AVNumberOfChannelsKeyIOS: 2,
            AVFormatIDKeyIOS: AVEncodingOption.aac,
          };
          console.log('audioSet', audioSet);
          console.log('audiorecorderplaayer', this.audioRecorderPlayer); //returns empty object????
          const uri = await this.audioRecorderPlayer.startRecorder(path, audioSet);
          this.audioRecorderPlayer.addRecordBackListener((e) => {
            this.setState({
              recordSecs: e.current_position,
              recordTime: this.audioRecorderPlayer.mmssss(
                Math.floor(e.current_position),
              ),
            });
          });
          console.log(`uri: ${uri}`);
        };
      

    onStopRecord = async () => {
        const result = await this.audioRecorderPlayer.stopRecorder();
        this.audioRecorderPlayer.removeRecordBackListener();
        this.setState({
          recordSecs: 0,
        });
        console.log(result);
      };
       
    onStartPlay = async () => {
        console.log('onStartPlay');
        const path = Platform.select({
          ios: 'hello.m4a',
          android: 'sdcard/hello.mp4',
        });
        const msg = await this.audioRecorderPlayer.startPlayer(path);
        this.audioRecorderPlayer.setVolume(1.0);
        console.log(msg);
        this.audioRecorderPlayer.addPlayBackListener((e) => {
          if (e.current_position === e.duration) {
            console.log('finished');
            this.audioRecorderPlayer.stopPlayer();
          }
          this.setState({
            currentPositionSec: e.current_position,
            currentDurationSec: e.duration,
            playTime: this.audioRecorderPlayer.mmssss(
              Math.floor(e.current_position),
            ),
            duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
          });
        });
      };
       
    onPausePlay = async () => {
        await this.audioRecorderPlayer.pausePlayer();
    };
       
    onStopPlay = async () => {
        console.log('onStopPlay');
        this.audioRecorderPlayer.stopPlayer();
        this.audioRecorderPlayer.removePlayBackListener();
    };


    render() {

      if (!this.audioRecorderPlayer){
        this.audioRecorderPlayer = new AudioRecorderPlayer;
      }

        return(
            <View>
              <Button
                style={this.props.style}
                onPress={this.onStartRecord}
                title={"onStartRecord"}
              >onStartRecord
              </Button>
                <Badge
                    style={this.props.style}
                    onClick={this.onStopRecord}
                    value={"StopRecord"}
                />
                <Badge
                    style={this.props.style}
                    onClick={this.onStartPlay}
                    value={"StartPlay"}
                />
                <Badge
                    style={this.props.style}
                    onClick={this.onStopPlay}
                    value={"StopPlay"}
                />
                <Text>{this.state.recordSecs}</Text>
                <Text>{this.state.recordTime}</Text>
                <Text>{this.state.currentPositionSec}</Text>
                <Text>{this.state.currentDurationSec}</Text>
                <Text>{this.state.playTime}</Text>
                <Text>{this.state.duration}</Text>
            </View>
        );
    }
}
