import React ,{Suspense}from "react";
import "./App.css";
// import Basics2 from "./components/Basics2";
import Basics3 from "./components/Events/OnChangeHandlerExample";
import Basics4 from "./components/MapExample1";
import Basics5 from "./components/MapExample";
import Basics6 from "./components/Filterexample";
import Basics7 from "./components/FilterExample1";
import Basics8 from "./components/FetchExample";
import Basics9 from "./components/AxiosExample";
import CalculatorApp from "./components/Projects/CalculatorApp/CalculatorApp";
import Display from "./components/Events/FormExample";
import Form from "./components/Events/Form";
// import Navbar from "./components/Routing/Navbar";
// import Basics from "./components/Basics";
// import Basics1 from "./components/Basics1";
// import Counter from "./components/CounterApp/Counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./components/Routing/Home"
import About from "./components/Routing/About";
import Dashboard from "./components/Routing/Dashboard";
import ImageImport from "./components/ImageImport";
import AudioImport from "./components/AudioImport";
import VideoImport from "./components/VideoImport";
import UseContextExample from "./components/Hooks/UseContextExample/UseContextExample";
import Fetching from "./components/Fetching";
import BasicExample from "./components/ReactBootstarp";
import ScrollableTabsButtonPrevent from "./components/ReactMaterialUi";
import Task from "./components/Routing/Task";
import IndividualTask from "./components/Routing/IndividualTask";
import FileDownload from "./components/FileDownload";
import SendingEmail from "./components/SendingEmail";
import SearchFilter from "./components/SearchFilter";
import UseRefHookExamle from "./components/Hooks/UseRefHookExamle";
import Example from "./components/Example";
import Exam from "./components/Exam";
import Exam2 from "./Exam2";
import ContextApi from "./components/ContextApi/ContextApi";
import AddToCart from "./components/Projects/ShoppingCart/AddToCart";
import Cart from "./components/UseContext/Cart";
import UseEffectVsUseMemo from "./components/Hooks/UseEffectVsUseMemo";
import StatefullandStateless from "./components/StateFullVsStateless/StatefullandStateless";
import ControlledVsUnControlled from "./components/ControlledVsUnControlled/ControlledVsUnControlled";
import UnControlled from "./components/ControlledVsUnControlled/UnControlled";
import LazyLoading from "./components/LazyLoading/LazyLoading";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import ComponentA from "./components/ErrorBoundary/ComponentA";
import ComponentB from "./components/ErrorBoundary/ComponentB";
import NavBar from "./components/ReactReduxToolkit/NavBar";
import Products from "./components/ReactReduxToolkit/Products";
import MaterialUi from "./components/ReactMaterialUI/MaterialUi";
import Todo from "./components/Projects/TodoList/Todo";
import Todos from "./components/Projects/TodoMenu/Todos";
import Formik from "./components/ReactFormik/Formik";
import AyncExample from "./components/Async/AyncExample";
import Gallery from "./components/Projects/ImageGalleryApp/Gallery";
import Weather from "./components/Projects/WeatherApp/Weather";
import FoodRecipe from "./components/Projects/FoodRecipeApp/FoodRecipe";
import Login from "./components/Projects/FirebaseAuthentication/Login";
import LocalSessionStorageExample from "./components/LocalAndSessionStorage/LocalSessionStorageExample";
const Register = React.lazy(() => import("./components/LazyLoading/Register"));
// const Login = React.lazy(() => import("./components/LazyLoading/Login"));
const Home = React.lazy(() => import("./components/LazyLoading/Home"));


const App = () => {
  return (
    <div>
      {/* <Basics /> 
      <Basics1 /> */}
      {/* <Counter /> */}
      {/* <Basics2 /> */}
      {/* <Basics3 /> */}
      {/* <Display /> */}
      {/* <Basics4 /> */}
      {/* <Basics5 /> */}
      {/* <Basics6 /> */}
      {/* <Basics7 /> */}
      {/* <Form /> */}
      {/* <SignUp /> */}
      {/* <CalculatorApp /> */}
      {/* <Basics8 /> */}
      {/* <Basics9 /> */}
      {/* <UseRefHookExamle /> */}
      {/* <Example /> */}
      {/* <Exam /> */}
      {/* <Exam2 /> */}
      {/* <ContextApi /> */}
      {/* <AddToCart /> */}
      {/* <Cart /> */}
      {/* <UseEffectVsUseMemo /> */}
      {/* <StatefullandStateless /> */}
      {/* <ControlledVsUnControlled /> */}
      {/* <UnControlled /> */}

      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Dashboard/:name" element={<Dashboard />} />
          <Route exact path="/task" element={<Task />} />
          <Route exact path="/task/:id" element={<IndividualTask />} />
        </Routes>
      </BrowserRouter> */}
      {/* <FileDownload /> */}

      {/* <ImageImport /> */}
      {/* <AudioImport /> */}
      {/* <VideoImport /> */}
      {/* <UseContextExample /> */}
      {/* <SendingEmail /> */}
      {/* <Fetching /> */}
      {/* <BasicExample /> */}
      {/* <ScrollableTabsButtonPrevent /> */}
      {/* <SearchFilter /> */}
      {/* <BrowserRouter>
        <LazyLoading />
        
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
            <Route exact path="/Home" element={<Home />}></Route>
            <Route exact path="/Login" element={<Login />}></Route>
            <Route exact path="/Register" element={<Register />}></Route>
            </Routes>
          </Suspense>
      </BrowserRouter> */}
      {/* <ErrorBoundary>
        <ComponentA />
        <ComponentB />
        </ErrorBoundary> */}
        {/* <NavBar/>
        <Products /> */}
        {/* <MaterialUi /> */}
        {/* <Todo /> */}
        {/* <Todos /> */}
        {/* <Formik /> */}
       {/* <AyncExample /> */}
       {/* <Gallery /> */}
       {/* <Weather /> */}
       {/* <FoodRecipe /> */}
       {/* <Login /> */}
       <LocalSessionStorageExample />
    </div>
  );
};

export default App;
