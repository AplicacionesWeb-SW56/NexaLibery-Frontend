<script>
import { FormControl, FormGroup, Validators } from "@/shared/utils/vue-form";
import ValidatorFormMessage from "@/iam/components/validator-form-message.component.vue";
import { SignUpRequest } from "../models/sign-up.request";
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
        name: new FormControl("", [
          Validators.required(),
          Validators.minLength(5),
          Validators.maxLength(20),
        ]),
        description: new FormControl("", [
          Validators.required(),
          Validators.maxLength(50),
        ]),
        cardNumber: new FormControl("", [
          Validators.required(),
          Validators.minLength(16),
          Validators.maxLength(19),
        ]),
        bornDate: new FormControl("", [Validators.required()]),
        photo: new FormControl("", [Validators.required(), Validators.url()]),
      }),
    };
  },
  methods: {
    signUp() {
      if (!this.form.isValidForm()) return;

      const authenticationStore = useAuthenticationStore();
      const formData = this.form.props();
      const signUpRequest = new SignUpRequest(
        formData.email,
        formData.password,
        formData.name,
        formData.description,
        formData.cardNumber,
        formData.bornDate,
        formData.photo
      );
      authenticationStore.signUp(signUpRequest, this.$router, (error) => {
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
    <div class="flex flex-column gap-3">
      <h2 class="text-center font-bold pb-4 text-3xl">
        {{ $t("auth.signup.title") }}
      </h2>

      <div class="flex justify-content-center">
        {{ $t("auth.signup.tosignin.has-account") }}
        <router-link
          class="pl-1 text-primary"
          to="/log-in"
        >
          {{ $t("auth.signup.tosignin.log-in-now") }}
        </router-link>
      </div>

      <div class="flex flex-column">
        <label
          for="email"
          class="block text-900 font-medium mb-2"
        >{{
          $t("auth.signup.inputs.email.title")
        }}</label>
        <pv-input-text
          id="email"
          type="text"
          v-model="form.getControl('email').prop"
          @blur="() => form.validateControl('email')"
          :invalid="form.invalidControl('email')"
          :placeholder="$t('auth.signup.inputs.email.placeholder')"
        />
        <validator-form-message
          :valid="form.validationControl('email', 'required')"
          :label="$t('auth.signup.validations.email.required')"
        />
        <validator-form-message
          :valid="form.validationControl('email', 'email')"
          :label="$t('auth.signup.validations.email.email')"
        />
      </div>

      <div class="flex flex-column">
        <label
          for="password"
          class="block text-900 font-medium mb-2"
        >{{
          $t("auth.signup.inputs.password.title")
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
          :placeholder="$t('auth.signup.inputs.password.placeholder')"
        />
        <validator-form-message
          :valid="form.validationControl('password', 'required')"
          :label="$t('auth.signup.validations.password.required')"
        />
        <validator-form-message
          :valid="form.validationControl('password', 'minLength')"
          :label="
            $t('auth.signup.validations.password.min-length', { size: 5 })
          "
        />
        <validator-form-message
          :valid="form.validationControl('password', 'maxLength')"
          :label="
            $t('auth.signup.validations.password.max-length', { size: 18 })
          "
        />
      </div>

      <div class="flex flex-column">
        <label
          for="name"
          class="block text-900 font-medium mb-2"
        >{{
          $t("auth.signup.inputs.name.title")
        }}</label>
        <pv-input-text
          id="name"
          type="text"
          v-model="form.getControl('name').prop"
          @blur="
            () => {
              form.validateControl('name');
            }
          "
          :invalid="form.invalidControl('name')"
          :placeholder="$t('auth.signup.inputs.name.placeholder')"
        />
        <validator-form-message
          :valid="form.validationControl('name', 'required')"
          :label="$t('auth.signup.validations.name.required')"
        />
        <validator-form-message
          :valid="form.validationControl('name', 'minLength')"
          :label="$t('auth.signup.validations.name.min-length', { size: 5 })"
        />
        <validator-form-message
          :valid="form.validationControl('name', 'maxLength')"
          :label="$t('auth.signup.validations.name.max-length', { size: 18 })"
        />
      </div>

      <div class="flex flex-column">
        <label
          for="description"
          class="block text-900 font-medium mb-2"
        >{{
          $t("auth.signup.inputs.description.title")
        }}</label>
        <pv-text-area
          id="description"
          type="text"
          rows="5"
          cols="30"
          auto-resize
          v-model="form.getControl('description').prop"
          @blur="
            () => {
              form.validateControl('description');
            }
          "
          :invalid="form.invalidControl('description')"
          :placeholder="$t('auth.signup.inputs.description.placeholder')"
        />
        <validator-form-message
          :valid="form.validationControl('description', 'required')"
          :label="$t('auth.signup.validations.description.required')"
        />
        <validator-form-message
          :valid="form.validationControl('description', 'maxLength')"
          :label="
            $t('auth.signup.validations.description.max-length', { size: 50 })
          "
        />
      </div>

      <div class="flex flex-column">
        <label
          for="card"
          class="block text-900 font-medium mb-2"
        >{{
          $t("auth.signup.inputs.card.title")
        }}</label>
        <pv-input-mask
          id="card"
          mask="9999-9999-9999-9999"
          placeholder="9999-9999-9999-9999"
          v-model="form.getControl('cardNumber').prop"
          @blur="
            () => {
              form.validateControl('cardNumber');
            }
          "
          :invalid="form.invalidControl('cardNumber')"
        />
        <validator-form-message
          :valid="form.validationControl('cardNumber', 'required')"
          :label="$t('auth.signup.validations.card.required')"
        />
        <validator-form-message
          :valid="form.validationControl('cardNumber', 'minLength')"
          :label="$t('auth.signup.validations.card.min-length', { size: 16 })"
        />
        <validator-form-message
          :valid="form.validationControl('cardNumber', 'maxLength')"
          :label="$t('auth.signup.validations.card.max-length', { size: 16 })"
        />
      </div>

      <div class="flex flex-column">
        <label
          for="born"
          class="block text-900 font-medium mb-2"
        >{{
          $t("auth.signup.inputs.born.title")
        }}</label>
        <pv-calendar
          id="born"
          date-format="yy-mm-dd"
          v-model="form.getControl('bornDate').prop"
          @blur="() => form.validateControl('bornDate')"
          :invalid="form.invalidControl('bornDate')"
          :placeholder="$t('auth.signup.inputs.born.placeholder')"
        />
        <validator-form-message
          :valid="form.validationControl('bornDate', 'required')"
          :label="$t('auth.signup.validations.born.required')"
        />
      </div>

      <div class="flex flex-column">
        <label
          for="photo"
          class="block text-900 font-medium mb-2"
        >{{
          $t("auth.signup.inputs.photo.title")
        }}</label>
        <pv-input-text
          id="photo"
          type="text"
          v-model="form.getControl('photo').prop"
          @blur="
            () => {
              form.validateControl('photo');
            }
          "
          :invalid="form.invalidControl('photo')"
        />
        <validator-form-message
          :valid="form.validationControl('photo', 'required')"
          :label="$t('auth.signup.validations.photo.required')"
        />
        <validator-form-message
          :valid="form.validationControl('photo', 'url')"
          :label="$t('auth.signup.validations.photo.url')"
        />
      </div>

      <pv-button
        @click="
          () => {
            form.validateForm();
            signUp();
          }
        "
        :label="$t('auth.signup.button')"
        icon="pi pi-user"
        class="m-auto px-5 gap-2"
      />
    </div>
  </div>
</template>
<style scoped></style>
