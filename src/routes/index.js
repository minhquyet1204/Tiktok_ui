import Home from "../pages/home/Home";
import Following from "../pages/following/Following";
import Profile from "../pages/profile/Profile";
import Feedback from "../pages/feedback/Feedback";
import Live from "../pages/live/Live";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/@:nickname", component: Profile },
  { path: "/feedback", component: Feedback },
  { path: "/live", component: Live },
];

export { publicRoutes };
