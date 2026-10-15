import { lazy, Suspense } from "react";
import "./App.css";
import "intersection-observer";
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ReactLoading from "react-loading";
import "./index.css";

const HomeRoute = lazy(() => import("./routes/HomeRoute"));
const ResumeRoute = lazy(() => import("./routes/ResumeRoute"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <HashRouter>
      <Suspense fallback={
        <div className="react-loading">
          <ReactLoading type={"bars"} color={"#fff"} height={"20%"} />
        </div>
      }>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<HomeRoute />} />
              <Route path="resume" element={<ResumeRoute />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Suspense>
    </HashRouter>
  );
}
export default App;
