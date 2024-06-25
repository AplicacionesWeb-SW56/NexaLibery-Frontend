<script>
import ValidatorFormMessage from "@/iam/components/validator-form-message.component.vue";
import PodcastPlayer from "@/multimedia/components/podcast-player.component.vue";
import VideoPlayer from "@/multimedia/components/video-player.component.vue";
import { FormControl, FormGroup, Validators } from "@/shared/utils/vue-form.js";
import { BookApiService } from "../services/book-api.service";
import { MultimediaApiService } from "../services/multimedia-api.service";
import { PodcastApiService } from "../services/podcast-api.service";

export default {
  name: "upload-media",
  components: {
    ValidatorFormMessage,
    VideoPlayer,
    PodcastPlayer,
  },
  data() {
    return {
      suscriptionTypes: ["Free", "Premium"],
      mediaTypes: ["Book", "Podcast", "Multimedia"],
      form: new FormGroup({
        title: new FormControl("", [
          Validators.required(),
          Validators.minLength(5),
          Validators.maxLength(18),
        ]),
        description: new FormControl("", [
          Validators.required(),
          Validators.minLength(5),
          Validators.maxLength(100),
        ]),
        pic: new FormControl("", [Validators.required(), Validators.url()]),
        url: new FormControl("", [Validators.required(), Validators.url()]),
        premium: new FormControl("", [Validators.required()]),
        type: new FormControl("", [Validators.required()]),
      }),
    };
  },
  methods: {
    uploadMedia() {
      if (!this.form.isValidForm()) return;
      const mediaServices = new Map();
      mediaServices.set("Book", new BookApiService());
      mediaServices.set("Podcast", new PodcastApiService());
      mediaServices.set("Multimedia", new MultimediaApiService());

      const selected = this.form.getControl("type").prop;
      const mediaService = mediaServices.get(selected);

      const resource = this.form.props();
      if(resource.type == "Podcast") resource.url = this.podcastConverter(resource.url);
      if(resource.type == "Multimedia") resource.url = this.videoConverter(resource.url);

      mediaService
        .create(resource)
        .then((response) => {
          this.$toast.add({
            severity: "success",
            summary: `${selected} Uploaded`,
            detail: response.data.message,
            life: 3000,
          });
        })
        .catch((error) => {
          this.$toast.add({
            severity: "error",
            summary: "Server Error",
            detail: error.message,
            life: 3000,
          });
        });
    },
    isSelectedProp(prop) {
      return this.form.getControl("type").prop == prop;
    },

    podcastConverter(url) {
      // url ends with "--{id}"
      const id = url.split("--")[1];
      return `https://widget.spreaker.com/player?episode_id=${id}&theme=dark&chapters-image=true`;
    },

    videoConverter(url) {
      // youtube to embed
      return `https://www.youtube.com/embed/${url.split("v=")[1]}`;
    },

    allowedBookTypes(url) {
      // return allow if url extension is pdf
      return url.endsWith(".pdf") ? 
        this.$t("admin.upload.inputs.url.book.good") :
        this.$t("admin.upload.inputs.url.book.bad");
    },
  },
  created() {
    this.form.getControl("premium").prop = this.suscriptionTypes[0];
    this.form.getControl("type").prop = this.mediaTypes[0];
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
        {{ $t("admin.upload.title") }}
      </h2>

      <!-- media-type -->
      <div class="flex flex-column">
        <label
          for="type"
          class="block text-900 font-medium mb-2"
        >{{
          $t("admin.upload.inputs.type.title")
        }}</label>
        <pv-dropdown
          id="type"
          v-model="form.getControl('type').prop"
          :options="mediaTypes"
          @blur="() => form.validateControl('type')"
          :invalid="form.invalidControl('type')"
        />
        <validator-form-message
          :valid="form.validationControl('type', 'required')"
          :label="$t('admin.upload.validations.type.required')"
        />
      </div>

      <!-- title -->
      <div class="flex flex-column">
        <label
          for="title"
          class="block text-900 font-medium mb-2"
        >{{
          $t("admin.upload.inputs.title.title")
        }}</label>
        <pv-input-text
          id="title"
          type="text"
          v-model="form.getControl('title').prop"
          @blur="() => form.validateControl('title')"
          :invalid="form.invalidControl('title')"
          :placeholder="$t('admin.upload.inputs.title.placeholder')"
        />
        <validator-form-message
          :valid="form.validationControl('title', 'required')"
          :label="$t('admin.upload.validations.title.required')"
        />
        <validator-form-message
          :valid="form.validationControl('title', 'minLength')"
          :label="$t('admin.upload.validations.title.min-length', { size: 5 })"
        />
        <validator-form-message
          :valid="form.validationControl('title', 'maxLength')"
          :label="$t('admin.upload.validations.title.max-length', { size: 18 })"
        />
      </div>

      <!-- description -->
      <div class="flex flex-column">
        <label
          for="description"
          class="block text-900 font-medium mb-2"
        >{{
          $t("admin.upload.inputs.description.title")
        }}</label>
        <pv-text-area
          id="description"
          v-model="form.getControl('description').prop"
          @blur="
            () => {
              form.validateControl('description');
            }
          "
          :invalid="form.invalidControl('description')"
          :placeholder="$t('admin.upload.inputs.description.placeholder')"
        />
        <validator-form-message
          :valid="form.validationControl('description', 'required')"
          :label="$t('admin.upload.validations.description.required')"
        />
        <validator-form-message
          :valid="form.validationControl('description', 'minLength')"
          :label="
            $t('admin.upload.validations.description.min-length', { size: 5 })
          "
        />
        <validator-form-message
          :valid="form.validationControl('description', 'maxLength')"
          :label="
            $t('admin.upload.validations.description.max-length', { size: 100 })
          "
        />
      </div>

      <!-- pic -->
      <div class="flex flex-column">
        <label
          for="pic"
          class="block text-900 font-medium mb-2"
        >{{
          $t("admin.upload.inputs.pic.title")
        }}</label>
        <pv-input-text
          id="pic"
          type="text"
          v-model="form.getControl('pic').prop"
          @blur="() => form.validateControl('pic')"
          :invalid="form.invalidControl('pic')"
          :placeholder="$t('admin.upload.inputs.pic.placeholder')"
        />
        <validator-form-message
          :valid="form.validationControl('pic', 'required')"
          :label="$t('admin.upload.validations.pic.required')"
        />
        <validator-form-message
          :valid="form.validationControl('pic', 'url')"
          :label="$t('admin.upload.validations.pic.url')"
        />
      </div>

      <pv-card class="mt-2 w-full">
        <template #content>
          <pv-image
            width="100%"
            height="100%"
            :fit="'cover'"
            preview
            :src="form.getControl('pic').prop"
          />
        </template>
      </pv-card>

      <!-- url -->
      <div class="flex flex-column">
        <label
          for="url"
          class="block text-900 font-medium mb-2"
        >{{
          $t("admin.upload.inputs.url.title")
        }}</label>
        <pv-input-text
          id="url"
          type="text"
          v-model="form.getControl('url').prop"
          @blur="() => form.validateControl('url')"
          :invalid="form.invalidControl('url')"
          :placeholder="$t('admin.upload.inputs.url.placeholder')"
        />
        <validator-form-message
          :valid="form.validationControl('url', 'required')"
          :label="$t('admin.upload.validations.url.required')"
        />
        <validator-form-message
          :valid="form.validationControl('url', 'url')"
          :label="$t('admin.upload.validations.url.url')"
        />
      </div>

      <pv-card class="mt-2 w-full h-20rem">
        <template #content>
          <div
            :class="
              isSelectedProp('Book')
                ? 'block'
                : 'hidden'.concat(' w-full h-20rem py-3')
            "
          >
            <h2>{{ allowedBookTypes(form.getControl("url").prop) }}</h2>
          </div>
          <div
            :class="
              isSelectedProp('Podcast')
                ? 'block'
                : 'hidden'.concat(' w-full h-20rem py-3')
            "
          >
            <podcast-player
              :url="podcastConverter(form.getControl('url').prop)"
            />
          </div>
          <div
            :class="
              (isSelectedProp('Multimedia') ? 'block' : 'hidden').concat(
                ' w-full h-20rem py-3',
              )
            "
          >
            <video-player :url="videoConverter(form.getControl('url').prop)" />
          </div>
        </template>
      </pv-card>

      <!-- premium -->
      <div class="flex flex-column">
        <label
          for="premium"
          class="block text-900 font-medium mb-2"
        >{{
          $t("admin.upload.inputs.premium.title")
        }}</label>
        <pv-dropdown
          id="premium"
          v-model="form.getControl('premium').prop"
          :options="suscriptionTypes"
          @blur="() => form.validateControl('premium')"
          :invalid="form.invalidControl('premium')"
        />
        <validator-form-message
          :valid="form.validationControl('premium', 'required')"
          :label="$t('admin.upload.validations.premium.required')"
        />
      </div>

      <pv-button
        @click="
          () => {
            form.validateForm();
            uploadMedia();
          }
        "
        :label="$t('admin.upload.button')"
        icon="pi pi-upload"
        class="m-auto px-5 gap-2"
      />
    </div>
  </div>
</template>
<style scoped></style>
