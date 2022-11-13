import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import AttendanceView from "../views/AttendanceView.vue";
import ExamResultsView from "../views/my-info/ExamResultsView.vue";
import MyProfileView from "../views/my-info/MyProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/attendance",
      name: "attendance",
      component: AttendanceView,
    },
    {
      path: "/my-info/exam-results/:id",
      name: "exam-results",
      component: ExamResultsView,
    },
    {
      path: "/my-info/my-profile/:id",
      name: "my-profile",
      component: MyProfileView,
    },
  ],
});

router.beforeEach(async (to) => {
  const token = localStorage.getItem("token");
  if (
    // make sure the user is authenticated
    token == null &&
    to.name !== "login"
  ) {
    // redirect the user to the login page
    return { name: "login" };
  }
});
export default router;
