/* eslint-disable no-console */
import { render } from 'ink';
import path from 'path';
import React from 'react';
import termImg from 'term-img';
import terminalImage from 'terminal-image';

import UI from './ui';

const fallback = async () => {
  const image = await terminalImage.file(path.join(__dirname, `icon.png`));
  console.log(image);
  render(<UI />);
};

termImg(path.join(__dirname, `icon.png`), { fallback });
