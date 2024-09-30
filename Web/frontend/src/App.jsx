import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout } from "./pages/HomeLayout";
import { Landing } from "./pages/Landing";
import { ContactUs } from "./pages/ContactUs";
import { AboutUs } from "./pages/AboutUs";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/AuthContext";
import ActivityPage from "./components/ActivityPage";
import { NewActivityPage } from "./components/NewActivityPage";
import { Contents } from "./pages/Contents";
import { CaregiverDashboard } from "./pages/CaregiverDashboard";
import { Settings } from "./pages/Settings";
import { FamilyMarketPlace } from "./pages/FamilyMarketPlace";
import { DoctorMarketPlace } from "./pages/DoctorMarketPlace";

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
        element: <Profile />,
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
            element:<CaregiverDashboard/>,
          },
          {
            path:'chats',
            element:<div>Chats</div>,
          },
          {
            path:'marketplace',
            element:<FamilyMarketPlace/>,
          },
          {
            path:'settings',
            element:<Settings/>,
          }
        ],
      },
    ],
    
  },
  {
    path:'/doctor',
    element:<DoctorMarketPlace/>
  }
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
