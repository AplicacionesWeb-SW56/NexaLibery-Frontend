<script>
import { FormControl, FormGroup, Validators } from "@/shared/utils/vue-form.js";
import ValidatorFormMessage from "@/iam/components/validator-form-message.component.vue";
import { SignInRequest } from "../models/sign-in.request";
import { useAuthenticationStore } from "../services/authentication.store";

export default {
  components: {
    ValidatorFormMessage,
  },
  data() {
    return {
      form: new FormGroup({
        email: new FormControl("", [Validators.required(), Validators.email()]),
        password: new FormControl("", [
          Validators.required(),
          Validators.minLength(5),
          Validators.maxLength(18),
        ]),
      }),
    };
  },
  methods: {
    signIn() {
      if (!this.form.isValidForm()) return;
      const authenticationStore = useAuthenticationStore();
      const formData = this.form.props();
      const signInRequest = new SignInRequest(
        formData.email,
        formData.password,
      );
      authenticationStore.signIn(signInRequest, this.$router, (error) => {
        this.$toast.add({
          severity: "error",
          detail: error.message,
          life: 3000,
        });
      });
    },
  },
};
</script>
<template>
  <pv-toast position="bottom-center" />
  <div
    class="surface-card m-auto p-4 shadow-2 justify-content-center border-round w-full md:w-6"
  >
    <div class="flex flex-column gap-5 md:gap-4">
      <h2 class="text-center font-bold text-3xl">
        {{ $t("auth.signin.title") }}
      </h2>

      <div class="flex justify-content-center">
        {{ $t("auth.signin.tosignup.no-account") }}
        <router-link
          class="pl-1 text-primary"
          to="/sign-up"
        >
          {{ $t("auth.signin.tosignup.register-now") }}
        </router-link>
      </div>

      <div class="flex flex-column">
        <label
          for="email"
          class="block text-900 font-medium mb-2"
        >{{
          $t("auth.signin.inputs.email.title")
        }}</label>
        <pv-input-text
          id="email"
          type="text"
          v-model="form.getControl('email').prop"
          @blur="() => form.validateControl('email')"
          :invalid="form.invalidControl('email')"
          :placeholder="$t('auth.signin.inputs.email.placeholder')"
        />
        <validator-form-message
          :valid="form.validationControl('email', 'required')"
          :label="$t('auth.signin.validations.email.required')"
        />
        <validator-form-message
          :valid="form.validationControl('email', 'email')"
          :label="$t('auth.signin.validations.email.email')"
        />
      </div>

      <div class="flex flex-column">
        <label
          for="password"
          class="block text-900 font-medium mb-2"
        >{{
          $t("auth.signin.inputs.password.title")
        }}</label>
        <pv-input-text
          id="password"
          type="password"
          v-model="form.getControl('password').prop"
          @blur="
            () => {
              form.validateControl('password');
            }
          "
          :invalid="form.invalidControl('password')"
          :placeholder="$t('auth.signin.inputs.password.placeholder')"
        />
        <validator-form-message
          :valid="form.validationControl('password', 'required')"
          :label="$t('auth.signin.validations.password.required')"
        />
        <validator-form-message
          :valid="form.validationControl('password', 'minLength')"
          :label="$t('auth.signin.validations.password.min-length', { size: 5 })"
        />
        <validator-form-message
          :valid="form.validationControl('password', 'maxLength')"
          :label="
            $t('auth.signin.validations.password.max-length', { size: 18 })
          "
        />
      </div>

      <pv-button
        @click="
          () => {
            form.validateForm();
            signIn();
          }
        "
        :label="$t('auth.signin.button')"
        icon="pi pi-user"
        class="m-auto px-5 gap-2"
      />
    </div>
  </div>
</template>
<style scoped></style>
