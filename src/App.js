import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageComponent from './components/HomePageComponent/HomePageComponent';
import SayHelloComponent from './components/SayHelloComponent/SayHelloComponent';
import SumTwoNumbersComponent from './components/SumTwoNumbersComponent/SumTwoNumbersComponent';
import AskingQuestionsComponent from './components/AskingQuestionsComponent/AskingQuestionsComponent';
import GreaterOrLessComponent from './components/GreaterOrLessComponent/GreaterOrLessComponent';
import MadLibsComponent from './components/MadLibsComponent/MadLibsComponent';

import { BrowserRouter, Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <div style={{ backgroundImage: "url(/6221972.jpg)", backgroundSize: "cover", backgroundAttachment: "fixed", height: "100vh", width: "100%" }}>


      <BrowserRouter >

        <Routes>

          <Route path='/' element={<HomePageComponent />} />
          <Route path='SayHello' element={<SayHelloComponent />} />
          <Route path='SumTwoNumbers' element={<SumTwoNumbersComponent />} />
          <Route path='AskingQuestions' element={<AskingQuestionsComponent />} />
          <Route path='GreaterOrLess' element={<GreaterOrLessComponent />} />
          <Route path='MadLibs' element={<MadLibsComponent />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
