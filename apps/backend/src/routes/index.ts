import express, { Router } from "express";
import testRoute from "./test.route";
import registerRoute from "./register.route";
import userRoute from "./user.route";
const router: Router = express.Router();

const defaultRoutes = [
  {
    path: "/test",
    route: testRoute,
  },
  {
    path: "/register",
    route: registerRoute,
  },
  {
    path: "/user",
    route: userRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
