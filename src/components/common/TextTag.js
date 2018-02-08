import React from 'react';
import {
  Text,
} from 'react-native-elements';

const TextTag = (props) => {
  const { style, ...rest } = props;

  return (
    <Text style={[style, { marginLeft: 15, marginRight: 15}]} {...rest}>
      { props.children }
    </Text>
  );
};

export { TextTag };
