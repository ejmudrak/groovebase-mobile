import Page from '@components/Page';
import SpinningVinyl from '@components/SpinningVinyl';
import Text from '@components/Text';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { colors } from '@utils/styles/colors';
import { Slot } from 'expo-router';

export default function AuthLayout() {
  return (
    <Page>
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.header}>
            <Text variant='h1' color={colors.blue[500]}>
              Welcome to Groovebase
            </Text>

            <Text variant='body1Bold' color={colors.black[400]}>
              The vinyl collecting hub
            </Text>
          </View>
        </SafeAreaView>

        <ScrollView directionalLockEnabled>
          <Slot />
        </ScrollView>
      </View>

      <SpinningVinyl color='green' style={styles.vinyl} />
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 24,
    padding: 24,
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    zIndex: 2,
  },

  vinyl: {
    width: 400,
    height: 400,
    position: 'absolute',
    right: -200,
    top: 64,
    zIndex: -1,
  },
});
