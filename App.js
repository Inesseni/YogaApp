import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import YogaPose1 from './assets/YogaPose1.jpg'
import YogaPose2 from './assets/YogaPose2.jpg'

//show only first entry of the fetched array, save it in currentPose
//need a function that changes the currentPose to the next one in the array after ~1 Minute

export default function App() {
  const [CurrIndex, setCurrIndex] = useState(0)
  const [NextIndex, setNextIndex] = useState(0) //why can i not set this to 1 for example??

  const [resourceType, setResourceType] = useState('users')
  const [items, setItems] = useState([0])
  const [currPose, setCurrPose] = useState(items[CurrIndex].username)
  const [nextPose, setNextPose] = useState(items[NextIndex].username)
  const Server_URL = `https://jsonplaceholder.typicode.com/${resourceType}`


  //this runs only once onLoad
  useEffect(() => {
    console.log("startedddd!");
    fetch(Server_URL)
      .then(response => response.json())
      .then(json => setItems(json))
    //.then(console.log(currPose))      //logs the entry for "title" in the selected item (rn only 'posts' has an entry with "title")
    //.then(start a timer that will set the next pose in 1 min)
    console.log(items.length);  //this gives out 1 ?? 
  }, [])

  //
  useEffect(() => {
    console.log(currPose);
    console.log(nextPose);
    console.log(items.length);  //now it shows 10 lol
  }, [currPose])

  useEffect(() => {    
    //setNextIndex(NextIndex + 1);
    //setNextPose(items[NextIndex].username);
  },[CurrIndex])


  return (
    <View style={styles.container}>
      
      <Text style={styles.AppName}>SUPER AWESOME YOGA APP!</Text>
      <Text>{resourceType}</Text>

      <View style={styles.nextPoseWrapper}>
        <View>
          <Text style={styles.NextPoseText}>Next:</Text>
          <Text style={styles.NextPoseName}>Warrior</Text>
          <Text>{currPose}</Text>

        </View>

        <View style={styles.NextImageThumbnail}>
          <img src={YogaPose2} alt="Warrior" />
        </View>

        <View style={styles.NextButton} >
          <button onClick={() => {
            if (CurrIndex == items.length) {
              CurrIndex = 0;
            } 
              setCurrIndex(CurrIndex + 1);
              setCurrPose(items[CurrIndex].username);
              //this one doesn't work at all:
              setNextIndex(CurrIndex + 1);
              setNextPose(items[NextIndex].username);
            

          }}>Go to next Pose</button></View>
      </View>



      <View style={styles.YogastretchWrapper}>
        <Text style={styles.sectionTitle}>Do this Yoga pose for 3 Minutes:</Text>
        <Text style={styles.NextPoseName}>Downward facing dog</Text>
        <Text>{nextPose}</Text>
        
        <View style={styles.CurrentImage}>
          <img src={YogaPose1} alt="DownwardDog" />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f28d79',
    padding: 20,
  },
  AppName: {
    fontSize: 40,
    fontWeight: 1000,
    textAlign: 'center',
    marginBottom: 30,
    color: '#ffffff',
  },
  CurrentImage: {
    minWidth: 300,
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  nextPoseWrapper: {
    height: 75,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
  },
  NextImageThumbnail: {
    maxWidth: 100,
    flex: 1,
  },
  NextPoseText: {
    flex: 1,
    textAlign: 'right',
    alignSelf: 'flex-end',

  },
  NextPoseName: {
    fontSize: 30,
    fontWeight: 600,
    alignSelf: 'flex-end',
  },
  YogastretchWrapper: {
    paddingTop: 40,

  },
  NextButton: {
    height: 75,
    alignSelf: 'stretch',
  },

});


/*Fragen:
1.
adjust picture automatically to the parent wrapper?
zB das Thumbnail für nächste Pose, jetzt ist es hardcoded

2.
Refractoring the project so that i have components in different scripts? 
for example one comp for the current pose, second Comp for the next pose

3.
Issues:
Can't set NextIndex to CurrInde +1 ?
How/where can i check if i am out of range in the array and set index to 0 again?
console.log(length of array) in the beginning doesn't show the correct length .. also doesn't load the default element from the beginning?


Snippets:

      Shows all the entries in a text block:
      {items.map((item) => {
        return <pre>{
          JSON.stringify(item)
          }</pre>
      })}
*/