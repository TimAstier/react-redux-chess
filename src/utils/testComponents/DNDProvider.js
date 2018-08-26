import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Provider from './Provider';

const DNDProvider = DragDropContext(HTML5Backend)(Provider);

export default DNDProvider
