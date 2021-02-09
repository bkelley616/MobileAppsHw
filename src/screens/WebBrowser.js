import React from 'react';
import {WebView} from 'react-native-webview';

const WebBrowserView = ({route, navigation}) => {
  const {webAddress} = route.params;

  return (
      <WebView source={{uri: `${webAddress}`}} />
  );
};

export default WebBrowserView;
