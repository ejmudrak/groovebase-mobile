import Text from '@components/Text';
import { A } from '@expo/html-elements';

const linkStyle = { color: 'blue' };

export default function LegalMessage() {
  return (
    <>
      <Text>
        By signing in to this app, you agree with the Groovebase{' '}
        <A
          href='https://docs.google.com/document/d/e/2PACX-1vQOINvg4E66ZNK6FkO9HDgc8u0apQSHEzl5MmkQb5DWyOdBczFpgYY-IMRlX73u_tK4lhk-3-Mi111e/pub'
          target='_blank'
          rel='noreferrer'
          style={linkStyle}
        >
          Terms of Use
        </A>{' '}
        and{' '}
        <A
          href='https://docs.google.com/document/d/e/2PACX-1vRj1o6P0MEQetajW2gVySOkTgb0CGoDWrm9g6K4lYao-AjnydyOPQBP42W9gFOwItXQZ7s3UXNzb2yo/pub'
          target='_blank'
          rel='noreferrer'
          style={linkStyle}
        >
          Privacy Policy
        </A>
      </Text>
    </>
  );
}
