// import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
// import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/details/Details";
import { CssBaseline } from "@mui/material";
import { Navigate } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import ScrollToTop from "./ScrollToTop";
// import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <CssBaseline />
      {/* <Navbar /> */}
      <BrowserRouter>
        <RootLayout>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="details" element={<Details />}>
                <Route index element={<Details />} />
                <Route path=":id" element={<Details />} />
              </Route>
              <Route path='*' element={<Navigate replace to='/' />} />
            </Routes>
          </ScrollToTop>
        </RootLayout>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
