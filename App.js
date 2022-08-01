import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';


import Pose from './components/Pose';
import PosePreview from './components/PosePreview';

//show only first entry of the fetched array, save it in currentPose
//need a function that changes the currentPose to the next one in the array after ~1 Minute




export default function App() {

  //state variables, if changes, site rerenders. u want to render little as possible
  const [CurrIndex, setCurrIndex] = useState(0)
  const [items, setItems] = useState([])

  // this "updates" every time automatically when the app renders, so every time state variable changes
  const currPose = items[CurrIndex]
  const nextPose = items[CurrIndex + 1]
  const Server_URL = `https://jsonplaceholder.typicode.com/users`


  //this runs only once when website opened -> right approach
  //variables used in each .fetch line is the result of the .fetch above
  useEffect(() => {
    fetch(Server_URL)
      .then(response => response.json())
      .then(function logData(jsn) {
        console.log(jsn.length)
        return jsn
      })
      .then(function setData(resultOfThePreviousThenStatement) { setItems(resultOfThePreviousThenStatement) })
  }, [])

  //this runs every time as a "sideeffect" when the currPose variable changes
  useEffect(() => {
    console.log(currPose);
    console.log(nextPose);
    console.log(items.length);
  }, [currPose])




  return (
    <View style={styles.container}>

      <Text style={styles.AppName}>SUPER AWESOME YOGA APP!</Text>



      {/*My Components: */}
      <PosePreview data={items[(CurrIndex + 1) % items.length]} />
      <Pose data={items[(CurrIndex) % items.length]} />

      {/*Button to next pose: */}
      <View style={styles.NextButton} >
        <button onClick={function () { setCurrIndex(CurrIndex + 1) }}>Go to next Pose</button>
      </View>
    </View>
  );
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f28d79',
    padding: 20,
    maxWidth: 800,
    alignSelf: 'center',
  },
  AppName: {
    fontSize: 40,
    fontWeight: 1000,
    textAlign: 'center',
    marginBottom: 30,
    color: '#ffffff',
  },
  NextButton: {
    width: 75,
    alignSelf: 'flex-end',
  },

});



/*
Questions:
1. whats the advantage of using components vs. "normal" code? only reusability?



Snippets:

  {items.map((item) => {
    return <pre>{
      JSON.stringify(item)
      }</pre>
  })}
  ::Shows all the entries in a text block


  <Pose data={items[(CurrIndex) % items.length]} />
  :: % itmes.length is a weird operator that loops the array if you are at the end -> no check if at the end needed!


*/
