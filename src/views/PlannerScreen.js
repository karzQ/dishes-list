import React, {useState, useEffect} from 'react';
import { SafeAreaView, View } from 'react-native';

import {Calendar} from 'react-native-calendars'

const PlannerScreen = () => {

    const [selectedDay, setSelectedDay] = useState(new Date());

    useEffect(() => {
        console.log({selectedDay});
    }, [selectedDay])

    return (
        <SafeAreaView>
            
            <View style={{padding: 10}}>
                <Calendar
                    onDayPress={(day) => setSelectedDay(day)}
                    style={{
                        borderWidth: 1,
                        borderColor: 'lightgray',
                        minHeight: 370
                    }}
                />
            </View>

            <View>
                
            </View>

        </SafeAreaView>
    )
}

export default PlannerScreen;