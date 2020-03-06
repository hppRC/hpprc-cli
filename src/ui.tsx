import { Box, Color, Text } from 'ink';
import SelectInput from 'ink-select-input';
import open from 'open';
import React from 'react';

// rollupの問題でimportすると動かないことに注意
const BigText = require('ink-big-text');
const openURL = (url: string) => open(url, { wait: false });

const items = [
  {
    label: 'HP',
    value: 'https://hpprc.com'
  },
  {
    label: 'Twitter',
    value: 'https://twitter.com/hpp_ricecake'
  },
  {
    label: 'GitHub',
    value: 'https://github.com/hppRC'
  },
  {
    label: 'Qiita',
    value: 'https://qiita.com/hppRC'
  },
  {
    label: 'Blog',
    value: 'https://blog.hpprc.com'
  },
  {
    label: 'Quit',
    value: 'quit'
  }
];

const actions = (item: { key?: string | number; value?: string | number }) => {
  const { key, value } = item;
  if (key !== 'Quit' && typeof value === 'string') {
    openURL(value);
  }
  process.exit();
};

const ItemView = ({ label, isSelected }: any) => (
  <Color rgb={isSelected ? [0, 128, 255] : [255, 255, 255]}>
    <Text bold={isSelected}>{label}</Text>
  </Color>
);

export default () => (
  <Box flexDirection='column'>
    <Box>
      <Color hex='#ffffff'>
        <BigText text='hpprc' />
      </Color>
    </Box>
    <Box>
      <SelectInput items={items} onSelect={item => actions(item)} itemComponent={ItemView} />
    </Box>
  </Box>
);
