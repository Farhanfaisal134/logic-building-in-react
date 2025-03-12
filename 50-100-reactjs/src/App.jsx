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
import NesteadCircles from './components/NesteadCircles';
import TypeWriter from './components/TypeWriter';
import VirtualizedList from './components/VirtualizedList';
import StopWatch from "./components/StopWatch"
import FixedHeader from './components/FixedHeader';
import InfiniteHorizantalScroll from './components/InfiniteHorizantalScroll';
import CountDownTimer from './components/CountDownTimer';
import ToggleSwitchButton from './components/ToggleSwitchButton';
import Calculator from './components/Calculator';
import GetRandomCircles from './components/GetRandomCircles';
import StateUpdateEffect from "./components/StateUpdateEffect"
import Tooltip from './components/Tooltip';
import CourseFilter from './components/CourseFilter';
import MouseTracker from './components/MouseTracker';
import Chessboard from './components/Chessboard';
import CheckBoxExample from './components/CheckBoxExample';
import RadioButtonExample from './components/RadioButtonExample';
import StartRating from './components/StartRating';
import Accordian from './components/Accordian';
import ImageCarousel from './components/ImageCarosal';
import InfiniteScroll from './components/InfiniteScroll';
import LoadMoreData from './components/LoadMoreData';
import ScrollIndicator from './components/ScrollIndicator';
import ClickTabs from './components/ClickTabs';
import OutsideClick from './components/OutsideClick';
import WindowResize from './components/WindowResize';
import ScrollTopToBottom from './components/ScrollTopToBottom';
import RandomColorGen from './components/RandomColorGen';
import TraficLights from './components/TraficLights';
import Throttling from './components/Tharotling';
import DragBox from './components/DragBox';
import IntractiveShapes from './components/IntractiveShapes';
import MemoryGame from './components/MemoryGame';
import Otp from './components/Otp';
import ClickCounter from './components/ClickCounter';
import BlogExcerpt from './components/BlogExcerpt';
import SelectibleGrid from './components/SelectibleGrid';
import TransferList from './components/TransferList';
import UndoRedo from './components/UndoRedo';
import DataSorting from './components/DataSorting';
import JobBoard from './components/JobBoard';
import QuizApp from './components/QuizApp';
import DebounceApiCall from './components/DebounceApiCall';
import Toast from './components/Toast';
import DragAndDrop from './components/DragAndDrop';
import CustomProgressBar from './components/CustomProgressBar';
import MusicPlayer from './components/MusicPlayer';
import TipCalculator from './components/TipCalculator';
import FilterProducts from './components/FilterProducts';
import CurrencyConvertor from './components/CurrencyConvertor';
import SimpleFormHandle from './components/SimpleFormHandle';
import StepProgressBar from './components/StepProgressBar';
import TicTocToe from './components/TicTocToe';
import SearchAutoCom from './components/SearchAutoCom';
import PasswordGenrator from './components/PasswordGenrator';
import Pagination from './components/Pagination';
import TreeLikeStr from './components/TreeLikeStr';
import ModalPopup from './components/ModalPopup';
import Todo from './components/Todo';
import FoodRecipe from './components/FoodRecipe';
import NotesApp from './components/NotesApp';
import ExpenseTraker from './components/ExpenseTraket';
import MealsApp from './components/MealsApp';
import MealApp from './components/MealsApp';
import InfiniteCounterApp from './components/InfiniteCounterApp';
import MultiPrograssBar from './components/MultiPrograssBar';
import InputPlaceholderAnimation from './components/InputPlaceholderAnimation';
const LazyComponent = React.lazy(() => import("./components/MyComponent"))

