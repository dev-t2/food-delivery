import React, { memo, useCallback, useMemo, useRef, useState } from 'react';
import { TextInput } from 'react-native';

import { SignInScreenProps } from './index';
import { validateEmail, validatePassword } from '../../utilities/validate';
import { Container } from '../../components/layouts';
import { ContainedButton, TextButton, UnderlinedInput } from '../../components/inputs';

function SignIn({ navigation }: SignInScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef<TextInput>(null);

  const isDisabled = useMemo(() => {
    const isValidate = validateEmail(email) && validatePassword(password);

    return !isValidate;
  }, [email, password]);

  const onChangeEmail = useCallback((text: string) => {
    setEmail(text.trim());
  }, []);

  const onSubmitEmail = useCallback(() => {
    passwordRef.current?.focus();
  }, []);

  const onChangePassword = useCallback((text: string) => {
    setPassword(text.trim());
  }, []);

  const onSubmitPassword = useCallback(() => {
    if (!isDisabled) {
      console.log('onSignIn');
    }
  }, [isDisabled]);

  const onSignIn = useCallback(() => {
    console.log('onSignIn');
  }, []);

  const onSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return (
    <Container>
      <UnderlinedInput
        label="Email"
        placeholder="Please enter your email."
        autoComplete="email"
        textContentType="emailAddress"
        value={email}
        returnKeyType="next"
        isBlurOnSubmit={false}
        onChangeText={onChangeEmail}
        onSubmit={onSubmitEmail}
      />

      <UnderlinedInput
        underlinedInputRef={passwordRef}
        label="Password"
        placeholder="Please enter your password."
        autoComplete="password"
        textContentType="password"
        isSecureTextEntry
        value={password}
        returnKeyType="done"
        onChangeText={onChangePassword}
        onSubmit={onSubmitPassword}
      />

      <ContainedButton isDisabled={isDisabled} text="SignIn" onPress={onSignIn} />

      <TextButton text="SignUp" onPress={onSignUp} />
    </Container>
  );
}

export default memo(SignIn);
