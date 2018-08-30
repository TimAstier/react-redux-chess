# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).


*Version Template below*

---
## [X.X.X] YYYY-MM-DD

### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security
---

## [0.0.21] 2018-08-30

### Added
- CI with Travis

## [0.0.2] 2018-08-29

### Added
- Basic piece move validation
- Active color indicator
### Fixed
- Wrong next position calculated when moving piece from square index 63

## [0.0.15] 2018-08-28

### Added
- First implementation of move validation
### Changed
- Squares hovered by a piece are now highlighted
### Fixed
- Wrong piece drag preview after a capture occurred

## [0.0.14] 2018-08-26

### Added
- Installed libraries:
  - react-dnd
  - react-dnd-html5-backend
- Added first implementation of move via DnD
### Changed
- Updated stories to with react-dnd-html5-backend

## [0.0.13] 2018-08-25

### Added
- handle MOVE action

## [0.0.12] 2018-08-24

### Added
- Installed libraries:
  - redux
  - react-redux
  - immutable
  - redux-immutable
  - redux-devtools-extension
  - reselect
- Set up redux
- Set up redux dev-tools
- Separated components between 'components' and 'containers'
- Added a 'redux' folder with first duck (game)
- Added a arrayOfPiecesToPosition() util function
- Added tests for util functions
- Started tests for game duck

## [0.0.11] 2018-08-23

### Added
- Added *Game* component

## [0.0.1] 2018-08-22

### Added
- Initiated project with create-react-app
- Added content for changelog, readme, license files
- Set up Storybook and ESLint
- Added first components: *Square*, *Board*, *Piece*
- Added PNG images for the pieces
