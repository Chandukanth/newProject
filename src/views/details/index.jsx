import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View, Dimensions, ScrollView, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ShirtSize, ShirtSize2 } from "../../helper/shirtSize";
import LaunchedToday from "../dashboard/launchedToday";

const { width, height } = Dimensions.get('screen')
const image1 = require('../../images/image1.jpg')
const image2 = require('../../images/image2.jpg')
const image3 = require('../../images/image3.jpg')
const image4 = require('../../images/image4.jpg')
const image5 = require('../../images/image5.jpg')
const image6 = require('../../images/image6.jpg')
const image7 = require('../../images/image7.jpg')
const DetailsScreen = () => {
    const navigation = useNavigation();
    const [currentPage, setCurrentPage] = useState(0);

    const content = [
        { id: 1, image: image1 },
        { id: 2, image: image2 },
        { id: 3, image: image3 },
        { id: 4, image: image4 },
        { id: 5, image: image5 },
        { id: 6, image: image6 },
        { id: 7, image: image7 },

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

    const handlePageChange = (event) => {
        const { contentOffset } = event.nativeEvent;
        const pageIndex = Math.round(contentOffset.x / width);
        setCurrentPage(pageIndex);
    };
    const renderDot = (index) => {
        return (
            <View key={index} style={{
                width: 6,
                height: 6,
                borderRadius: 4,
                backgroundColor: index === currentPage ? 'black' : '#C4C4C4',
                marginHorizontal: 4
            }} />
        );
    };
    return (
        <>
            {/* Header */}

            <FlatList
                data={content}
                horizontal
                pagingEnabled
                onScroll={handlePageChange}
                style={{ height: height / 1, flex: 0.7 }}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ flex: 1 }}>

                        <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')} style={{ width: width, marginTop: 20 }}>
                            <Image
                                source={item.image}
                                style={{ width: width, height: height / 2, resizeMode: 'cover' }}
                            />
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                            {content.map((_, index) => renderDot(index))}
                        </View>
                    </View>
                )}
            />
            {/* body */}

            <View style={{ flex: 0.8, marginHorizontal: 20 }}>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{ fontSize: 14, fontWeight: 700 }}>Top Gun:Blueprint</Text>
                    <Text style={{ fontSize: 10, fontWeight: 700, color: 'lightgrey', marginTop: 3 }}>Oversized T-Shirts</Text>
                    <Text style={{ fontWeight: 900, fontSize: 16, marginTop: 3 }}>₹ 999</Text>
                    <Text style={{ fontSize: 12, marginTop: 3, opacity: 0.4 }}>MRP incl. of all taxes</Text>
                    <View style={{ borderWidth: 0.5, width: '100%', marginTop: 10 }} />
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontWeight: 700 }}>Please select a size</Text>

                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {ShirtSize.map((item, index) => (
                            <TouchableOpacity key={index} style={{ marginRight: 10, width: width / 6.5, height: 30, borderRadius: 20, borderWidth: 0.5, marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 12 }}>{item.name.toUpperCase()}</Text>
                            </TouchableOpacity>
                        ))}


                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {ShirtSize2.map((item, index) => (
                            <TouchableOpacity key={index} style={{ marginRight: 10, width: width / 6.5, height: 30, borderRadius: 20, borderWidth: 0.5, marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 12 }}>{item.name.toUpperCase()}</Text>
                            </TouchableOpacity>
                        ))}


                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Text style={{ fontWeight: 700 }}>Delivery Details</Text>

                    </View>
                    <View style={{ marginTop: 10, borderWidth: 0.5, borderColor: 'black', height: 40, borderRadius: 10, flexDirection: 'row', alignItems:'center' }}>
                        <TextInput
                            style={{ width: '80%', marginLeft : 10 }}
                            keyboardType="number-pad"
                            cursorColor={'black'}
                        />
                        <Text style={{color : 'green'}}>CHECK</Text>

                    </View>

                    <LaunchedToday title={'Similar Products'} content={lanchedToday} />


                </ScrollView>



            </View>
            {/* Footer */}
            <View style={{ elevation: 5, width: width, height: 50, backgroundColor: 'white', position: 'absolute', bottom: 0, borderTopLeftRadius: 10, borderTopRightRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ borderWidth: 1, borderColor: 'black', width: '40%', height: 30, marginLeft: 10, borderRadius: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'black' }}>WishList</Text>
                    <Ionicons style={{ marginLeft: 10 }} name="heart" size={20} color="black" />

                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'black', width: '50%', height: 30, marginLeft: 10, borderRadius: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white' }}>Add to Cart</Text>
                    <Ionicons style={{ marginLeft: 10 }} name="cart" size={20} color="white" />

                </TouchableOpacity>
            </View>
        </>

    );
};

export default DetailsScreen;
