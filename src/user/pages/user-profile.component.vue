<script>
import LinkButton from "@/shared/components/link-button.component.vue";

import InformationCard from "../components/information-card.component.vue";
import { LocalAuthApiService } from "@/shared/services/local-auth-api.service";

export default {
  components: {
    LinkButton,

    InformationCard,
  },
  data() {
    return {
      user: null,
      localAuthApi: new LocalAuthApiService()
    }
  },
  props: {
    
  },
  created(){
    this.user = this.localAuthApi.getLocalUser();
  }
}
</script>

<template>
    <div class="flex flex-column-reverse gap-5 md:gap-3 md:justify-content-evenly md:align-items-center md:flex-row">
        <div class="flex flex-column gap-4 md:flex-row">
          <div class="flex flex-column gap-4 md:flex-column">
            <information-card  :title="$t('profile.payment-details.title')">
              <p>{{ $t("profile.payment-details.card-number") }}: <span>{{ this.user?.cardNumber }}</span></p>
              <p>{{ $t("profile.payment-details.alias") }}: @<span>{{ this.user?.name }}</span></p>
            </information-card>

            <information-card  :title="$t('profile.personal-info.title')">
              <p>{{ $t("profile.personal-info.first-name") }}: <span>{{ this.user?.name }}</span></p>
              <p>{{ $t("profile.personal-info.email") }}: <span>{{ this.user?.email }}</span></p>
            </information-card>
          </div>

          <div class="md:flex md:align-items-center">
            <information-card  :title="$t('profile.biography')">
              <p>{{ this.user?.description }}</p>
            </information-card>
          </div>
        </div>
        <div class="flex flex-column gap-5 align-items-center">
          <p class="text-2xl text-center">{{ $t("profile.welcome-back") }}, <span class="text-2xl font-bold">@{{ this.user?.name.toUpperCase() }}</span></p>
          <pv-image class="flex justify-content-center" alt="profile user image">
            <template #image>
              <img  class="w-20rem h-20rem border-circle" :src="this.user?.photo"/>
            </template>
          </pv-image>
        </div>
    </div>
</template>

<style></style>
