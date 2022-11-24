import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export const Counter: React.FC<{ label: string }> = ({ label }) => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text>{label} {count} times</Text>
            <Button onPress={() => setCount((value) => value + 1)} title='Press Me' />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        backgroundColor: 'red',
    },
});
