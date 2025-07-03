import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        "courses/Diploma-Computer-Teacher-Training-in-delhi": resolve(
          __dirname,
          "courses/Diploma-Computer-Teacher-Training-in-delhi.html"
        ),
        "courses/Diploma-E-accounting-and-Taxation-in-delhi": resolve(
          __dirname,
          "courses/Diploma-E-accounting-and-Taxation-in-delhi.html"
        ),
        "courses/Diploma-Computer-Application-in-delhi": resolve(
          __dirname,
          "courses/Diploma-Computer-Application-in-delhi.html"
        ),
        "courses/Diploma-Graphic-Designing-in-delhi": resolve(
          __dirname,
          "courses/Diploma-Graphic-Designing-in-delhi.html"
        ),
        "courses/Diploma-Web-Designing-Multimedia-in-delhi": resolve(
          __dirname,
          "courses/Diploma-Web-Designing-Multimedia-in-delhi.html"
        ),
        "courses/Certification-Office-Automation-in-delhi": resolve(
          __dirname,
          "courses/Certification-Office-Automation-in-delhi.html"
        ),
        "courses/Certification-Desktop-Publishing-in-delhi": resolve(
          __dirname,
          "courses/Certification-Desktop-Publishing-in-delhi.html"
        ),
        "courses/Certification-Computer-Operating-in-delhi": resolve(
          __dirname,
          "courses/Certification-Computer-Operating-in-delhi.html"
        ),
        "courses/Certification-Video-Editing-in-delhi": resolve(
          __dirname,
          "courses/Certification-Video-Editing-in-delhi.html"
        ),
        "courses/Certification-Financial-Accounting-in-delhi": resolve(
          __dirname,
          "courses/Certification-Financial-Accounting-in-delhi.html"
        ),
        "courses/Management-Information-System-in-delhi": resolve(
          __dirname,
          "courses/Management-Information-System-in-delhi.html"
        ),
      },
    },
  },
});
