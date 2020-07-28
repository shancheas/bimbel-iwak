<template>
  <div class="row justify-content-center">
    <div class="col-lg-7 col-md-9">
      <div class="card bg-teal shadow border-0">
        <div class="row">
          <div
            class="col-sm text-center pt-7"
            style="background: url('https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/img-1-1000x600.jpg')"
          >
            <img src="img/brand/logo-text2.png" style="width: 100%" />
          </div>
          <div class="col-sm">
            <div class="card-body px-lg-5 py-lg-7">
              <form role="form">
                <base-input
                  class="input-group-alternative mb-3"
                  placeholder="Username"
                  addon-left-icon="ni ni-email-83"
                  v-model="model.username"
                ></base-input>

                <base-input
                  class="input-group-alternative"
                  placeholder="Password"
                  type="password"
                  addon-left-icon="ni ni-lock-circle-open"
                  v-model="model.password"
                ></base-input>

                <div class="text-center">
                  <base-button @click="login" type="primary" class="my-4">Sign in</base-button>
                </div>
                <router-link to="/register" class="text-muted">
                  <small>Tidak Memiliki Akun?</small>
                </router-link>
              </form>
            </div>
          </div>
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
        username: "",
        password: ""
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
