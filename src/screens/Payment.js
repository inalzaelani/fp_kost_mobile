import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Card from '../components/Card'; // Import the Card component

const Payment = () => {
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [proofImage, setProofImage] = useState(null);

  const selectFile = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error:', response.error);
      } else {
        const source = { uri: response.uri };
        setProofImage(source);
      }
    });
  };

  const submitPayment = () => {
    console.log('Bukti dikirim');
  };

  return (
    <View style={styles.container}>
      <Header title="Payment" />
      <Text style={styles.amountText}>Jumlah yang harus dibayar:</Text>
      <Card> 
        <Text style={styles.amount}>{paymentAmount}</Text>
      </Card>
      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.uploadButton} onPress={selectFile}>
          <Text style={styles.buttonText}>Pilih File</Text>
        </TouchableOpacity>
        {proofImage && <Image source={proofImage} style={styles.previewImage} />}
        <TouchableOpacity
          style={[styles.submitButton, !proofImage && styles.disabledButton]}
          onPress={submitPayment}
          disabled={!proofImage}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <Navigation active='Payment'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F7F7',
  },
  amountText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  amount: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  uploadButton: {
    backgroundColor: '#3F72AF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#98EECC',
    padding: 10,
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: '#9e9e9e',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  previewImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default Payment;
