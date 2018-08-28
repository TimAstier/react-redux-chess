# chess-pgn

## What
An interactive chessboard UI created with React and Redux.

## Why

This is a pet project to practice and improve my front-end development skills.  
Full story available on my [blog](https://timotheeastier.wordpress.com/2018/08/23/pet-project-chessboard-ui-day-1/).

## Install

```
$ git clone https://github.com/TimAstier/chess-pgn
$ cd chess-pgn
$ npm install
```

## TODO
- [X] Chessboard UI
- [X] Pieces
- [X] Initialise board with pieces
- [X] Set up Redux
- [X] Improve app structure
- [X] Move pieces with drag-and-drop
- [ ] Show the active color
- [ ] Implement chess rules
  - [X] Should not be able to move to current square
  - [ ] Can only move pieces with active color
  - [ ] Restrict move possibilities based on piece type
    - [ ] rook
    - [ ] knight
    - [ ] bishop
    - [ ] queen
    - [ ] king
    - [ ] pawn
  - [ ] Pieces can't jump above other pieces (except knights)
  - [ ] Castling
  - [ ] Checkmate
- [ ] Start a new game
- [ ] Move to previous / next move
- [ ] Highlight last move
- [ ] Game moves displayed in PGN format
- [ ] Go back to a previous position by clicking the PGN

## Development process
- Hand-made sketches
- UI presentational components developed in isolation with [Storybook](https://github.com/storybooks/storybook)
- TDD with unit testing ([Jest](https://jestjs.io/))
- All changes in CHANGELOG.md

## Testing

### Storybook
```
$ npm run storybook
```
Then visit http://localhost:9009/

### Unit tests
```
$ npm run test
```

### ESLint (eslint-config-react-app)
```
$ npn run lint
```

## Built with
- [react](https://reactjs.org/) - a JavaScript library for building user interfaces
- [react-dnd](http://react-dnd.github.io/react-dnd/) - Drag and Drop for React
- [redux](https://redux.js.org/) - a predictable state container for JavaScript apps
- [reselect](https://github.com/reduxjs/reselect) - selector library for Redux
- [Immutable](https://facebook.github.io/immutable-js/) - immutable JavaScript objects
- [styled-components](https://www.styled-components.com/) - a convenient way to style components with CSS
- [storybook](https://storybook.js.org/) - an UI development environment
- [jest](https://jestjs.io/) - zero configuration testing platform for JavaScript

PNG files of chess pieces are from [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:PNG_chess_pieces/Standard_transparent).
## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
