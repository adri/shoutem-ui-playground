import React, { Component } from 'react';
import {
  AppRegistry,
  Easing,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  Button,
  Caption,
  DropDownMenu,
  Divider,
  Heading,
  Image,
  Icon,
  Overlay,
  Screen,
  Subtitle,
  Row,
  NavigationBar,
  Title,
  View,
  Text,
  Tile,
} from '@shoutem/ui';

import {
  FadeIn,
  FadeOut,
  ScrollDriver,
  ZoomIn,
  ZoomOut,
  TimingDriver,
  HeroHeader,
  Parallax,
} from '@shoutem/animation';

class HelloWorld extends React.Component {
  render() {
    const driver = new ScrollDriver();

    return (
      <Screen style={{backgroundColor: 'grey'}}>
        <FadeOut driver={driver} inputRange={[10, 70]}>
          <NavigationBar
            leftComponent={<Icon name="sidebar"/>}
            centerComponent={<Title>TITLE</Title>}
          />
        </FadeOut>

        <ScrollView
          style={{paddingTop: 70, flex: 1}}
          {...driver.scrollViewProps}
        >
            <Row styleName="small">
              <Icon name="web"/>
              <Text>Map</Text>
              <Icon styleName="disclosure" name="right-arrow"/>
            </Row>

            <Divider styleName="line" />

            <Row styleName="small">
              <Icon name="ic_restaurant"/>
              <Text>Restaurants</Text>
              <Icon styleName="disclosure" name="right-arrow"/>
            </Row>

            <Divider styleName="line" />

            <Row styleName="small">
              <Icon name="call" />
              <Text>Call us</Text>
            </Row>
        </ScrollView>
      </Screen>
    );
  }
}

const style = StyleSheet.create({
  container: {
    height: 800,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('shoutem_ui', () => HelloWorld);
