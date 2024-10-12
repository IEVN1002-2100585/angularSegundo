const { Component } = require('@angular/core');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/app.component.html.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [ejemplo1],
}
