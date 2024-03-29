import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageComponent from './components/HomePageComponent/HomePageComponent';
import SayHelloComponent from './components/SayHelloComponent/SayHelloComponent';
import SumTwoNumbersComponent from './components/SumTwoNumbersComponent/SumTwoNumbersComponent';
import AskingQuestionsComponent from './components/AskingQuestionsComponent/AskingQuestionsComponent';
import GreaterOrLessComponent from './components/GreaterOrLessComponent/GreaterOrLessComponent';
import MadLibsComponent from './components/MadLibsComponent/MadLibsComponent';
import OddOrEvenComponent from './components/OddOrEvenComponent/OddOrEvenComponent';
import ReverseWordsComponent from './components/ReverseWordsComponent/ReverseWordsComponent';
import ReverseNumbersComponent from './components/ReverseNumbersComponent/ReverseNumbersComponent';
import Magic8BallComponent from './components/Magic8BallComponent/Magic8BallComponent';
import RestaurantPickerComponent from './components/RestaurantPickerComponent/RestaurantPickerComponent';

import { BrowserRouter, Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <div style={{ backgroundImage: "url(/6221972.jpg)", backgroundSize: "cover", backgroundAttachment: "fixed", height: "100vh", width: "100%", overflow: "scroll" }}>

      <BrowserRouter >

        <Routes>

          <Route path='/' element={<HomePageComponent />} />
          <Route path='SayHello' element={<SayHelloComponent />} />
          <Route path='SumTwoNumbers' element={<SumTwoNumbersComponent />} />
          <Route path='AskingQuestions' element={<AskingQuestionsComponent />} />
          <Route path='GreaterOrLess' element={<GreaterOrLessComponent />} />
          <Route path='MadLibs' element={<MadLibsComponent />} />
          <Route path='OddOrEven' element={<OddOrEvenComponent />} />
          <Route path='ReverseWords' element={<ReverseWordsComponent />} />
          <Route path='ReverseNumbers' element={<ReverseNumbersComponent />} />
          <Route path='Magic8Ball' element={<Magic8BallComponent />} />
          <Route path='RestaurantPicker' element={<RestaurantPickerComponent />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
