/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-indent */
import { Letter } from './Letter';
import { LetterA } from './letters/LetterA';
import { LetterE } from './letters/LetterE';
import { LetterO } from './letters/LetterO';
import { LetterP } from './letters/LetterP';
import { Letters } from './Letters';
import { LetterT } from './letters/LetterT';
import React, { FunctionComponent, ReactElement } from 'react';

const Headline: FunctionComponent = function (): ReactElement {
  return (
    <Letters>
      <Letter animationDelay={ 1 }>
        <LetterT />
      </Letter>
      <Letter animationDelay={ 2 }>
        <LetterE />
      </Letter>
      <Letter animationDelay={ 3 }>
        <LetterA />
      </Letter>
      <Letter animationDelay={ 4 }>
        <LetterP />
      </Letter>
      <Letter animationDelay={ 5 }>
        <LetterO />
      </Letter>
      <Letter animationDelay={ 6 }>
        <LetterT />
      </Letter>
    </Letters>
  );
};

export {
  Headline
};
