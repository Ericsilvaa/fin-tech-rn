import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const signup = () => {
  const [countryCode, setCountryCode] = useState('+55');
  const [phoneNumber, setPhoneNumber] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
  const router = useRouter();
  // const { signUp } = useSignUp();

  const onSignup = async () => {
    const fullPhoneNumber = `${countryCode}${phoneNumber}`;

    // try {
    //   await signUp!.create({
    //     phoneNumber: fullPhoneNumber,
    //   });
    //   signUp!.preparePhoneNumberVerification();

    //   router.push({
    //     pathname: '/verify/[phone]',
    //     params: { phone: fullPhoneNumber },
    //   });
    // } catch (error) {
    //   console.error('Error signing up:', error);
    // }
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Vamos Começar!</Text>
        <Text style={defaultStyles.descriptionText}>
          Entre com seu numero. Nós vamos enviar seu codigo de confirmação lá.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              backgroundColor: Colors.lightGray,
              borderRadius: 16,
              textAlign: 'center',
            }}
            placeholder="Country code"
            placeholderTextColor={Colors.gray}
            value={countryCode}
          />

          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Mobile number"
            placeholderTextColor={Colors.gray}
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <Link href={'/login'} replace asChild>
          <TouchableOpacity>
            <Text style={defaultStyles.textLink}>Já tem uma conta? </Text>
          </TouchableOpacity>
        </Link>

        {/* Quem faz criar o espaço em branco */}
        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== '' ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={onSignup}
        >
          <Text style={defaultStyles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default signup;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    gap: 10,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
