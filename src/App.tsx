import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./routes/Navbar";
import Home from "./routes/Home"
import Page from "./routes/Page"
import Projecten from "./routes/Projecten"
import PageNotFound from "./routes/PageNotFound"
import { Container} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
  palette: {
    primary: {
        main : "#375A63",
    }, 
    secondary: {
        main : "#FF725C" ,
    }
  },
});



export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>

        <CssBaseline />
        <Navbar />
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projecten" element={<Projecten />} />
            <Route path="/page/:inputValue" element={<Page />} />
            <Route path="*" element={<PageNotFound />}
            />
          </Routes>
        </Container>
      </ThemeProvider>
    </Router>
  );
}
