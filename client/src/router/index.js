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
      path: "/auth/login",
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

export default router;
