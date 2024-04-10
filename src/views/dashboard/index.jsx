import React, { useRef, useState } from "react";
import { View, StatusBar, TouchableOpacity, DrawerLayoutAndroid, Text, FlatList, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HorizantalScroll = ({ title, content }) => {
    return (
        <View style={{ marginTop: 20 }}>
            <Text>{title}</Text>
            <FlatList
                data={content}
                horizontal
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => (
                    <View style={{ width: 150, height: 200, marginRight: 20, backgroundColor: 'black', marginTop: 20 }}>
                    </View>
                )}

            />

        </View>
    )

}

const DashBoard = () => {
    const drawerRef = useRef(null);
    const statusBarHeight = StatusBar.currentHeight;
    const [activeDrawer, setActiveDrawer] = useState('mens')

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
        padding: 10,
        borderRadius: 30
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
                    <View style={{ width: '90%', height: 50, backgroundColor: 'lightgrey', marginTop: 20, marginLeft: '5%', borderRadius: 20, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setActiveDrawer('mens')} style={activeDrawer == 'mens' ? activeStyles : null}>
                            <Text>Alpha Men's</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={activeDrawer == 'womens' ? activeStyles : null} onPress={() => setActiveDrawer('womens')}>
                            <Text>Women's</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginTop: 40 }} />
                    {mens.map((item, index) => (
                        <TouchableOpacity key={index} style={{ marginTop: 10, marginLeft: '5%', flexDirection: 'row', marginBottom: 40, alignItems: 'center' }}>
                            <View style={{ width: 15, height: 15, borderRadius: 20, backgroundColor: 'lightgrey' }}></View>
                            <Text style={{ fontWeight: 700, marginLeft: 10 }}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}

                    <View style={{ width: '100%', height: 1, backgroundColor: 'black', marginTop: 20 }} />
                    <TouchableOpacity style={{ marginTop: 40, marginLeft: '5%', flexDirection: 'row', marginBottom: 40, alignItems: 'center' }}>
                        <View style={{ width: 15, height: 15, borderRadius: 20, backgroundColor: 'lightgrey' }}></View>
                        <Text style={{ fontWeight: 700, marginLeft: 10 }}>Contact Us</Text>
                    </TouchableOpacity>

                </View>
            )}
        >
            <View style={{ flex: 1, backgroundColor: "#f7f7f7" }}>
                {/* Header */}
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', width: "100%", height: 70, borderBottomLeftRadius: 12, borderBottomRightRadius: 12, backgroundColor: "white", elevation: 5 }}>
                    <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={openDrawer}>
                        <Ionicons name="menu" size={24} color="black" />
                    </TouchableOpacity>
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
                        <HorizantalScroll title={'Category'} content={Content} />

                        <HorizantalScroll title={'Latest Collection'} content={Content} />
                        <HorizantalScroll title={'Latest Collection'} content={Content} />
                        <View style={{ marginTop:500 }} />

                    </ScrollView>



                </View>



                {/* Footer */}

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-around', width: "100%", height: 70, borderTopLeftRadius: 12, borderTopRightRadius: 12, backgroundColor: "white", elevation: 5, marginTop: statusBarHeight, position: 'absolute', bottom: 0 }}>
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
        </DrawerLayoutAndroid>
    );
};

export default DashBoard;
