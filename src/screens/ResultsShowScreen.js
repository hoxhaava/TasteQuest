import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    ScrollView,
} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam("id");

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{result.name}</Text>
            <ScrollView horizontal style={styles.imageScroll}>
                {result.photos.map((item) => {
                    return (
                        <Image key={item} style={styles.image} source={{ uri: item }} />
                    );
                })}
            </ScrollView>
            <View style={styles.detailsContainer}>
                <Text style={styles.subtitle}>Rating: {result.rating} Stars</Text>
                <Text style={styles.subtitle}>{result.review_count} Reviews</Text>
                <Text style={styles.subtitle}>Price: {result.price}</Text>
                <Text style={styles.subtitle}>Phone: {result.phone}</Text>
                <Text style={styles.subtitle}>Address: {result.location.address1}</Text>
                <Text style={styles.subtitle}>Category: {result.categories[0].title}</Text>
            </View>
            <Text style={styles.descriptionTitle}>Description:</Text>
            <Text style={styles.description}>{result.name} is a popular restaurant offering a variety of {result.categories[0].title} dishes. With a {result.rating} star rating and {result.review_count} reviews, it is a favorite among locals and visitors alike. The restaurant offers dishes at a {result.price} price range, making it suitable for different budgets.</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F5F5",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 16,
        marginBottom: 8,
        color: "#222",
    },
    imageScroll: {
        borderBottomWidth: 0.5,
        borderBottomColor: "#ccc",
    },
    image: {
        height: 200,
        width: 300,
        marginVertical: 8,
        marginLeft: 16,
        borderRadius: 10,
    },
    detailsContainer: {
        marginTop: 16,
        paddingHorizontal: 16,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 4,
        color: "#444",
    },
    descriptionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 16,
        paddingHorizontal: 16,
        color: "#222",
    },
    description: {
        fontSize: 16,
        textAlign: "justify",
        paddingHorizontal: 16,
        marginBottom: 16,
        lineHeight: 24,
        color: "#444",
    },
});

export default ResultsShowScreen;