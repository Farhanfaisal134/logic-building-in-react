import React, { Suspense } from 'react'
import DynamicForm from "./components/DynamicForm"
import SearchableTable from "./components/SearchableTable"
import CricketScore from "./components/CricketScore"
import DynamicData from './components/DynamicData';
import ParentComponent from './components/ParentComponent';
import MethodCallPrentToChild from './components/MethodCallPrentToChild';
import AccessDOM from './components/AccessDOM';
import Navbar from "./components/Navbar"
import Dropdown from './components/Dropdown';
import DisplayUserInput from './components/DisplayUserInput';
import LoopArray from "./components/LoopArray"
import LoopArrayObjects from './components/LoopArrayObjects';
import ConditionalRendering from './components/ConditionalRendering';
import ConditionalStyles from './components/ConditionalStyles';
import ShowHideData from "./components/ShowHideData"
import RadioButtons from "./components/RadioButtons"
import DisplaySelectedRadio from './components/DisplaySelectedRadio';
import FirstRenderMethod from './components/FirstRenderMethod';
import DisplayObjectKeysValues from "./components/DisplayObjectKeysValues"
import ReRenderOnChange from "./components/ReRenderOnChange"
import CallOnEveryRerender from './components/CallOnEveryRerender';
import AddToArray from './components/AddToArray';
import SearchFilter from './components/SearchFilter';
import Counter from './components/Counter';
import CounterWithReducer from './components/counterReducer';
import Parent from './components/Parent';
import DebouncedSearch from './components/DebouncedSearch';
import FetchDataComponent from './components/FetchDataComponent';
import ForceRender from './components/ForceRender';
import CharacterCounter from './components/CharacterCounter';
import HandleCountryChange from './components/handleCountryChange';
import Greeting from './components/Greeting';
import Parents from './components/Parents';
import ExpensiveCalculation from './components/ExpensiveCalculation';
import UseCallbackExample from './components/UseCallbackExample';
import DropdownTextbox from './components/DropdownTextbox';
import ControlledInput from './components/ControlledInput';
import UncontrolledInput from './components/UncontrolledInput';
import DigitalClock from './components/DigitalClock';
import CheckBoxes from './components/CheckBoxes';
import Notifications from './components/Notifications';
const LazyComponent = React.lazy(() => import("./components/MyComponent"))

const App = () => {
  return (
    <div>
      {/* Q=> 1 */}
      {/* <DynamicData /> */}
      {/* Q=> 2 */}
      {/* <ParentComponent /> */}
      {/* Q=> 3 */}
      {/* <MethodCallPrentToChild /> */}
      {/* Q=> 4 */}
      {/* <AccessDOM /> */}
      {/* Q=> 5 */}
      {/* <Dropdown /> */}
      {/* Q=> 6 */}
      {/* <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense> */}
      {/* Q=> 7 */}
      {/* <DisplayUserInput /> */}
      {/* Q=> 8 */}
      {/* <LoopArrayObjects /> */}
      {/* Q=> 9 */}
      {/* <ConditionalRendering /> */}
      {/* Q=> 10 */}
      {/* <ConditionalStyles /> */}
      {/* Q=> 11 */}
      {/* <ShowHideData /> */}
      {/* Q=> 12 */}
      {/* <RadioButtons /> */}
      {/* Q=> 13 */}
      {/* <DisplaySelectedRadio /> */}
      {/* Q=> 14 */}
      {/* <FirstRenderMethod /> */}
      {/* Q=> 15 */}
      {/* <DisplayObjectKeysValues /> */}
      {/* Q=> 16 */}
      {/* <ReRenderOnChange /> */}
      {/* Q=> 17 */}
      {/* <CallOnEveryRerender /> */}
      {/* Q=> 18 */}
      {/* <AddToArray /> */}
      {/* Q=> 19 */}
      {/* <SearchFilter /> */}
      {/* Q=> 20 */}
      {/* <Counter /> */}
      {/* Q=> 21 */}
      {/* <CounterWithReducer /> */}
      {/* Q=> 22 */}
      {/* <Parent /> */}
      {/* Q=> 23 */}
      {/* <DebouncedSearch /> */}
      {/* Q=> 24 */}
      {/* <FetchDataComponent /> */}
      {/* Q=> 25 */}
      {/* <ForceRender /> */}
      {/* Q=> 26 */}
      {/* <StateUpdateEffect /> */}
      {/* Q=> 27 */}
      {/* <CharacterCounter /> */}
      {/* Q=> 28 */}
      {/* <HandleCountryChange /> */}
      {/* Q=> 29 */}
      {/* <Greeting name='Farhan' age={25} /> */}
      {/* Q=> 30 */}
      {/* <Parents /> */}
      {/* Q=> 31 */}
      {/* <ExpensiveCalculation /> */}
      {/* Q=> 32 */}
      {/* <UseCallbackExample /> */}
      {/* Q=> 33 */}
      {/* <CheckBoxes /> */}
      {/* Q=> 34 */}
      {/* <DropdownTextbox /> */}
      {/* Q=> 35 */}
      {/* <DigitalClock /> */}
      {/* Q=> 36 */}
      {/* <ControlledInput />
      <UncontrolledInput /> */}
      {/* Q=> 37 */}
      {/* <Notifications /> */}
      {/* Q=> 38 */}
      {/* Q=> 39 */}
      {/* Q=> 40 */}
      {/* Q=> 41 */}
      {/* Q=> 42 */}
      {/* <DynamicForm /> */}
      {/* Q=> 43 */}
      {/* <SearchableTable /> */}
      {/* Q=> 44 */}
      {/* <CricketScore /> */}
    </div>
  )
};

export default App;