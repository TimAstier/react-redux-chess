import React from 'react';
import { storiesOf } from '@storybook/react';

import { Piece } from '..';

storiesOf('Piece', module)
  .add('white_pawn', () => <Piece type="p" color="w" />)
  .add('white_king', () => <Piece type="k" color="w" />)
  .add('white_queen', () => <Piece type="q" color="w" />)
  .add('white_bishop', () => <Piece type="b" color="w" />)
  .add('white_knight', () => <Piece type="n" color="w" />)
  .add('white_rook', () => <Piece type="r" color="w" />)
  .add('black_pawn', () => <Piece type="p" color="b" />)
  .add('black_king', () => <Piece type="k" color="b" />)
  .add('black_queen', () => <Piece type="q" color="b" />)
  .add('black_bishop', () => <Piece type="b" color="b" />)
  .add('black_knight', () => <Piece type="n" color="b" />)
  .add('black_rook', () => <Piece type="r" color="b" />);
