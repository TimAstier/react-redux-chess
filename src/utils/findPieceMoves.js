import positionToArrayOfPieces from './positionToArrayOfPieces';
import xyToIndex from './xyToIndex';
import { WHITE_PIECES, BLACK_PIECES } from '../constants';
import sortNestedArray from './sortNestedArray';

// Filters out XYs that are outside the board
const filterInvalidXYs = array => {
  return array.filter(XY => {
    return XY[0] >= 1 && XY[0] <= 8 && XY[1] >= 1 && XY[1] <= 8
  });
};

// Checks if a square is empty
const isSquareEmpty = (fen, XY) => {
  const arrayOfPieces = positionToArrayOfPieces(fen.position);
  return arrayOfPieces[xyToIndex(...XY)] === ' ';
}

// Checks if a square is occupied by an opponent piece
const isSquareOccupiedByOpponent = (fen, XY, pieceType) => {
  const arrayOfPieces = positionToArrayOfPieces(fen.position);
  if (WHITE_PIECES.includes(pieceType)) {
    return BLACK_PIECES.includes(arrayOfPieces[xyToIndex(...XY)]);
  }
  return WHITE_PIECES.includes(arrayOfPieces[xyToIndex(...XY)]);
}

// Checks if a square is occupied by a piece of the same color
const isSquareOccupiedByOwn = (fen, XY, pieceType) => {
  const arrayOfPieces = positionToArrayOfPieces(fen.position);
  if (WHITE_PIECES.includes(pieceType)) {
    return WHITE_PIECES.includes(arrayOfPieces[xyToIndex(...XY)]);
  }
  return BLACK_PIECES.includes(arrayOfPieces[xyToIndex(...XY)]);
}

const findKingMoves = (pieceType, XY, fen) => {
  const [x, y] = XY;
  const candidateMoves = [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y + 1],
    [x, y - 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1]
  ];
  const validMoves = candidateMoves.filter(XY => {
    return !isSquareOccupiedByOwn(fen, XY, pieceType);
  });
  return validMoves;
}

const findKnightMoves = (pieceType, XY, fen) => {
  const [x, y] = XY;
  const candidateMoves = [
    [x - 2, y - 1],
    [x - 2, y + 1],
    [x - 1, y - 2],
    [x - 1, y + 2],
    [x + 1, y - 2],
    [x + 1, y + 2],
    [x + 2, y - 1],
    [x + 2, y + 1]
  ];
  const validMoves = candidateMoves.filter(XY => {
    return !isSquareOccupiedByOwn(fen, XY, pieceType);
  });
  return validMoves;
}

const findPawnMoves = (pieceType, XY, fen) => {
  const [x, y] = XY;
  const validMoves = [];
  if (WHITE_PIECES.includes(pieceType)) {
    if (isSquareEmpty(fen, [x, y + 1])) {
      validMoves.push([x, y + 1]);
    }
    if (y === 2
      && isSquareEmpty(fen, [x, y + 1])
      && isSquareEmpty(fen, [x, y + 2])
    ) {
      validMoves.push([x, y + 2]);
    }
    if (isSquareOccupiedByOpponent(fen, [x + 1, y + 1], pieceType)) {
      validMoves.push([x + 1, y + 1]);
    }
    if (isSquareOccupiedByOpponent(fen, [x - 1, y + 1], pieceType)) {
      validMoves.push([x - 1, y + 1]);
    }
  } else {
    if (isSquareEmpty(fen, [x, y - 1])) {
      validMoves.push([x, y - 1]);
    }
    if (y === 7
      && isSquareEmpty(fen, [x, y - 1])
      && isSquareEmpty(fen, [x, y - 2])
    ) {
      validMoves.push([x, y - 2]);
    }
    if (isSquareOccupiedByOpponent(fen, [x - 1, y - 1], pieceType)) {
      validMoves.push([x - 1, y - 1]);
    }
    if (isSquareOccupiedByOpponent(fen, [x + 1, y - 1], pieceType)) {
      validMoves.push([x + 1, y - 1]);
    }
  }
  return validMoves;
}

