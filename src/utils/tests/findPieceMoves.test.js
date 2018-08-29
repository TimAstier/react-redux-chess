import findPieceMoves from '../findPieceMoves';
import { INITIAL_STATE } from '../../redux/game';

describe('findPieceMoves', () => {
  
  describe('king', () => {
    const fen = INITIAL_STATE.toJS();
    it('cannot move through own color pieces', () => {
      expect(findPieceMoves('K', [5, 1], INITIAL_STATE.toJS()))
        .toEqual([]);
    });
    it('can move one square in every direction', () => {
      fen.position = 'rnbqkbnr/pppppppp/8/8/8/4K3/PPPPPPPP/RNBQ1BNR';
      expect(findPieceMoves('K', [5, 3], fen))
        .toEqual([[4, 3], [4, 4], [5, 4], [6, 3], [6, 4]]);
    });
    it('can capture an opponent piece', () => {
      fen.position = 'rnbqkb1r/pppppppp/8/8/4n3/4K3/PPPPPPPP/RNBQ1BNR';
      expect(findPieceMoves('K', [5, 3], fen))
      .toEqual([[4, 3], [4, 4], [5, 4], [6, 3], [6, 4]]);
    });
  });
  
  describe('knight', () => {
    it('can move following an "L-shaped" pattern', () => {
      expect(findPieceMoves('n', [3, 8], INITIAL_STATE.toJS()))
      .toEqual([[2, 6], [4, 6]]);
    });
  });
  
  describe('pawn', () => {
    describe('white', () => {
      it('can move one square forward (up)', () => {
        const fen = INITIAL_STATE.toJS();
        fen.position = 'rnbqkbnr/pppppppp/8/8/8/7P/PPPPPPP1/RNBQKBNR'
        expect(findPieceMoves('P', [8, 3], INITIAL_STATE.toJS()))
        .toEqual([[8, 4]]);
      });
      it('cannot move forward if the square is occupied', () => {
        const fen = INITIAL_STATE.toJS();
        fen.position = 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR'
        expect(findPieceMoves('P', [5, 4], fen))
        .toEqual([]);
      });
      it('can capture moving in diagonal', () => {
        const fen = INITIAL_STATE.toJS();
        fen.position = 'rnbqkbnr/ppp3pp/8/3ppp2/3PP3/8/PPP2PPP/RNBQKBNR'
        expect(findPieceMoves('P', [5, 4], fen))
        .toEqual([[4, 5], [6, 5]]);
      });
      it('can move two squares forward (up) if has not moved yet', () => {
        expect(findPieceMoves('P', [5, 2], INITIAL_STATE.toJS()))
        .toEqual([[5, 3], [5, 4]]);
      });
    });
    describe('black', () => {
      it('can move one square forward (down)', () => {
        const fen = INITIAL_STATE.toJS();
        fen.position = 'rnbqkbnr/1ppppppp/p/8/4P3/8/PPPP1PPP/RNBQKBNR'
        expect(findPieceMoves('p', [1, 6], fen))
        .toEqual([[1, 5]]);
      });
      it('cannot move forward if the square is occupied', () => {
        const fen = INITIAL_STATE.toJS();
        fen.position = 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR'
        expect(findPieceMoves('p', [5, 5], fen))
        .toEqual([]);
      });
      it('can move two squares forward (down) if has not moved yet', () => {
        const fen = INITIAL_STATE.toJS();
        fen.position = 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR'
        expect(findPieceMoves('p', [5, 7], fen))
        .toEqual([[5, 5], [5, 6]]);
      });
    });
  });
  
  describe('rook', () => {
    it('can move any number of squares on raw or columns', () => {
      const fen = INITIAL_STATE.toJS();
      fen.position = '4n3/4N3/8/8/8/4R1P1/4p3/8';
      expect(findPieceMoves('R', [5, 3], fen))
      .toEqual([
        [1, 3], [2, 3], [3, 3], [4, 3],
        [5, 2], [5, 4], [5, 5], [5, 6], [6, 3]
      ]);
    });
    it('cannot move in the initial position', () => {
      expect(findPieceMoves('R', [8, 1], INITIAL_STATE.toJS()))
      .toEqual([]);
    });
  });
  
  describe('bishop', () => {
    it('can move any number of squares on diagonals', () => {
      const fen = INITIAL_STATE.toJS();
      fen.position = 'P7/7p/8/8/4B3/8/6P1/8';
      expect(findPieceMoves('B', [5, 4], fen))
      .toEqual([
        [2, 1], [2, 7], [3, 2], [3, 6],
        [4, 3], [4, 5], [6, 3], [6, 5], [7, 6], [8, 7]
      ]);
    });
  });
  
  describe('queen', () => {
    it('has the ability of both a rook and a bishop', () => {
      const fen = INITIAL_STATE.toJS();
      fen.position = 'P7/7p/4P3/8/3pQ3/3pP3/6P1/8';
      expect(findPieceMoves('Q', [5, 4], fen))
      .toEqual([
        [2, 7], [3, 6], [4, 3], [4, 4], [4, 5], [5, 5],
        [6, 3], [6, 4], [6, 5], [7, 4], [7, 6], [8, 4], [8, 7]
      ]);
    });
  });
  
});
