import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { useAssets } from 'expo-asset';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Page = () => {
  const [assets] = useAssets([require('@/assets/videos/intro.mp4')]);

  return (
    <View style={styles.container}>
      {/* {false && (
        <Video
          resizeMode={ResizeMode.COVER}
          isMuted
          isLooping
          shouldPlay
          source={{ uri: assets[0].uri }}
          style={styles.video}
        />
      )} */}
      <View style={{ marginTop: 80, padding: 80 }}>
        <Text style={styles.header}>Seja Bem vindo ao App</Text>
      </View>

      <View style={styles.buttons}>
        <Link
          href={'/login'}
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: Colors.dark },
          ]}
          asChild
        >
          <TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 22, fontWeight: '500' }}>
              Log in
            </Text>
          </TouchableOpacity>
        </Link>
        <Link
          href={'/signup'}
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: '#fff' },
          ]}
          asChild
        >
          <TouchableOpacity>
            <Text style={{ fontSize: 22, fontWeight: '500' }}>Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 60,
    paddingHorizontal: 20,
  },
});
