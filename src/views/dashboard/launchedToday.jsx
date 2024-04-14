import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const LaunchedToday = ({ content, title }) => {
    const navigation = useNavigation()
    return (
        <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: 900 }}>{title ? title : 'Launched Today'}</Text>
            <FlatList
                data={content}
                horizontal
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => (
                    <>
                        <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')} style={{ width: 150, marginRight: 20,marginTop: 20 }}>
                            <Image
                                source={item?.image}
                                style={{ width: 150, height: 200, objectFit: 'contain' }}
                            />
                            <Text style={{ fontSize: 10, marginTop: 10, fontWeight: 700 }}>Top Gun:Blueprint</Text>
                            <Text style={{ fontSize: 8, fontWeight: 700, color: 'lightgrey', marginTop: 3 }}>Oversized T-Shirts</Text>
                            <Text style={{ fontWeight: 900, fontSize: 12, marginTop: 3 }}>₹ 999</Text>
                            <Text style={{ fontSize: 10, marginTop: 3, opacity: 0.4 }}>MRP incl. of all taxes</Text>
                            <TouchableOpacity style={{ width: 150, height: 40, backgroundColor: 'black', borderRadius: 6, marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontWeight: 600, fontSize: 12 }}>Add to Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </>

                )}

            />

        </View>
    )

}
export default LaunchedToday