import React from "react";

export default function Pose(props) {

    const currPose = props.data

    if(currPose === undefined) {
        return null
    }

    return <View style={styles.YogastretchWrapper}>
        <Text style={styles.sectionTitle}>Do this Yoga pose for 3 Minutes:</Text>
        <Text style={styles.NextPoseName}>Downward facing dog</Text>
        <Text>{currPose.name}</Text>

        <View style={styles.CurrentImage}>
            <img src={YogaPose1} alt="DownwardDog" />
        </View>

    </View>
}
