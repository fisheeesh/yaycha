/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from "react";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import { deepPurple, grey } from "@mui/material/colors";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./Template";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Comments from "./pages/Comments";
import Profile from "./pages/Profile";
import Likes from "./pages/Likes";

const AppContext = createContext();

export function useApp() {
  return useContext(AppContext);
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
      {
        path: '/',
        element: <Home />
      }, 
      {
        path: '/login',
        element: <Login />
      }, 
      {
        path: '/register',
        element: <Register />
      }, 
      {
        path: '/comments/:id',
        element: <Comments />
      }, 
      {
        path: '/profile/:id',
        element: <Profile />
      }, 
      {
        path: '/likes/:id',
        element: <Likes />
      }, 
    ]
  }
])

export default function ThemeApp() {
  const [showDrawer, setShowDrawer] = useState(false)
  const [showForm, setShowForm] = useState(false);
  const [globalMsg, setGlobalMsg] = useState(null)
  const [auth, setAuth] = useState(null)
  const [mode, setMode] = useState('dark')

  /**
   * ? We have to move createTheme inside Component cuz we're gonna work with state.
   * ? The problem is whenever the componnet is re-rendered, the theme will be re-created.
   * ? So, we have to use it inside useMemo hook which will run when it's necessary
   * ? In our case, we pass mode in dependencies array, so the theme will only be re-created when mode changes
   */
  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        primary: deepPurple,
        banner: mode === 'dark' ? grey[800] : grey[200],
        text: {
          fade: grey[500]
        }
      },
    })
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ showDrawer, setShowDrawer, showForm, setShowForm, globalMsg, setGlobalMsg, auth, setAuth, mode, setMode }}>
        <RouterProvider router={router} />
        <CssBaseline />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
