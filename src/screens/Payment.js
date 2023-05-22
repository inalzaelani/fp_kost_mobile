import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Payment = () => {
    const [paymentAmount, setPaymentAmount] = useState(0);
    const [proofImage, setProofImage] = useState(null);

    // Contoh fungsi untuk mengirim bukti pembayaran ke server
    const submitPayment = () => {
        // Mengirim data bukti pembayaran dan jumlah yang dibayar ke server
        // ... kode untuk mengirim data ke server ...
    };

    return (
        <View style={styles.container}>
            <Header title='Payment'/>
            <Text style={styles.amountText}>Jumlah yang harus dibayar: {paymentAmount}</Text>
            <View style={styles.formContainer}>
                <TouchableOpacity
                    style={styles.uploadButton}
                    onPress={() => {
                        // Implementasikan logika untuk memilih file bukti pembayaran
                    }}
                >
                    <Text style={styles.buttonText}>Pilih File</Text>
                </TouchableOpacity>
                {proofImage && (
                    <Image source={proofImage} style={styles.previewImage} />
                )}
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={submitPayment}
                    disabled={!proofImage}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
            <Navigation/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F5F6',
    },
    amountText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    formContainer: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    uploadButton: {
        backgroundColor: '#3498DB',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    submitButton: {
        backgroundColor: '#27AE60',
        padding: 10,
        borderRadius: 5,
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
