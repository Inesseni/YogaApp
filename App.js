import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import YogaPose1 from './assets/YogaPose1.jpg'
import YogaPose2 from './assets/YogaPose2.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      {/*Today tasks*/}
      <Text style={styles.AppName}>SUPER AWESOME YOGA APP!</Text>


      <View style={styles.nextPoseWrapper}>
        <View>
          <Text style={styles.NextPoseText}>Next:</Text>
          <Text style={styles.NextPoseName}>Warrior</Text>
        </View>

        <View style={styles.NextImageThumbnail}>
          <img src={YogaPose2} alt="Warrior" />
        </View>
      </View>

      <View style={styles.YogastretchWrapper}>
      <Text style={styles.sectionTitle}>Do this Yoga pose for 3 Minutes:</Text>
        <Text style={styles.NextPoseName}>Downward facing dog</Text>
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

  },
  NextPoseName: {
    fontSize: 30,
    fontWeight: 600,
  },
  YogastretchWrapper: {
    paddingTop: 40,

  },

});


/*Fragen:
1.
wie kann ich ein bild automatisch an den wrapper anpassen? 
zB das Thumbnail für nächste Pose, jetzt ist es hardcoded

2.


*/