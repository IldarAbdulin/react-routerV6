import './App.scss';
import { Route, Navigate, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from './pages/HomePage'
import {AboutPage, todoLoader} from './pages/AboutPage'
import {postLoader, SinglePage} from './pages/SinglePage';
import {CreateTodo, createTodoAction} from './pages/CreateTodo';
import EditPost from './pages/EditPost';
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage';
import Todos from './pages/TodosPage';
import ErrorPage from './pages/ErrorPage';

import Layout from './components/Layout';

import RequireAuth from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='home' element={<HomePage/>}/>
    <Route path='todos' element={<AboutPage/>} loader={todoLoader} errorElement={<ErrorPage />}/>
    <Route path='todos-about' element={<Navigate to='/todos' replace/>}/>
    <Route path='todos/:id' element={<SinglePage/>} loader={postLoader}/>
    <Route path='todos/:id/edit' element={<EditPost/>}/>
    <Route path='todos/new' element={
      <RequireAuth>
        <CreateTodo />
      </RequireAuth>
    } action={createTodoAction}/>
    <Route path='about/*' element={<Todos />}>
      <Route path="contacts" element={<p>Our Contacts</p>}/>
      <Route path="team" element={<p>Our Team</p>}/>
    </Route>
    <Route path='login' element={<LoginPage/>}/>
    <Route path='*' element={<NotFoundPage/>}/>
  </Route>
))

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>

    </div>
  );
}

export default App;