const findRookMoves = (pieceType, XY, fen) => {
  const [x, y] = XY;
  const validMoves = [];
  for (let i = x; i < 8; i++) {
    if (!isSquareOccupiedByOwn(fen, [i + 1, y], pieceType)) {
      validMoves.push([i + 1, y]);
      if (isSquareEmpty(fen, [i + 1, y])) {
        continue;
      }
    }
    break;
  }
  for (let i = x; i > 0; i--) {
    if (!isSquareOccupiedByOwn(fen, [i - 1, y], pieceType)) {
      validMoves.push([i - 1, y]);
      if (isSquareEmpty(fen, [i - 1, y])) {
        continue;
      }
    }
    break;
  }
  for (let i = y; i < 8; i++) {
    if (!isSquareOccupiedByOwn(fen, [x, i + 1], pieceType)) {
      validMoves.push([x, i + 1]);
      if (isSquareEmpty(fen, [x, i + 1])) {
        continue;
      }
    }
    break;
  }
  for (let i = y; i > 0; i--) {
    if (!isSquareOccupiedByOwn(fen, [x, i - 1], pieceType)) {
      validMoves.push([x, i - 1]);
      if (isSquareEmpty(fen, [x, i - 1])) {
        continue;
      }
    }
    break;
  }
  return validMoves;
}

const findBishopMoves = (pieceType, XY, fen) => {
  const [x, y] = XY;
  const validMoves = [];
  // up-right diagonal
  for (let i = x; i < 8; i++) {
    if (!isSquareOccupiedByOwn(fen, [i + 1, y + (i - x) + 1], pieceType)) {
      validMoves.push([i + 1, y + (i - x) + 1]);
      if (isSquareEmpty(fen, [i + 1, y + (i - x) + 1])) {
        continue;
      }
    }
    break;
  }
  // down-right diagonal
  for (let i = x; i < 8; i++) {
    if (!isSquareOccupiedByOwn(fen, [i + 1, y - (i - x) - 1], pieceType)) {
      validMoves.push([i + 1, y - (i - x) - 1]);
      if (isSquareEmpty(fen, [i + 1, y - (i - x) - 1])) {
        continue;
      }
    }
    break;
  }
  // up-left diagonal
  for (let i = x; i > 0; i--) {
    if (!isSquareOccupiedByOwn(fen, [i - 1, y + (x - i) + 1], pieceType)) {
      validMoves.push([i - 1, y + (x - i) + 1]);
      if (isSquareEmpty(fen, [i - 1, y + (x - i) + 1])) {
        continue;
      }
    }
    break;
  }
  // down-left diagonal
  for (let i = x; i > 0; i--) {
    if (!isSquareOccupiedByOwn(fen, [i - 1, y - (x - i) - 1], pieceType)) {
      validMoves.push([i - 1, y - (x - i) - 1]);
      if (isSquareEmpty(fen, [i - 1, y - (x - i) - 1])) {
        continue;
      }
    }
    break;
  }
  return validMoves;
}

const findQueenMoves = (pieceType, XY, fen) => {
  const validMoves = [];
  const bishopMoves = findBishopMoves(pieceType, XY, fen);
  const rookMoves = findRookMoves(pieceType, XY, fen);
  return validMoves.concat(bishopMoves).concat(rookMoves);
}

const findPieceMoves = (pieceType, XY, fen) => {
  let pieceMoves;
  switch (pieceType) {
    case 'K':
    case 'k':
      pieceMoves = findKingMoves(pieceType, XY, fen);
      break;
    case 'Q':
    case 'q':
      pieceMoves = findQueenMoves(pieceType, XY, fen);
      break;
    case 'B':
    case 'b':
      pieceMoves = findBishopMoves(pieceType, XY, fen);
      break;
    case 'N':
    case 'n':
      pieceMoves = findKnightMoves(pieceType, XY, fen);
      break;
    case 'R':
    case 'r':
      pieceMoves = findRookMoves(pieceType, XY, fen);
      break;
    case 'P':
    case 'p':
      pieceMoves = findPawnMoves(pieceType, XY, fen);
      break;
    default: pieceMoves = [];
  }
  return sortNestedArray(filterInvalidXYs(pieceMoves));
};

export default findPieceMoves;
