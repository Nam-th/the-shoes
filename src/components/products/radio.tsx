'use client'

import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

// const options = [
//   { label: 'Blue', value: 'Blue' },
//   { label: 'Green', value: 'Green' },
//   { label: 'Orange', value: 'Orange',  },
// ];

interface RadioInputProps {
     options: { label: string; value: string }[];
}

const RadioInput: React.FC<RadioInputProps> = ({ options}) => {
  const [value, setValue] = useState(options[0].value);

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setValue(value);
  };

  return (
    <>
      <Radio.Group
        options={options}
        onChange={onChange}
        value={value}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  );
};

export default RadioInput;