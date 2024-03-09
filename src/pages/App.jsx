import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <div className='content'>
        <Outlet />
      </div>
      <Navigation />
    </ThemeProvider>
  );
}
export default App;
