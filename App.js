import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


import Pose from './components/Pose';
import PosePreview from './components/PosePreview';

//show only first entry of the fetched array, save it in currentPose
//need a function that changes the currentPose to the next one in the array after ~1 Minute




export default function App() {

  //my styled components:
  const AppTitle = styled.h1`
    fontSize: 40,
    fontWeight: 1000,
    textAlign: 'center',
    marginBottom: 30,
    color: '#ffffff',
  `;

  const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;


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
      <AppTitle>SUPER AWESOME YOGA APP!</AppTitle>

      {/*My Components: */}
      <PosePreview data={items[(CurrIndex + 1) % items.length]} />
      <Pose data={items[(CurrIndex) % items.length]} />

      {/*Button to next pose: */}
        <Button onClick={function () { setCurrIndex(CurrIndex + 1) }}>Go to next Pose</Button>
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
});



/*
Questions:
1. whats the advantage of using components vs. "normal" code? only reusability?
2. How can i use fonts loaded from a link?
3. Styled container didn't work :c also, why do i not have a auto complete in styled-components?


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
