import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import viewStyle from './fixtureStyles/styles';

function Fixture({ data }) {
    const { localTeam, visitorTeam, time } = data;

    return (
        <View style={viewStyle.containerView}>
            <View style={viewStyle.mainView}>
                <View style={viewStyle.innerView}>
                    <View style={viewStyle.infoView1}>
                        <View>
                            <Image
                                style={viewStyle.clubImg}
                                source={{ uri: localTeam.logo_path }}
                            ></Image>
                        </View>
                        <Text style={viewStyle.team1TextStyle}>
                            {localTeam.name}
                        </Text>
                    </View>
                </View>
                <View style={viewStyle.textBox}>
                    <Text>{time}</Text>
                </View>
                <View style={viewStyle.innerView}>
                    <View style={viewStyle.infoView}>
                        <View>
                            <Image
                                style={viewStyle.clubImg}
                                source={{ uri: visitorTeam.logo_path }}
                            ></Image>
                        </View>
                        <Text style={viewStyle.team2TextStyle}>
                            {visitorTeam.name}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Fixture;
