import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
import TaskFormPage from './pages/TaskFormPage';
import TasksPage from './pages/TasksPage';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import { TaskProvider } from './context/TaskContext';
import Navbar from './components/Navbar';
import StatusTasksPage from './pages/StatusTaskPage';

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={<HomePage />}
            />
            <Route
              path='/login'
              element={<LoginPage />}
            />
            <Route
              path='/register'
              element={<RegisterPage />}
            />
            <Route element={<ProtectedRoute />}>
              <Route
                path='/tasks'
                element={<TasksPage />}
              />
              <Route
                path='/tasks/completed'
                element={<StatusTasksPage status={'completed'} />}
              />
              <Route
                path='/tasks/pending'
                element={<StatusTasksPage status={'pending'} />}
              />
              <Route
                path='/tasks/onprogress'
                element={<StatusTasksPage status={'onProgress'} />}
              />
              <Route
                path='/add-tasks'
                element={<TaskFormPage />}
              />
              <Route
                path='/tasks/:id'
                element={<TaskFormPage />}
              />
              <Route
                path='/profile'
                element={<Profile />}
              />
            </Route>
          </Routes>
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
