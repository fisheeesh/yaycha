/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from "react";

import { CssBaseline, ThemeProvider, createTheme, Snackbar } from "@mui/material";

import App from "./App";
import AppDrawer from "./components/AppDrawer";

import { deepPurple, grey } from "@mui/material/colors";

const AppContext = createContext();

export function useApp() {
  return useContext(AppContext);
}

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
        <App />

        <AppDrawer />
        <Snackbar anchorOrigin={{
          horizontal: 'center',
          vertical: 'bottom'
        }}
          open={Boolean(globalMsg)}
          autoHideDuration={6000}
          onClose={() => setGlobalMsg(null)}
          message={globalMsg}
        />
        <CssBaseline />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
