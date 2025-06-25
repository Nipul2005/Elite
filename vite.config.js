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
          "courses/dctt.html"
        ),
        "courses/Diploma-E-accounting-and-Taxation-in-delhi": resolve(
          __dirname,
          "courses/det.html"
        ),
        "courses/Diploma-Computer-Application-in-delhi": resolve(
          __dirname,
          "courses/dca.html"
        ),
        "courses/Diploma-Graphic-Designing-in-delhi": resolve(
          __dirname,
          "courses/dgd.html"
        ),
        "courses/Diploma-Web-Designing-Multimedia-in-delhi": resolve(
          __dirname,
          "courses/dwd.html"
        ),
        "courses/Certification-Office-Automation-in-delhi": resolve(
          __dirname,
          "courses/coa.html"
        ),
        "courses/Certification-Desktop-Publishing-in-delhi": resolve(
          __dirname,
          "courses/dtp.html"
        ),
        "courses/Certification-Computer-Operating-in-delhi": resolve(
          __dirname,
          "courses/cco.html"
        ),
        "courses/Certification-Video-Editing-in-delhi": resolve(
          __dirname,
          "courses/cve.html"
        ),
        "courses/Certification-Financial-Accounting-in-delhi": resolve(
          __dirname,
          "courses/cfa.html"
        ),
        "courses/Management-Information-System-in-delhi": resolve(
          __dirname,
          "courses/mis.html"
        ),
      },
    },
  },
});
