import React from 'react';
import { Screen } from '@shoutem/ui';

const PaddedScreen = (props) => {
  return (
    <Screen style={{ padding: 10, backgroundColor: '#00e640' }}>{props.children}</Screen>
  );
}

export { PaddedScreen };
