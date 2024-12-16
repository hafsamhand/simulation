import { Route, Routes } from 'react-router-dom';

import './App.css';
import ExempleAPI from './components/APISimulation/ExempleAPI';
import SimulationHooks from './components/hooksTest/SimulationHooks';
import SimulationRoutage from './components/routage/SimulationRoutage';
// import RegisterForm from './components/forms/Formulaire';
import List from './components/lists/List';
// import Book from './components/props/Book';
// import BookEdit from './components/props/BookEdit';
// import BookFun from './components/states/UserStateCopy';
// import BookClass from './components/states/UserState';
import FullForm from './components/forms/FormulaireFull';
import MyAppNav from './components/routage/fichierRoute';
import OneTodo from './components/routage/paramRoute';

function App() {
  return (
    <div>
      <MyAppNav />
      <Routes>
        <Route path='/api' element={<ExempleAPI />} />
        <Route path='/routage' element={<SimulationRoutage />} />
        <Route path='hooks' element={<SimulationHooks />} />
        <Route path='formulaire' element={<FullForm />} />
        <Route path='/' element={<List />} />
        <Route path="/todos/:todoId" element={<OneTodo />} />

      </Routes>

      {/* <List /> */}
      {/* <BookEdit title="les misérables" /> */}
      {/* <BookClass /> */}
      {/* <BookFun /> */}
      {/* <RegisterForm /> */}
      {/* <FullForm /> */}
      {/* <ExempleAPI /> */}
      {/* <SimulationRoutage /> */}
      {/* <SimulationHooks /> */}
    </div>
  );
}

export default App;
