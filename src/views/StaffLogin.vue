<template>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-header bg-transparent">
                        <div class="text-center text-muted">
                            <small>Silahkan login terlebih dahulu</small>
                        </div>
                    </div>
                    <div class="card-body px-lg-5 py-lg-5">
                        <form role="form">
                            <base-input class="input-group-alternative mb-3"
                                        placeholder="Username"
                                        addon-left-icon="ni ni-email-83"
                                        v-model="model.email">
                            </base-input>

                            <base-input class="input-group-alternative"
                                        placeholder="Password"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="model.password">
                            </base-input>

                            <div class="text-center mt-4">
                                <base-button @click="login" type="primary" class="my-4">Sign in</base-button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      model: {
        email: "admin@email.com",
        password: "password1"
      }
    };
  },
  methods: {
    async login() {
      const response = await this.$api.post('/login', this.model)

      if (response.ok)
        this.$router.push('/dashboard')
      else
        this.$toast.error(response.data.message)
    }
  }
};
</script>
<style>
</style>