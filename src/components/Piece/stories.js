import React from 'react';
import { storiesOf } from '@storybook/react';
import DNDProvider from '../../utils/testComponents/DNDProvider';

import { Piece } from '../../containers';

storiesOf('Piece', module)
  .addDecorator(story => <DNDProvider story={story()} />)
  .add('white_pawn', () => <Piece type="p" color="w" squareIndex={0} />)
  .add('white_king', () => <Piece type="k" color="w" squareIndex={0} />)
  .add('white_queen', () => <Piece type="q" color="w" squareIndex={0} />)
  .add('white_bishop', () => <Piece type="b" color="w" squareIndex={0} />)
  .add('white_knight', () => <Piece type="n" color="w" squareIndex={0} />)
  .add('white_rook', () => <Piece type="r" color="w" squareIndex={0} />)
  .add('black_pawn', () => <Piece type="p" color="b" squareIndex={0} />)
  .add('black_king', () => <Piece type="k" color="b" squareIndex={0} />)
  .add('black_queen', () => <Piece type="q" color="b" squareIndex={0} />)
  .add('black_bishop', () => <Piece type="b" color="b" squareIndex={0} />)
  .add('black_knight', () => <Piece type="n" color="b" squareIndex={0} />)
  .add('black_rook', () => <Piece type="r" color="b" squareIndex={0} />);
