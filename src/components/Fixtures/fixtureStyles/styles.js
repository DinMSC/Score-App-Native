import { StyleSheet } from 'react-native';

const viewStyle = StyleSheet.create({
    mainView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        padding: 5,
        height: 70,
        borderColor: 'black',
        borderBottomWidth: 1,
        borderTopWidth: 1,
    },
    innerView: {
        display: 'flex',
        backgroundColor: 'white',
        padding: 4,
        justifyContent: 'center',
        width: 80,
        flexGrow: 0.3,
    },
    infoView1: {
        backgroundColor: 'white',
        height: 41,
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        flexGrow: 0.3,
    },
    infoView: {
        backgroundColor: 'white',
        height: 41,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 0.3,
    },
    clubImg: {
        width: 44,
        height: '100%',
    },
    textBox: {
        display: 'flex',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendarView: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    team2TextStyle: { paddingLeft: 12, fontSize: 12 },
    team1TextStyle: { paddingRight: 12, fontSize: 12 },
    containerView: { marginBottom: 15, marginTop: 15 },
});

export default viewStyle;
