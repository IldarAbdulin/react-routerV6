import './App.scss';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SinglePage from './pages/SinglePage';
import CreateTodo from './pages/CreateTodo';
import EditPost from './pages/EditPost';
import NotFoundPage from './pages/NotFoundPage'
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='home' element={<HomePage/>}/>
            <Route path='todos' element={<AboutPage/>}/>
            <Route path='todos/:id' element={<SinglePage/>}/>
            <Route path='todos/:id/edit' element={<EditPost/>}/>
            <Route path='todos/new' element={<CreateTodo/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Route>
        </Routes>

    </div>
  );
}

export default App;