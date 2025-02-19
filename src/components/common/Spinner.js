import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00e640' }}>
            <ActivityIndicator/>
        </View>
    );
};

export { Spinner };