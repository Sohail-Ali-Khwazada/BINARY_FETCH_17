import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout } from "./pages/HomeLayout";
import { Landing } from "./pages/Landing";
import { ContactUs } from "./pages/ContactUs";
import { AboutUs } from "./pages/AboutUs";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import Settings from "./pages/Settings";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/AuthContext";
import ActivityPage from "./components/ActivityPage";
import { NewActivityPage } from "./components/NewActivityPage";
import { Contents } from "./pages/Contents";
import { DoctorMarketPlace } from "./pages/DoctorMarketPlace";
import { FamilyMarketPlace } from "./pages/FamilyMarketPlace";
// import ChatApp from "./chatApp/components/ChatApp";
import { CareGiverMoreInfo } from "./components/CareGiverMoreInfo";
import Chatbot from "./pages/Chatbot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Settings />,
      },
      {
        path: "/contents",
        element: <Contents/>,
        children: [
          {
            path: "activity",
            element: <ActivityPage />,
          },
          {
            path: "new-activity",
            element: <NewActivityPage />,
          },
          {
            path:'dashboard',
            element:<div className="mt-20">Dashboard</div>,
          },
          {
            path:'invitations',
            element:<div>Invitatins</div>,
          }
        ],
      },
    ],
  },
  {
    path: "/doctor",
    element: <DoctorMarketPlace />
  },
  {
    path: "/family",
    element: <FamilyMarketPlace />
  },
  {
    path: "/chatbot",
    element: <Chatbot />
  },
  // {
  //   path: "/chats",
  //   element: <ChatApp />
  // },
]);

function App() {
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthContextProvider>
    </>
  );
}

export default App;
