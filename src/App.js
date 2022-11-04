import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SinglePage from './pages/SinglePage';
import CreateTodo from './pages/CreateTodo';
import EditPost from './pages/EditPost';
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage';

import Layout from './components/Layout';

import RequireAuth from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='home' element={<HomePage/>}/>
              <Route path='todos' element={<AboutPage/>}/>
              <Route path='todos-about' element={<Navigate to='/todos' replace/>}/>
              <Route path='todos/:id' element={<SinglePage/>}/>
              <Route path='todos/:id/edit' element={<EditPost/>}/>
              <Route path='todos/new' element={
                <RequireAuth>
                  <CreateTodo />
                </RequireAuth>
              }/>
              <Route path='login' element={<LoginPage/>}/>
              <Route path='*' element={<NotFoundPage/>}/>
            </Route>
          </Routes>
      </AuthProvider>
        <h1>React Router</h1>

    </div>
  );
}

export default App;