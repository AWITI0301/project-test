import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {

    proxy: {
      "/admin_login": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/admin_logout": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/admin_auth": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/teacher_login": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/teacher_logout": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/teacher_auth": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/student_login": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/student_logout": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/student_auth": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/parent_login": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/parent_logout": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },      
      "/parent_auth": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
