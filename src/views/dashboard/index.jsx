import React, { useRef, useState } from "react";
import { View, StatusBar, TouchableOpacity, DrawerLayoutAndroid, Text, FlatList, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LoadingScreen from "../loadingScreen";
import IconBlinking from "../loadingScreen/iconBlinking";
const image1 = require('../../images/image1.jpg')
const image2 = require('../../images/image2.jpg')
const image3 = require('../../images/image3.jpg')
const image4 = require('../../images/image4.jpg')
const image5 = require('../../images/image5.jpg')
const image6 = require('../../images/image6.jpg')
const image7 = require('../../images/image7.jpg')


const HorizantalScroll = ({ title, content }) => {
    const navigation = useNavigation()
    return (
        <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: 900 }}>{title}</Text>
            <FlatList
                data={content}
                horizontal
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('LoadingScreen')} style={{ width: 150, height: 200, marginRight: 20, backgroundColor: 'white', marginTop: 20 }}>
                        <Image
                            source={item?.image}
                            style={{ width: 150, height: 200, objectFit: 'contain' }}
                        />
                    </TouchableOpacity>
                )}

            />

        </View>
    )

}

const DashBoard = () => {
    const drawerRef = useRef(null);
    const statusBarHeight = StatusBar.currentHeight;
    const [activeDrawer, setActiveDrawer] = useState('mens');
    const navigation = useNavigation()

    const openDrawer = () => {
        drawerRef.current.openDrawer();
    };

    const mens = [
        { name: 'OverSized T-Shirt' },
        { name: 'Jackets' },
        { name: 'Full-Sleeve Shirts' },
        { name: 'Hoodies' },
        { name: 'Solid T-Shirts' },
        { name: 'Dropcut T-Shirts' },
    ]

    const activeStyles = {
        backgroundColor: 'white',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        borderRadius: 10,

        elevation: 5
    }
    const activeWomenStyles = {
        backgroundColor: 'white',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        borderRadius: 10,
        elevation: 5
    }

    const Content = [
        { name: 'CHandu', id: 1 },
        { name: 'CHandu', id: 2 },
        { name: 'CHandu', id: 3 },
        { name: 'CHandu', id: 4 },
        { name: 'CHandu', id: 5 },
        { name: 'CHandu', id: 7 },
        { name: 'CHandu', id: 8 },
        { name: 'CHandu', id: 9 },

    ]

    const category = [
        { name: 'CHandu', id: 1, image: image1 },
        { name: 'CHandu', id: 2, image: image2 },
        { name: 'CHandu', id: 3, image: image3 },
        { name: 'CHandu', id: 4, image: image4 },
        { name: 'CHandu', id: 5, image: image5 },
        { name: 'CHandu', id: 7, image: image6 },
        { name: 'CHandu', id: 8, image: image7 },
        { name: 'CHandu', id: 9, image: image1 },
    ]

    const latest = [
        { name: 'CHandu', id: 1, image: image5 },
        { name: 'CHandu', id: 2, image: image4 },
        { name: 'CHandu', id: 3, image: image3 },
        { name: 'CHandu', id: 4, image: image2 },
        { name: 'CHandu', id: 5, image: image1 },
        { name: 'CHandu', id: 7, image: image7 },
        { name: 'CHandu', id: 8, image: image6 },
        { name: 'CHandu', id: 9, image: image5 },
    ]
    const lanchedToday = [
        { name: 'CHandu', id: 1, image: image3 },
        { name: 'CHandu', id: 2, image: image7 },
        { name: 'CHandu', id: 3, image: image6 },
        { name: 'CHandu', id: 4, image: image5 },
        { name: 'CHandu', id: 5, image: image7 },
        { name: 'CHandu', id: 7, image: image1 },
        { name: 'CHandu', id: 8, image: image4 },
        { name: 'CHandu', id: 9, image: image5 },
    ]

    return (
        <DrawerLayoutAndroid
            ref={drawerRef}
            drawerWidth={250}
            drawerPosition="left"
            renderNavigationView={() => (
                <View style={{ flex: 1, backgroundColor: "#fff" }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '15%' }}>
                        <TouchableOpacity style={{ width: 150, height: 40, borderRadius: 10, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white' }}>Login or Signup</Text>

                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', height: 1, backgroundColor: 'black', marginTop: 20 }} />
                    <View style={{ width: '90%', height: 50, backgroundColor: 'lightgrey', marginTop: 20, marginLeft: '5%', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setActiveDrawer('mens')} style={[activeDrawer == 'mens' ? activeStyles : {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '50%'
                        }]}>
                            <Text style={{ marginLeft: 10, fontWeight: activeDrawer == 'mens' ? 800 : 400 }}>Alpha Men's</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[activeDrawer == 'womens' ? activeWomenStyles : {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '50%'
                        }]} onPress={() => setActiveDrawer('womens')}>
                            <Text style={{ marginRight: 10, fontWeight: activeDrawer == 'womens' ? 800 : 400 }}>Women's</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginTop: 40 }} />
                    {mens.map((item, index) => (
                        <TouchableOpacity onPress={() => navigation.navigate('LoadingScreen')} key={index} style={{ marginTop: 10, marginLeft: '5%', flexDirection: 'row', marginBottom: 40, alignItems: 'center' }}>
                            <View style={{ width: 15, height: 15, borderRadius: 20, backgroundColor: 'lightgrey' }}></View>
                            <Text style={{ fontWeight: 700, marginLeft: 10 }}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}

                    <View style={{ width: '100%', height: 1, backgroundColor: 'black', marginTop: 20 }} />
                    <TouchableOpacity style={{ marginTop: 40, marginLeft: '5%', flexDirection: 'row', marginBottom: 40, alignItems: 'center' }}>
                        <View style={{ width: 15, height: 15, borderRadius: 20, backgroundColor: 'lightgrey' }}></View>
                        <Text style={{ fontWeight: 700, marginLeft: 10 }}>Contact Us</Text>
                    </TouchableOpacity>

                </View >
            )}
        >
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                {/* Header */}
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', width: "100%", height: 70, borderBottomLeftRadius: 12, borderBottomRightRadius: 12, backgroundColor: "white", elevation: 5 }}>
                    <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={openDrawer}>
                        <Ionicons name="menu" size={24} color="black" />
                    </TouchableOpacity>
                    <IconBlinking />
                    <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                        <Ionicons name="search" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                {/* Body */}

                <View style={{ marginHorizontal: 16 }}>
                    <View style={{ width: '100%', backgroundColor: 'white', marginTop: 2, height: 50, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontWeight: 700 }}>Men's</Text>

                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontWeight: 700 }}>Women's</Text>

                        </TouchableOpacity>


                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <HorizantalScroll title={'Category'} content={category} />

                        <HorizantalScroll title={'Latest Collection'} content={latest} />
                        <HorizantalScroll title={'Launched Today'} content={lanchedToday} />
                        <Image
                            source={require('../../images/logo2.png')}
                            style={{ height: 300, width: '100%', objectFit: 'contain', marginTop: 30 }}
                        />
                        <View style={{ marginTop: 500 }} />

                    </ScrollView>



                </View>



                {/* Footer */}

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-around', width: "100%", height: 70, borderTopLeftRadius: 12, borderTopRightRadius: 12, backgroundColor: "white", elevation: 5, position: 'absolute', bottom: 0 }}>
                    <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                        <Ionicons name="home" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                        <Ionicons name="heart" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                        <Ionicons name="chatbox" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                        <Ionicons name="cart" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </DrawerLayoutAndroid >
    );
};

export default DashBoard;
