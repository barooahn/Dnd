import DAndDStepper from '../components/stepper/DAndDStepper'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useState, useEffect } from 'react'

//https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/
//https://react-dnd.github.io/react-dnd/docs/api/hooks-overview
// https://codesandbox.io/s/relaxed-marco-csb19m?file=/src/Dustbin.jsx

export default function IndexPage() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DAndDStepper />
    </DndProvider>
  )
}
