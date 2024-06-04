<script>
import { LocalAuthApiService } from '@/shared/services/local-auth-api.service';

export default {
    data(){
        return {
            localAuthApi: new LocalAuthApiService()
        }
    },
    mounted(){
        this.localAuthApi.removeUser();
        window.location.href = "/"
    }
}
</script>
<template></template>
<script scoped></script>