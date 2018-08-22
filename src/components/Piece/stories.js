import React from 'react';
import { storiesOf } from '@storybook/react';

import { Piece } from '..';

storiesOf('Piece', module)
  .add('white_pawn', () => <Piece type="pawn" color="white" />)
  .add('white_king', () => <Piece type="king" color="white" />)
  .add('white_queen', () => <Piece type="queen" color="white" />)
  .add('white_bishop', () => <Piece type="bishop" color="white" />)
  .add('white_knight', () => <Piece type="knight" color="white" />)
  .add('white_rook', () => <Piece type="rook" color="white" />)
  .add('black_pawn', () => <Piece type="pawn" color="black" />)
  .add('black_king', () => <Piece type="king" color="black" />)
  .add('black_queen', () => <Piece type="queen" color="black" />)
  .add('black_bishop', () => <Piece type="bishop" color="black" />)
  .add('black_knight', () => <Piece type="knight" color="black" />)
  .add('black_rook', () => <Piece type="rook" color="black" />);
