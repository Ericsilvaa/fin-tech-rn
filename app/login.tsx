import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { isClerkAPIResponseError, useSignIn } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

enum SignInType {
  Phone,
  Email,
  Google,
  Apple,
}

const LoginPage = () => {
  const [countryCode, setCountryCode] = useState('+55');
  const [phoneNumber, setPhoneNumber] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
  const router = useRouter();
  const { signIn } = useSignIn();

  const onSignIn = async (type: SignInType) => {
    if (type === SignInType.Phone) {
      try {
        const fullPhoneNumber = `${countryCode}${phoneNumber}`;

        const { supportedFirstFactors } = await signIn!.create({
          identifier: fullPhoneNumber,
        });

        const firstPhoneFactor: any = supportedFirstFactors.find(
          (factor: any) => {
            return factor.strategy === 'phone_code';
          },
        );

        const { phoneNumberId } = firstPhoneFactor;

        await signIn!.prepareFirstFactor({
          strategy: 'phone_code',
          phoneNumberId,
        });

        router.push({
          pathname: '/verify/[phone]',
          params: { phone: fullPhoneNumber, signin: 'true' },
        });
      } catch (err) {
        console.log('error', JSON.stringify(err, null, 2));
        if (isClerkAPIResponseError(err)) {
          if (err.errors[0].code === 'form_identifier_not_found') {
            Alert.alert('Error', err.errors[0].message);
          }
        }
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Bem vindo de Volta</Text>
        <Text style={defaultStyles.descriptionText}>
          Entre com o numero associado a sua conta.
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={countryCode}
            placeholderTextColor={Colors.gray}
            value={countryCode}
            onChangeText={setCountryCode}
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

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== '' ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={() => onSignIn(SignInType.Phone)}
        >
          <Text style={defaultStyles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        {/* make a component => dividor */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: Colors.gray,
            }}
          />
          <Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: Colors.gray,
            }}
          />
        </View>
        {/* another ways to login */}
        <>
          <TouchableOpacity
            onPress={() => onSignIn(SignInType.Email)}
            style={[
              defaultStyles.pillButton,
              {
                flexDirection: 'row',
                gap: 16,
                marginTop: 20,
                backgroundColor: '#fff',
              },
            ]}
          >
            <Ionicons name="mail" size={24} color={'#000'} />
            <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
              Continue with email{' '}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onSignIn(SignInType.Google)}
            style={[
              defaultStyles.pillButton,
              {
                flexDirection: 'row',
                gap: 16,
                marginTop: 20,
                backgroundColor: '#fff',
              },
            ]}
          >
            <Ionicons name="logo-google" size={24} color={'#000'} />
            <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
              Continue with email{' '}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onSignIn(SignInType.Apple)}
            style={[
              defaultStyles.pillButton,
              {
                flexDirection: 'row',
                gap: 16,
                marginTop: 20,
                backgroundColor: '#fff',
              },
            ]}
          >
            <Ionicons name="logo-apple" size={24} color={'#000'} />
            <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
              Continue with email{' '}
            </Text>
          </TouchableOpacity>
        </>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginPage;

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
