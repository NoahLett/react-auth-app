import Register from './components/Register';
import Login from './components/Login';
import Admin from './components/Admin';
import Editor from './components/Editor';
import Home from './components/Home';
import LinkPage from './components/LinkPage';
import Lounge from './components/Lounge';
import Unauthorized from './components/Unauthorized';
import Missing from './components/Missing';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';

const ROLES = {
  'User': 1939,
  'Editor': 1864,
  'Admin': 1776
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path="editor" element={<Editor />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
          <Route path="lounge" element={<Lounge />} />
        </Route>

        {/* Catch All */}
        <Route path="*" element={<Missing />} />

      </Route>
    </Routes>
  );
}

export default App;
