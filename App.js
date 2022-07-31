import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import YogaPose1 from './assets/YogaPose1.jpg'
import YogaPose2 from './assets/YogaPose2.jpg'

import Pose from './components/Pose';

//show only first entry of the fetched array, save it in currentPose
//need a function that changes the currentPose to the next one in the array after ~1 Minute

export default function App() {

  //state variables, if changes, site rerenders. u want to render little as possible
  const [CurrIndex, setCurrIndex] = useState(0)
  const [resourceType, setResourceType] = useState('users')
  const [items, setItems] = useState([])

  // this "updates" every time automatically app renders, so every time state variable changes
  const currPose = items[CurrIndex]
  const nextPose = items[CurrIndex + 1]
  const Server_URL = `https://jsonplaceholder.typicode.com/${resourceType}`


  //this runs only once onLoad
  useEffect(() => {
    console.log("startedddd!");
    fetch(Server_URL)
      .then(response => response.json())
      .then(function logData(jsn) {
        console.log(jsn.length)
        return jsn
      })
      .then(function setData(resultOfThePreviousThenStatement) { setItems(resultOfThePreviousThenStatement) })
    //this gives out 1 ?? is there a callback when completed?

    // This is because of the way functions vs values work
    //
    // When it runs fetch.then.then.then it calculates the inside of each () before starting
    // The inside of (Server_URL) is (`https://.....`)
    // The inside of (response => response.json()) is _the function_ (response => response.json())
    // The inside of (json => setItems(json)) is _the function_ (json => setItems(json))
    // The inside of (console.log(items.length)) is (1) because it _runs_ console.log(items.length).  Remember, it has not acutally run "fetch" yet
    //   i.e. if you want the length of the items, you need to put (() => console.log(items.length)) because `() =>` means "this is a function" so run
    //   it _after_ "fetch" gets run
    // 
    // At the beginning, I would avoid using () => ...
    // When you want it to do a funciton, you can type
    // .then(function () { console.log(items.length) })
    // Doing this will help you learn when to pass a _function_ and when to pass a _value_
    // "() => ..." is shorthand for "function () { ... }"
  }, [])

  //
  useEffect(() => {
    console.log(currPose);
    console.log(nextPose);
    console.log(items.length);  //now it shows 10 lol

    // Yes, this shows 10 because this effect _function_ (notice the () => at the top means "this is a function")
    // gets run every time currPost changes.  So the first time, it will show 1, then the next time it will show whatever
    // items.length is when currPose changed
  }, [currPose])


  // It's very standard to put functions in camelCase.  i.e. the first letter is lowercase then every word is capitalized
  // i.e. this should be iteratePoses
  //
  // The name could be more descriptive though.  It would make more sense to say something like "goToNextPose" since that's what
  // it "does" rathern than "how would a programmer describe it to his engineer friends"
  //
  // In a "better" world you wouldn't do this though.  See what I wrote below
  function goToNextPose() {
    if (CurrIndex + 1 === items.length) {
      setCurrIndex(0);
    } else {
      setCurrIndex(CurrIndex + 1);
    }
    setCurrPose(items[CurrIndex].username);

    if (CurrIndex + 1 === items.length) {
      setNextPose(items[0].username);
    } else {
      setNextPose(items[CurrIndex + 1].username);
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.AppName}>SUPER AWESOME YOGA APP!</Text>
      <Text>{resourceType}</Text>

      <View style={styles.nextPoseWrapper}>
        <View>
          <Text style={styles.NextPoseText}>Next:</Text>
          <Text style={styles.NextPoseName}>Warrior</Text>
          <Text>{nextPose}</Text>

        </View>

        <View style={styles.NextImageThumbnail}>
          <img src={YogaPose2} alt="Warrior" />
        </View>

        <View style={styles.NextButton} >
          {/* It would be better to write something like `onClick={function () { setCurrPoseIndex(currPoseIndex + 1) }} */}
          <button onClick={() => { goToNextPose(); }}>Go to next Pose</button></View>
      </View>

<Pose data={items[CurrIndex]}/>
<Pose data={items[(CurrIndex + 1) % items.length]}/>


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

the API I'm giving you doesn't have pictures.  You could create them yourself (IRL you'd make designers do it)
or leave it out for now

2.
Refractoring the project so that i have components in different scripts? 
for example one comp for the current pose, second Comp for the next pose

You should have a "pose" component, which just takes a "pose" data structure (you should use Typescript TBH)

Something like
<Pose data={items[currPoseIndex]} />
would be very nice indeed

3.
Issues:
console.log(length of array) in the beginning doesn't show the correct length .. also doesn't load the default element from the beginning?
Can i use ++ instead of +1 ?

No you cannot use ++ instead of +1.  It shows the correct value.

console.log(items.length) menas "outputs the length then return 'void'" and that is a _value_
() => console.log(items.length) means "this is a function which outputs the length then returns 'void'"

`.then()` takes _functions_ not _values_ as inputs.  You need to pass a function to .then, not a value

Snippets:

      Shows all the entries in a text block:
      {items.map((item) => {
        return <pre>{
          JSON.stringify(item)
          }</pre>
      })}
*/
