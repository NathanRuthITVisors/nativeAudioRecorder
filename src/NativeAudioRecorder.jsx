import React, { Component, createElement } from "react";
import { Platform, Alert, Text, View, Linking, PermissionsAndroid } from 'react-native';

import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

import AudioRecorderPlayer, { AudioEncoderAndroidType, AudioSourceAndroidType, AVEncoderAudioQualityIOSType, AVEncodingOption } from "react-native-audio-recorder-player";
import Button from "react-native-button";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

import { Badge } from "./components/Badge";

import { defaultNativeAudioRecorderStyle } from "./ui/styles";


export class NativeAudioRecorder extends Component {

  styles = mergeNativeStyles(defaultNativeAudioRecorderStyle, this.props.style);

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
      status: 'new',
      isPaused: false
    };
  }

  onStartRecord = async () => {
    console.log('testtesttestttes');
    const hasPermission = await this.checkPermissions();
    console.log(hasPermission);
    if (hasPermission === true) {
      const path = Platform.select({
        ios: 'hello.m4a',
        android: 'sdcard/hello.mp4',
      })
      const audioSet = {
        AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
        AudioSourceAndroid: AudioSourceAndroidType.MIC,
        AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
        AVNumberOfChannelsKeyIOS: 2,
        AVFormatIDKeyIOS: AVEncodingOption.aac
      }
      console.log('why?')
      const uri = await this.audioRecorderPlayer.startRecorder(path, audioSet);
      this.audioRecorderPlayer.addRecordBackListener((e) => {
        this.setState({
          status: 'recording',
          recordSecs: e.current_position,
          recordTime: this.audioRecorderPlayer.mmssss(
            Math.floor(e.current_position),
          )
        })
      })
      console.log(`uri: ${uri}`);
    }
  }


  onStopRecord = async () => {
    const result = await this.audioRecorderPlayer.stopRecorder();
    this.audioRecorderPlayer.removeRecordBackListener();
    this.setState({
      status: 'recorded',
      recordSecs: 0
    });
    console.log(result);
  };

  onStartPlay = async () => {
    console.log('onStartPlay');
    const path = Platform.select({
      ios: 'hello.m4a',
      android: 'sdcard/hello.mp4',
    });
    this.setState({
      isPaused: false
    });
    const msg = await this.audioRecorderPlayer.startPlayer(path);
    this.audioRecorderPlayer.setVolume(1.0);
    this.audioRecorderPlayer.addPlayBackListener((e) => {
      if (e.current_position === e.duration) {
        console.log('finished');
        this.onStopPlay();
      } else {
        this.setState({
          status: 'playing',
          currentPositionSec: e.current_position,
          currentDurationSec: e.duration,
          playTime: this.audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
          duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
        });
      }
    });
  };

  onPausePlay = async () => {
    let paused = this.state.isPaused;

    if (this.state.status === 'playing') {

      //If you press the following buttons real fast: stop > play > pause > play, it will give you a weird error message "player is already running. stop it first".
      //If you stop instead of pause when current position is still 0 this does not happen. 
      if (this.state.currentPositionSec === 0) {
        this.onStopPlay();
      }

      const path = Platform.select({
        ios: 'hello.m4a',
        android: 'sdcard/hello.mp4',
      });

      if (paused) {
        const msg = await this.audioRecorderPlayer.startPlayer(path);
        this.setState({
          isPaused: false
        });
      }
      else {
        await this.audioRecorderPlayer.pausePlayer();
        this.setState({
          isPaused: true
        });
      }
    }
  };

  onStopPlay = async () => {
    console.log('onStopPlay');
    this.audioRecorderPlayer.stopPlayer();
    this.audioRecorderPlayer.removePlayBackListener();
    this.setState({
      status: 'recorded',
      isPaused: false,
      playTime: this.audioRecorderPlayer.mmssss(0)
    });
  };

  onSave = () => {
    this.props.saveToFileDocument.execute();
  }

  onDelete = () => {
    Alert.alert(
      "Delete recording",
      "Are you sure you want to delete the recording?",
      [
        {
          text: "Cancel",
          onPress: () => { }
        },
        {
          text: "OK",
          onPress: () => {
            this.audioRecorderPlayer = null;
            this.setState({
              recordSecs: 0,
              recordTime: '00:00:00',
              currentPositionSec: 0,
              currentDurationSec: 0,
              playTime: '00:00:00',
              duration: '00:00:00',
              status: 'new',
              isPaused: false
            })
          }
        }
      ],
      { cancelable: true }
    );
  }

  checkPermissions = async () => {
    console.log('testtselect');
    return Platform.select({
      android: () => this.checkPermissionsAndroid(),
      ios: () => this.checkPermissionsIos()
    })();
  }

  alertPermissions = () => {
    Alert.alert(
      "Permissions needed",
      "You need to allow permissions in order to continue.",
      [
        {
          text: "Cancel",
          onPress: () => { }
        },
        {
          text: "Open settings",
          onPress: () => {
            //opens app settings
            Linking.openSettings();
          }
        }
      ],
      { cancelable: true }
    );
  }

  checkPermissionsAndroid = async () => {
    console.log('permissions');
    var permissions = [PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE];
    var permissionsToRequest = [];

    var permissionsGranted = true;

    //Check if request is needed
    for (const p in permissions) {
      console.log(p);
      //returns true/false if permission is granted/denied
      const status = await PermissionsAndroid.check(permissions[p]);
      if (!status) {
        console.log(status, permissions[p]);
        permissionsToRequest.push(permissions[p]);
      }
    }

    //Request only the permissions where check returned false
    if (!!permissionsToRequest) {
      //returns object with permissions as key and result as value
      console.log(permissionsToRequest);
      const results = await PermissionsAndroid.requestMultiple(permissionsToRequest);

      for (const permission in results) {
        if (results[permission] === PermissionsAndroid.RESULTS.GRANTED) {
          console.log(permission, 'Permission granted');
        }
        else {
          permissionsGranted = false;
          console.log(permission, 'Permission denied');
          this.alertPermissions();
        }
      }
    }
    return permissionsGranted;
  }

  checkPermissionsIos = async () => {

    const checkResult = await check(PERMISSIONS.IOS.LOCATION_ALWAYS);
    if (checkResult === RESULTS.GRANTED) {
      console.log('The permission is granted');
      return true;
    }
    else if (checkResult === RESULTS.DENIED) {
      const requestResult = await check(PERMISSIONS.IOS.LOCATION_ALWAYS);
      if (requestResult === RESULTS.GRANTED) {
        console.log('The permission is granted');
        return true;
      }
      return false;
    }
    else {
      this.alertPermissions();
      return false;
    }

  }

  renderContent() {

    if (this.state.status === 'new') {
      //show startrecord
      return (
        <>
          <Badge
            style={this.props.style}
            onClick={this.onStartRecord}
            iconName={"fiber-manual-record"}
            iconColor={"#e83a3a"}
          />
          <Text style={this.styles.label}>{this.state.recordTime}</Text>
        </>
      )
    }

    if (this.state.status === 'recording') {
      //show stoprecord
      return (
        <>
          <Badge
            style={this.props.style}
            passedStyle={{ backgroundColor: "#e83a3a" }}
            onClick={this.onStopRecord}
            iconName={"fiber-manual-record"}
            iconColor={"#f2f2f2"}
          />
          <Text style={this.styles.label}>{this.state.recordTime}</Text>
        </>
      )
    }

    if (this.state.status === 'recorded') {
      //show play + disabled stop
      return (
        <>
          <View style={this.styles.bigButtons}>
            <Badge
              style={this.props.style}
              onClick={this.onStartPlay}
              iconName={"play-arrow"}
              iconColor={"#14ba14"}
            />
            <Badge
              style={this.props.style}
              onClick={this.onStopPlay}
              iconName={"stop"}
              disabled={true}
              iconColor={"#000000"}
            />
          </View>
          <Text style={this.styles.label}>{this.state.playTime} / {this.state.recordTime}</Text>
        </>
      )
    }

    if (this.state.status === 'playing') {
      //show pause/play + stop
      return (
        <>
          <View style={this.styles.bigButtons}>
            <Badge
              style={this.props.style}
              onClick={this.onPausePlay}
              iconName={this.state.isPaused ? "play-arrow" : "pause"}
              iconColor={this.state.isPaused ? "#14ba14" : "#000000"}
            />
            <Badge
              style={this.props.style}
              onClick={this.onStopPlay}
              iconName={"stop"}
              disabled={false}
              iconColor={"#000000"}
            />
          </View>
          <Text style={this.styles.label}>{this.state.playTime} / {this.state.recordTime}</Text>
        </>
      )
    }
  }

  render() {

    if (!this.audioRecorderPlayer) {
      this.audioRecorderPlayer = new AudioRecorderPlayer;
    }

    return (
      <>
        <View style={this.styles.container}>
          {this.renderContent()}
        </View>
        <View style={this.styles.footerButtons}>
          <Button
            style={this.styles.footerButton}
            styleDisabled={this.styles.footerButtonDisabled}
            onPress={this.onSave}
            disabled={this.state.status === 'new' || this.state.status === 'recording' || this.props.saveToFileDocument.isExecuting}
          >
            SAVE
          </Button>
          <Button
            style={[this.styles.footerButton, {
              backgroundColor: "#ffffff",
              color: "#e83a3a"
            }]}
            styleDisabled={this.styles.footerButtonDisabled}
            onPress={this.onDelete}
            disabled={this.state.status === 'new' || this.state.status === 'recording' || this.props.saveToFileDocument.isExecuting}
          >
            DELETE
          </Button>
        </View>
      </>
    );
  }
}
