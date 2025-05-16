import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import {
  DashboardPage,
  DashboardMessages,
  DashboardTasks,
} from "./pages/DashboardPage";
import AboutPage from "./pages/AboutPage";
import PageNotFound from "./pages/PageNotFound";

export function AppRoutes(props) {
  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      <Route index element={<Homepage {...props} />} />

      {/* nested routes, matches on /dash/tasks etc */}
      <Route path="dash" element={<DashboardPage {...props} />}>
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>

      <Route path="/about" element={<AboutPage {...props} />} />

      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
