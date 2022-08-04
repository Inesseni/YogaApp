import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


import Pose from './components/Pose';
import PosePreview from './components/PosePreview';
import { Button } from 'react-native-web';

//show only first entry of the fetched array, save it in currentPose
//need a function that changes the currentPose to the next one in the array after ~1 Minute




export default function App() {

  //my styled components:
  const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "#palevioletr"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  
  font-size: 1em;
  margin: 3em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 10px;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
  `;


  //state variables, if changes, site rerenders. u want to render little as possible
  const [CurrIndex, setCurrIndex] = useState(0)
  const [items, setItems] = useState([])

  // this "updates" every time automatically when the app renders, so every time state variable changes
  const currPose = items[CurrIndex]
  const nextPose = items[CurrIndex + 1]
  const Server_URL = `https://elliottrarden.me/assets/stretches.json`


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
      <Text style={styles.AppTitle}>SUPER AWESOME YOGA APP!</Text>

      {/*My Components: */}
      <Pose data={items[(CurrIndex) % items.length]} />
      <PosePreview data={items[(CurrIndex + 1) % items.length]} />


      {/*Button to next pose: */}
        <Button onClick={function () { setCurrIndex(CurrIndex + 1) }}>Go to next Pose</Button>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9AC2C9',
    color: '#4A5043',
    padding: 20,
    maxWidth: 800,
    alignSelf: 'center',
  },
  AppTitle: {
    fontSize: 40,
    fontWeight: 1000,
    textAlign: 'center',
    marginBottom: 30,
    color: '#4A5043',
  },
});



/*
Questions:

1. How can i use fonts loaded from a link?
2. Styled "container" didn't work :c also, why do i not have a auto complete in styled-components css?
3. I get a warning from the button now that i called styled inside another component and i should put it outside a function comp / render method, but it didn't work for me
4. container BG is colored, but Left and right from container is white again.. ??
5. how can i use a button inside a component to change values in the parent ? (example: My Button in parent starts the countdown in child component)
6. How can i start the timer again? -> check in Pose.js



All Poses:__________
Dynamic side stretch
Neck stretch
Cat cow
Thread the needle (R)
Thread the needle (L)
Wrist stretch
Walk the dog
Deep lunge (r)
runners stretch (R)
Lizzard Pose (R)
deep lunge (L)
Lizzard Pose (L)
runners stretch (l)
Sphinx
Shoulder Spine Twist (R)
Shoulder Spine Twist (L)
Childs Pose
Butterfly
One Leg Forward Bend  (R)
One Leg Forward Bend  (L)
Straddle Forward Fold
Twist (R)
Twist (L)
Bridge



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
