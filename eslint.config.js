import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/strongly-recommended"],
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/component-definition-name-casing": ["error", "kebab-case"],
      "vue/require-default-prop": "off",
    }
  }
];
