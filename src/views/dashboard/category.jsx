import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View, Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen')

const Category = ({ content, image }) => {
    const navigation = useNavigation();
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (event) => {
        const { contentOffset } = event.nativeEvent;
        const pageIndex = Math.round(contentOffset.x / width);
        setCurrentPage(pageIndex);
    };
    const renderDot = (index) => {
        return (
            <View key={index} style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: index === currentPage ? 'black' : '#C4C4C4',
                marginHorizontal: 4
            }} />
        );
    };
    return (
        <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize : 18 }}>Category</Text>
            <FlatList
                data={content}
                horizontal
                pagingEnabled
                onScroll={handlePageChange}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View >
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')} style={{ width: width / 2.5, height: 200, marginRight: 20, backgroundColor: 'white', marginTop: 20 }}>
                                <Image
                                    source={item.image}
                                    style={{ width: width / 2.5, height: 200, resizeMode: 'contain' }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')} style={{ width: width / 2.5, height: 200, marginRight: 20, backgroundColor: 'white', marginTop: 20 }}>
                                <Image
                                    source={item.image2}
                                    style={{ width: width / 2.5, height: 200, resizeMode: 'contain' }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')} style={{ width: width / 2.5, height: 200, marginRight: 20, backgroundColor: 'white' }}>
                                <Image
                                    source={item.image3}
                                    style={{ width: width / 2.5, height: 200, resizeMode: 'contain' }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')} style={{ width: width / 2.5, height: 200, marginRight: 20, backgroundColor: 'white' }}>
                                <Image
                                    source={item.image4}
                                    style={{ width: width / 2.5, height: 200, resizeMode: 'contain' }}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>
                )}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                {content.map((_, index) => renderDot(index))}
            </View>
        </View>
    );
};

export default Category;
