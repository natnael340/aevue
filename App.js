import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign, FontAwesome, Feather  } from '@expo/vector-icons';
// You can import from local files

import AssetExample from './components/AssetExample';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
// or any pure javascript modules available in npm
import { Card, ProgressBar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
//import { LinearTextGradient } from "react-native-text-gradient";

export default function App() {
  const data = [
    {
      id: 1,
      name: 'FGC Playlist',
      img: require('./assets/Image.png'),
      newv: 18,
      tot: 18,
      fin: 0,
    },
    {
      id: 2,
      name: 'Smash Playlist',
      img: require('./assets/Image2.png'),
      newv: 18,
      tot: 30,
      fin: 15,
    },
    {
      id: 3,
      name: 'Valorant Playlist',
      img: require('./assets/Image3.png'),
      newv: 18,
      tot: 21,
      fin: 21,
    },
  ];
  const Item = (item) => (
    <View style={styles.playcard}>
      {console.log(parseFloat(item.fin) / parseFloat(item.tot))}
      <Image source={item.img} style={{ width: '100%' }} />
      <Text style={styles.playcardHead}>{item.name}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 12, color: '#645F6D' }}>
          +{item.newv} New Videos
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign name="eyeo" size={12} color="#8C8797" />
          <Text style={{ color: '#8C8797', marginLeft: 5 }}>
            {item.fin}/{item.tot}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 15 }}>
        <ProgressBar
          progress={parseFloat(item.fin) / parseFloat(item.tot)}
          color="#F2BC3D"
          style={{ borderRadius: 5, backgroundColor: 'rgba(255,255,255,0.2)' }}
        />
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 84,
          right: 40,
          width: 64,
          height: 64,
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          borderRadius: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FontAwesome name="play" size={18} color="white" />
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ padding: 10 }}>
          <MaskedView
            style={{ height: 42 }}
            maskElement={<Text style={styles.text}>Trending Today</Text>}>
            <LinearGradient
              colors={['#F2BC3D', '#D93636']}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              style={{ flex: 1 }}
            />
          </MaskedView>
        </View>
        <ScrollView style={{ paddingHorizontal: 15 }}>
          {data.map((d, i) => Item(d))}
          <View style={{ alignItems: 'center', marginVertical: 30 }}>
            <Image source={require('./assets/va.png')} />
            <Text style={styles.footerText}>
              Check back soon for new clips and creator content
            </Text>
            <Text style={{color: "#A19DAA", fontSize: 13, marginVertical: 5}}>In the mean time learn more</Text>
            <LinearGradient
              colors={['rgba(242,188,61,1)', 'rgba(242,188,61,0.1)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{
                flex: 1,
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 20,
                borderRadius: 30,
                marginTop: 20,
              }}>
              <FontAwesome name="fire" size={24} color="#F2BC3D" />
              <Text
                style={{
                  color: colors.white,
                  fontSize: 17,
                  fontWeight: '500',
                  marginHorizontal: 5,
                }}>
                Tap to learn more
              </Text>
            </LinearGradient>
          </View>
        </ScrollView>
      </View>
      <View style={{ flexDirection: 'row', padding: 15 }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', justifyContent: 'center', alignItems: 'center'}}>
          <FontAwesome name="fire" size={24} color="#F2BC3D" />
          <Text style={{color: "#F2BC3D", marginVertical: 2}}>Home</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Feather  name="compass" size={24} color="rgba(167,167,167,0.35)" />
         
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require("./assets/Tabb.png")} />
          
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

          <Image source={require("./assets/img.png")} />
        </View>
      </View>
    </View>
  );
}

const colors = {
  white: 'white',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight + 25,
    backgroundColor: '#000000',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 22,
    color: colors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  playcardHead: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 28,
    marginVertical: 10,
  },
  playcard: {
    backgroundColor: 'rgba(255,255,255,0.075)',
    borderRadius: 32,
    padding: 20,
    marginVertical: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
