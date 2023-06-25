import { StyleSheet } from 'react-native';

const bodyRegularVariants = StyleSheet.create({
  // Regular body variants
  body1: {
    fontSize: 18,
    fontFamily: 'Barlow_400Regular',
    lineHeight: 28,
    letterSpacing: -0.25,
  },
  body2: {
    fontSize: 16,
    fontFamily: 'Barlow_400Regular',
    lineHeight: 24,
    letterSpacing: -0.25,
  },
  body3: {
    fontSize: 14,
    fontFamily: 'Barlow_400Regular',
    lineHeight: 20,
  },
  body4: {
    fontSize: 12,
    fontFamily: 'Barlow_400Regular',
    lineHeight: 16,
  },
  body5: {
    fontSize: 10,
    fontFamily: 'Barlow_400Regular',
    lineHeight: 12,
  },
});

const bodyBoldVariants = StyleSheet.create({
  body1Bold: {
    ...bodyRegularVariants.body1,
    fontFamily: 'Barlow_600SemiBold',
  },
  body2Bold: {
    ...bodyRegularVariants.body2,
    fontFamily: 'Barlow_600SemiBold',
  },
  body3Bold: {
    ...bodyRegularVariants.body3,
    fontFamily: 'Barlow_600SemiBold',
  },
  body4Bold: {
    ...bodyRegularVariants.body4,
    fontFamily: 'Barlow_600SemiBold',
  },
  body5Bold: {
    ...bodyRegularVariants.body5,
    fontFamily: 'Barlow_600SemiBold',
  },
});

export const typography = StyleSheet.create({
  // Heading variants
  h1: {
    fontSize: 40,
    fontFamily: 'Barlow_700Bold',
    fontWeight: '700',
    lineHeight: 48,
    letterSpacing: -1,
  },
  h2: {
    fontSize: 32,
    fontFamily: 'Barlow_700Bold',
    fontWeight: '700',
    lineHeight: 40,
    letterSpacing: -1,
  },
  h3: {
    fontSize: 24,
    fontFamily: 'Barlow_700Bold',
    fontWeight: '700',
    lineHeight: 36,
    letterSpacing: -0.5,
  },
  h4: {
    fontSize: 20,
    fontFamily: 'Barlow_700Bold',
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: -0.5,
  },
  ...bodyRegularVariants,
  ...bodyBoldVariants,
});
