/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'

// import { CallbackHook } from './06-memos/CallbackHook'
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { FormWithCustomHook }  from './02-useEffect/FormWithCustomHook'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { HooksApp } from './HooksApp.jsx'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { MemoHook } from './06-memos/MemoHook'
// import { Memorize } from './06-memos/Memorize'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { Padre } from './07-tarea-memo/Padre'
// import { SimpleForm  from './02-useEffect/SimpleForm'
// import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <TodoApp/>
)


{/* <React.StrictMode> */}
    {/* <HooksApp /> */}
    {/* <CounterApp/> */}
    {/* <CounterWithCustomHook/> */}
    {/* <SimpleForm/> */}
    {/* <FormWithCustomHook/> */}
    {/* <MultipleCustomHooks/> */}
    {/* <FocusScreen/> */}
    {/* <Layout/> */}
    {/* <Memorize/> */}
    {/* <MemoHook/> */}
    {/* <CallbackHook/> */}
    {/*<Padre/> */}
  {/* </React.StrictMode>, */}