import { Route, Routes } from "react-router-dom";
import Header from "./components/home/Header";
import Landing from "./components/home/Landing";
import Login from "./components/login/Login";
import Passwordreset from "./components/login/Passwordreset";
import LoginWithOtp from "./components/login/Loginwithotp";
import Changepass from "./components/login/Changepass"

function PagePlaceholder({ title }) {
  return (
    <div className="px-4 py-16 text-center text-white/80">
      <h1 className="text-2xl font-semibold text-white">{title}</h1>
    </div>
  );
}

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Landing />
          </Layout>
        }
      />
      <Route
        path="/content"
        element={
          <Layout>
            <PagePlaceholder title="محتوا" />
          </Layout>
        }
      />
      <Route
        path="/user-results"
        element={
          <Layout>
            <PagePlaceholder title="نتایج کاربران" />
          </Layout>
        }
      />
      <Route
        path="/eft-sessions"
        element={
          <Layout>
            <PagePlaceholder title="جلسات EFT" />
          </Layout>
        }
      />
      <Route
        path="/blog"
        element={
          <Layout>
            <PagePlaceholder title="وبلاگ" />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <PagePlaceholder title="درباره ما" />
          </Layout>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/Passwordreset" element={<Passwordreset />} />
      <Route path="/loginwithotp" element={<LoginWithOtp />} />
      <Route path="Changepass" element={<Changepass />} />
    </Routes>
  );
}

export default App;
