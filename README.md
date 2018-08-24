# chess-pgn

## What
An interactive chessboard UI created with React.

## Why

This is a pet project to practice and improve my front-end development skills. Full story available on my blog [here](https://timotheeastier.wordpress.com/2018/08/23/pet-project-chessboard-ui-day-1/).

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
- [ ] Move pieces with drag-and-drop
- [ ] Chess logic (legal moves only)
- [ ] Game moves displayed in PGN format
- [ ] Button to move to previous / next move
- [ ] Go back to a previous position by clicking the PGN

## Development process
- Hand-made sketches
- UI Components developed in isolation with react-storybook
- TDD with unit testing (Jest)
- Keep CHANGELOG.md up-to-date with latest changes

## Testing

### Storybook
A story is a single state of one or more UI components.

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
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