// TechdevGuru
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
      {/* <Navbar /> */}
      {/* <Suspense fallback={<h1>Loading...</h1>}>
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
      {/* Q=> 13 Render Props ek pattern hai jo components ke beech logic share karne ke liye use hota hai */}
      {/* <MouseTracker
        render={(pos) => (
          <h1>
            Mouse Position: {pos.x}, {pos.y}
          </h1>
        )}
      /> */}
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
      {/* <InfiniteCounterApp /> */}
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
      {/* <ControlledInput /> */}
      {/* <UncontrolledInput /> */}
      {/* Q=> 37 */}
      {/* <Notifications /> */}
      {/* Q=> 38 */}
      {/* <NesteadCircles /> */}
      {/* Q=> 39 */}
      {/* <TypeWriter /> */}
      {/* Q=> 40 */}
      {/* <VirtualizedList /> */}
      {/* Q=> 41 */}
      {/* <StopWatch /> */}
      {/* Q=> 42 */}
      {/* <Parent /> */}
      {/* Q=> 43 */}
      {/* <SearchableTable /> */}
      {/* Q=> 44 */}
      {/* <CricketScore /> */}
      {/* Q=> 45 */}
      {/* <FixedHeader /> */}
      {/* Q=> 46 */}
      {/* <InfiniteHorizantalScroll /> */}
      {/* Q=> 47 */}
      {/* <CountDownTimer /> */}
      {/* Q=> 48 */}
      {/* <ToggleSwitchButton /> */}
      {/* Q=> 49 */}
      {/* <Calculator /> */}
      {/* Q=> 50 */}
      {/* <GetRandomCircles /> */}
      {/* Q=> 51 */}
      {/* <Tooltip /> */}
      {/* Q=> 52 */}
      {/* <CourseFilter /> */}
      {/* Q=> 53 */}
      {/* <Chessboard /> */}
      {/* Q=> 54 */}
      {/* <CheckBoxExample /> */}
      {/* Q=> 55 */}
      {/* <RadioButtonExample /> */}
      {/* Q=> 56 */}
      {/* <StartRating /> */}
      {/* Q=> 57 */}
      {/* <Accordian /> */}
      {/* Q=> 58 */}
      {/* <ImageCarousel /> */}
      {/* Q=> 59 */}
      {/* <InfiniteScroll /> */}
      {/* Q=> 60 */}
      {/* <LoadMoreData /> */}
      {/* Q=> 61 */}
      {/* <ScrollIndicator /> */}
      {/* Q=> 62 */}
      {/* <ClickTabs /> */}
      {/* Q=> 63 */}
      {/* <OutsideClick /> */}
      {/* Q=> 64 */}
      {/* <WindowResize /> */}
      {/* Q=> 65 */}
      {/* <ScrollTopToBottom /> */}
      {/* Q=> 66 */}
      {/* <RandomColorGen /> */}
      {/* Q=> 67 */}
      {/* <TraficLights /> */}
      {/* Q=> 68 */}
      {/* <Throttling /> */}
      {/* Q=> 69 */}
      <DragBox />
      {/* Q=> 70 */}
      {/* <IntractiveShapes /> */}
      {/* Q=> 71 */}
      {/* <MemoryGame /> */}
      {/* Q=> 72 */}
      {/* <Otp /> */}
      {/* Q=> 73 */}
      {/* <ClickCounter /> */}
      {/* Q=> 74 */}
      {/* <BlogExcerpt /> */}
      {/* Q=> 75 */}
      {/* <SelectibleGrid /> */}
      {/* Q=> 76 */}
      {/* <TransferList /> */}
      {/* Q=> 77 */}
      {/* <UndoRedo /> */}
      {/* Q=> 78 */}
      {/* <DataSorting /> */}
      {/* Q=> 79 */}
      {/* <InputPlaceholderAnimation /> */}
      {/* Q=> 80 */}
      {/* <QuizApp /> */}
      {/* Q=> 81 */}
      {/* <DebounceApiCall /> */}
      {/* Q=> 82 */}
      {/* <Toast /> */}
      {/* Q=> 83 */}
      {/* <DragAndDrop /> */}
      {/* Q=> 84 */}
      {/* <CustomProgressBar /> */}
      {/* <MultiPrograssBar /> */}
      {/* Q=> 85 */}
      {/* <MusicPlayer /> */}
      {/* Q=> 86 */}
      {/* <TipCalculator /> */}
      {/* Q=> 87 */}
      {/* <FilterProducts /> */}
      {/* Q=> 88 */}
      {/* <CurrencyConvertor /> */}
      {/* Q=> 89 */}
      {/* <SimpleFormHandle /> */}
      {/* Q=> 90 */}
      {/* <StepProgressBar /> */}
      {/* Q=> 91 */}
      {/* <TicTocToe /> */}
      {/* Q=> 92 */}
      {/* <SearchAutoCom /> */}
      {/* Q=> 93 */}
      {/* <ModalPopup /> */}
      {/* Q=> 94 */}
      {/* <Pagination /> */}
      {/* Q=> 95 */}
      {/* <TreeLikeStr /> */}
      {/* Q=> 96 */}
      {/* <Todo /> */}
      {/* Q=> 97 */}
      {/* <PasswordGenrator /> */}
      {/* Q=> 98 */}
      {/* <NotesApp /> */}
      {/* Q=> 99 */}
      {/* <FoodRecipe /> */}
      {/* Q=> 100 */}
      {/* <ExpenseTraker /> */}
      {/* Q=> 101 */}
      {/* <MealApp /> */}
      {/* Q=> 102 */}
      {/* <DynamicForm /> */}
      {/* Q=> 103 */}
      {/* <JobBoard /> */}
    </div>
  )
};

export default App;