import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { debounce } from 'lodash';
import { useNavigation } from '@react-navigation/native';

const initialJobData = [
    { id: '1', jobTitle: 'Software Engineer',  companyName: 'ABC Company',avatar: require('../assets/favicon.png') },
    { id: '2', jobTitle: 'Frontend Developer',  companyName: 'XYZ Inc.',avatar: require('../assets/favicon.png') },
    { id: '3', jobTitle: 'Data Analyst',  companyName: 'PQR Corporation',avatar: require('../assets/favicon.png') },
    { id: '4', jobTitle: 'UI/UX Designer',  companyName: 'DEF Solutions',avatar: require('../assets/favicon.png') },
    { id: '5', jobTitle: 'Backend Developer',  companyName: 'GHI Technologies',avatar: require('../assets/favicon.png') },
];

const JobList = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredJobs, setFilteredJobs] = useState(initialJobData);

    useEffect(() => {
        const debouncedSearch = debounce(handleSearch, 300); // Debounce the search function
        debouncedSearch();

        return () => {
        debouncedSearch.cancel(); // Cancel the debounce on component unmount
        };
    }, [searchQuery]);

    const handleSearch = () => {
        const filtered = initialJobData.filter( (job) => job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) || job.companyName.toLowerCase().includes(searchQuery.toLowerCase()));
        setFilteredJobs(filtered);
    };

    const navigation = useNavigation();
    const handleButtonPress = () => {
        navigation.navigate('JobDetail');
    };

  
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.jobItem} onPress={handleButtonPress}>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.jobDetails}>
                <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                <Text style={styles.jobSubtitle}>{item.companyName}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search jobs by job title, company"
                        placeholderTextColor="#888"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
            </View>
            <FlatList
                data={filteredJobs}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.jobList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    header: {
        backgroundColor: '#fff',
        paddingVertical: 16,
        paddingHorizontal: 24,
    },
    searchContainer: {
        backgroundColor: '#f1f3f4',
        height: 48,
        paddingHorizontal: 16,
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    searchInput: {
        flex: 1,
        height: '100%',
        color: '#333',
        fontSize: 16,
        marginLeft: 8,
    },
    jobList: {
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginRight: 20,
    },
    jobItem: {
        backgroundColor: 'white',
        height: 100,
        borderRadius: 10,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    jobDetails: {
        flex: 1,
        marginRight: 16,
    },
    jobTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    jobSubtitle: {
        fontSize: 18,
        color: '#777',
        marginTop: 10,
    },
});

export default JobList;