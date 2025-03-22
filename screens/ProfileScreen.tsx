import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const nameUser = 'Eliseo';
const emailUser = 'eliseo_melquiades@outlook.com';

const ProfileScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{nameUser}</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/457730677_541195521901751_7751003548459438498_n.jpg?ccb=11-4&oh=01_Q5AaIUfpMgt_Mn0UIJkFwBVqMvc1DEAuLzcXdfSsLbbIb5wR&oe=67E6F27D&_nc_sid=5e03e0&_nc_cat=104',
        }}
      />
      <Text style={styles.small_text}>{emailUser}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Welcome')}>
        <Text style={styles.text_button}>Cerrar sesion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  small_text: {
    fontSize: 16,
    color: 'gray',
    margin: 10,
  },
  button: {
    padding: 10,
    backgroundColor: 'red',
    width: 300,
    borderRadius: 10,
  },
  text_button: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  tinyLogo: {
    width: 200,
    height: 200,
    borderRadius: 150,
    margin: 10,
  },
});

export default ProfileScreen;
