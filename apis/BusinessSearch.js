// BusinessSearch.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const BusinessSearch = () => {
  const [businesses, setBusinesses] = useState([]);

  const fetchBusinesses = async () => {
    const options = {
      method: 'GET',
      url: 'https://red-flower-business-data.p.rapidapi.com/business-search',
      params: {
        query: 'Pizza',
        location: 'San Francisco, CA, USA',
        sort_by: 'RECOMMENDED',
        start: '0',
        yelp_domain: 'yelp.com'
      },
      headers: {
        'x-rapidapi-key': '5c13bf7dd0msh9b75fd392e4a6efp1d203ajsn3ea11e5b77c6',
        'x-rapidapi-host': 'red-flower-business-data.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setBusinesses(response.data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Search Pizza Businesses" onPress={fetchBusinesses} />
      {businesses.map((business, index) => (
        <View key={index} style={styles.businessContainer}>
          <Text>Name: {business.name}</Text>
          <Text>Alias: {business.alias}</Text>
          {/* Add more properties here as needed */}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  businessContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    width: '100%',
  },
});

export default BusinessSearch;
