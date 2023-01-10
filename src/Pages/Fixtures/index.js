import { Platform, ScrollView, View } from 'react-native';
import Fixture from '../../components/Fixtures/Fixture';
import { useEffect, useState } from 'react';
import Api from '../../api';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native-paper';
import * as platformType from '../../types/index';
import viewStyle from '../../components/Fixtures/fixtureStyles/styles';

function Fixtures() {
    const [fixtureData, setFixtureData] = useState([]);
    const [date, setDate] = useState(new Date());
    const [platform, setPlatform] = useState(false);
    const [text, setText] = useState('2022-11-04');

    const onChange = (event, selectedDate) => {
        const currDate = selectedDate || date;

        setPlatform(Platform.OS === platformType.IOS);

        setDate(currDate);

        let tempDate = new Date(currDate);
        formatDate =
            tempDate.getFullYear() +
            '-' +
            (tempDate.getMonth() + 1) +
            '-' +
            tempDate.getDate();

        setText(formatDate);
    };

    const handleData = (data) => {
        return data.map((item) => ({
            localTeam: item.localTeam.data,
            visitorTeam: item.visitorTeam.data,
            time: item.time.starting_at.time.slice(0, 5),
            date: item.time.starting_at.date,
        }));
    };

    const getData = () => {
        Api.get(`/fixtures/date/${text}?&include=localTeam,visitorTeam`)
            .then((res) => {
                const data = handleData(res.data.data);
                setFixtureData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        if (date) {
            getData();
        }
    }, [date]);

    return (
        <>
            <View>
                <Button
                    color='black'
                    onPress={() => {
                        setPlatform(true);
                    }}
                >
                    PICK FIXTURE DATE
                </Button>
            </View>

            <View style={viewStyle.calendarView}>
                {platform && (
                    <DateTimePicker
                        testID='dateTimePicker'
                        value={date}
                        onChange={onChange}
                        display='default'
                    />
                )}
            </View>

            <ScrollView>
                {fixtureData.map((data) => {
                    return <Fixture data={data} key={data.id} />;
                })}
            </ScrollView>
        </>
    );
}

export default Fixtures;
