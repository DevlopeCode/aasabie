import React, { useState } from 'react';
import { View, Text } from 'react-native';

import TabButton from './TabGroup';

const TabGroup = ({ screens }) => {
    const [activeScreen, setActiveScreen] = useState(0);

    const handleTabPress = (index) => {
        setActiveScreen(index);
    };

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                {screens.map((screen, index) => (
                    <TabButton
                        key={index}
                        title={screen.title}
                        onPress={() => handleTabPress(index)}
                        isActive={activeScreen === index}
                    />
                ))}
            </View>
            <View>
                {screens[activeScreen].screen}
            </View>
        </View>
    );
};

export default TabGroup;
