import { useNavigation } from "@react-navigation/native";
import React, { useRef, useEffect } from "react";
import { View, Animated, Easing, Text, Image } from "react-native";

const IconBlinking = () => {
    const scale = useRef(new Animated.Value(1)).current;
    const opacity = useRef(new Animated.Value(1)).current;
    const navigation = useNavigation()

    useEffect(() => {
        startAnimation();
    }, []);

    const startAnimation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 500,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 500,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(scale, {
                    toValue: 1.2,
                    duration: 2000,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(scale, {
                    toValue: 1,
                    duration: 2000,
                    easing: Easing.linear,
                    useNativeDriver: true
                })
            ])
        ).start();
    };

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', flex: 1 }}>
            <Animated.View style={{ transform: [{ scale }], opacity }}>
                {/* Your custom loading animation component */}
                <View
                    style={{
                        width: 100,
                        height: 50,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={require('../../images/logo2.png')}
                        style={{ width: '100%', height: 300, objectFit: 'contain' }}
                    />
                </View>
            </Animated.View>
        </View>
    );
};

export default IconBlinking;
