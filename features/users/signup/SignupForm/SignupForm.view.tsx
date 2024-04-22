import Button from 'components/Button';
import Text from 'components/Text/Text';
import TextInput from 'components/TextInput';
import { StyleSheet, View } from 'react-native';
import { Controller } from 'react-hook-form';
import { SignupFormSchema, passwordRules } from './SignupForm.schema';
import { SignupFormProps } from './SignupForm';
import { Link } from 'expo-router';
import { colors } from '@utils/styles/colors';
import { typography } from '@utils/styles/typography';

export default function SignupForm({
  apiError,
  control,
  formErrors,
  handleSubmit,
  isLoading,
  isSubmitDisabled,
  signUp,
  watch,
}: SignupFormProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text variant='h3'>Sign Up</Text>
        <Text>
          Already have an account?{' '}
          <Link href='/login' style={styles.link}>
            Log in.
          </Link>
        </Text>
      </View>

      <View style={styles.inputsContainer}>
        <View style={styles.nameInputsContainer}>
          <Controller
            name='firstName'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value, name } }) => (
              <TextInput
                label='First name'
                placeholder='David'
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                error={formErrors?.[name]?.message}
                containerStyle={styles.nameInput}
              />
            )}
          />

          <Controller
            name='lastName'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value, name } }) => (
              <TextInput
                label='Last name'
                placeholder='Byrne'
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                error={formErrors?.[name]?.message}
                containerStyle={styles.nameInput}
              />
            )}
          />
        </View>

        <Controller
          name='email'
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value, name } }) => (
            <TextInput
              label='Email'
              placeholder='dbyrne@talkingheads.com'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={formErrors?.[name]?.message}
            />
          )}
        />

        <Controller
          name='password'
          control={control}
          rules={passwordRules}
          render={({ field: { onChange, onBlur, value, name } }) => (
            <TextInput
              label='Password'
              textContentType='password'
              placeholder='Enter password'
              secureTextEntry
              spellCheck={false}
              autoCapitalize='none'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={formErrors?.[name]?.message}
              helperText='Password must contain 8 characters, one uppercase, one lowercase, and one number'
            />
          )}
        />

        <Controller
          name='confirmPassword'
          control={control}
          rules={{
            ...passwordRules,
            validate: (val: string) => {
              if (watch('password') !== val) {
                return 'Passwords do not match.';
              }
            },
          }}
          render={({ field: { onChange, onBlur, value, name } }) => (
            <TextInput
              label='Confirm Password'
              textContentType='password'
              placeholder='Re-enter password'
              secureTextEntry
              spellCheck={false}
              autoCapitalize='none'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={formErrors?.[name]?.message}
            />
          )}
        />
      </View>

      <Button
        title='Sign Up'
        size='md'
        fullWidth
        onPress={handleSubmit(
          ({ confirmPassword, ...restOfData }: SignupFormSchema) =>
            signUp(restOfData),
        )}
        isLoading={isLoading}
        disabled={isSubmitDisabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    alignItems: 'flex-start',
    width: '100%',
  },
  link: {
    color: colors.blue[500],
    ...typography['body3Bold'],
  },
  inputsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    width: '100%',
  },
  nameInputsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  nameInput: {
    flexGrow: 1,
    flexBasis: 0,
  },
});
