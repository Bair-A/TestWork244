module.exports = {
  extends: [
    "stylelint-config-standard", // Базовые правила
    "stylelint-scss" // Поддержка SCSS
  ],
  rules: {
    "at-rule-no-unknown": null, // Отключаем стандартное правило
    "scss/at-rule-no-unknown": true // Включаем SCSS-правила
  }
};