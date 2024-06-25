<script>
import InformationCard from "@/iam/components/information-card.component.vue";
import User from "@/iam/models/user.entity";
import { useAuthenticationStore } from "@/iam/services/authentication.store";
import { UserApiService } from "@/iam/services/user-api.service";

export default {
  components: {
    InformationCard,
  },
  data() {
    return {
      userService: new UserApiService(),
      user: null,
    }
  },
  props: {
    
  },
  created(){
    const authenticationStorage = useAuthenticationStore();
    const userId = authenticationStorage.currentUserId;
    this.userService.getById(userId).then(response => {
      this.user = User.fromResponse(response.data);
    });
  }
}
</script>

<template>
  <div class="flex flex-column-reverse gap-5 md:gap-3 md:justify-content-evenly md:align-items-center md:flex-row">
    <div class="flex flex-column gap-4 md:flex-row">
      <div class="flex flex-column gap-4 md:flex-column">
        <information-card :title="$t('profile.payment-details.title')">
          <p>{{ $t("profile.payment-details.card-number") }}: <span>{{ this.user?.cardNumber }}</span></p>
          <p>{{ $t("profile.payment-details.alias") }}: @<span>{{ this.user?.username }}</span></p>
        </information-card>

        <information-card :title="$t('profile.personal-info.title')">
          <p>{{ $t("profile.personal-info.first-name") }}: <span>{{ this.user?.username }}</span></p>
          <p>{{ $t("profile.personal-info.email") }}: <span>{{ this.user?.email }}</span></p>
        </information-card>
      </div>

      <div class="md:flex md:align-items-center">
        <information-card :title="$t('profile.biography')">
          <p>{{ this.user?.description }}</p>
        </information-card>
      </div>
    </div>
    <div class="flex flex-column gap-5 align-items-center">
      <p class="text-2xl text-center">
        {{ $t("profile.welcome-back") }}, <span class="text-2xl font-bold">@{{ this.user?.username.toUpperCase() }}</span>
      </p>
      <pv-image
        class="flex justify-content-center"
        alt="profile user image"
      >
        <template #image>
          <img
            class="w-20rem h-20rem border-circle"
            :src="this.user?.photo"
          >
        </template>
      </pv-image>
    </div>
  </div>
</template>

<style></style>
