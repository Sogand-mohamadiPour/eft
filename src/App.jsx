import { Route, Routes } from "react-router-dom";

import Header from "./components/home/Header";
import Landing from "./components/home/Landing";

import Login from "./components/login/Login";
import Passwordreset from "./components/login/Passwordreset";
import LoginWithOtp from "./components/login/Loginwithotp";
import Changepass from "./components/login/Changepass";
import Signup from "./components/login/Signup";
import Signupwithotp from "./components/login/Signupwithotp";

import Content from "./components/content/Content";
import Blog from "./components/blog/Blog";
import About from "./components/about/About";
import Footer from "./components/home/Footer";

import DashboardLayout from "./dashboard/layouts/DashboardLayout";
import DashboardHome from "./dashboard/pages/DashboardHome/DashboardHome";

import ProtectedRoute from "./auth/ProtectedRoute";

function PagePlaceholder({ title }) {
  return <div>{title}</div>;
}

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
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

      <Route path="/login" element={<Login />} />

      <Route
        path="/content"
        element={
          <Layout>
            <Content />
            <Footer />
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
            <Blog />
            <Footer />
          </Layout>
        }
      />

      <Route
        path="/about"
        element={
          <Layout>
            <About />
            <Footer />
          </Layout>
        }
      />

      <Route path="/Passwordreset" element={<Passwordreset />} />

      <Route path="/loginwithotp" element={<LoginWithOtp />} />

      <Route path="/Changepass" element={<Changepass />} />

      <Route path="/Signup" element={<Signup />} />

      <Route path="/Signupwithotp" element={<Signupwithotp />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />

          <Route
            path="profile"
            element={<PagePlaceholder title="پروفایل من" />}
          />

          <Route
            path="courses"
            element={<PagePlaceholder title="دوره های من" />}
          />

          <Route
            path="new-course"
            element={<PagePlaceholder title="درخواست دوره جدید" />}
          />

          <Route
            path="wallet"
            element={<PagePlaceholder title="کیف پول من" />}
          />

          <Route
            path="reviews"
            element={<PagePlaceholder title="ثبت نظرات" />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
