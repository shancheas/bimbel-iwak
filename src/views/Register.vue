<template>
    <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
                <div class="card-body px-lg-5 py-lg-5">
                    <div class="text-center text-muted mb-4">
                        <small>Masukan Data Diri Anda !</small>
                    </div>
                    <form role="form">

                        <base-input 
                        :valid="error.name.valid"
                        :error="error.name.error"
                        class="input-group-alternative mb-3"
                                    placeholder="Name"
                                    addon-left-icon="ni ni-hat-3"
                                    v-model="model.name">
                        </base-input>

                        <base-input class="input-group-alternative"
                        :valid="error.registration_number.valid"
                        :error="error.registration_number.error"
                                    placeholder="Nomor Bimbel"
                                    addon-left-icon="ni ni-ruler-pencil"
                                    v-model="model.registration_number">
                        </base-input>

                        <base-input class="input-group-alternative mb-3"
                        :valid="error.email.valid"
                        :error="error.email.error"
                                    placeholder="Email"
                                    addon-left-icon="ni ni-email-83"
                                    v-model="model.email">
                        </base-input>

                        <base-input class="input-group-alternative"
                        :valid="error.password.valid"
                        :error="error.password.error"
                                    placeholder="Password"
                                    type="password"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    v-model="model.password">
                        </base-input>
                        
                        <div class="text-center">
                            <base-button @click="register" type="primary" class="my-4">Buat Akun</base-button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-6">
                    <a href="#" class="text-light">
                        <small></small>
                    </a>
                </div>
                <div class="col-6 text-right">
                    <router-link to="/login" class="text-muted font-italic">
                        <span class="text-secondary font-weight-700">Atau Login ke Akun Anda</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'register',
    data() {
      return {
        model: {
          name: '',
          email: '',
          password: '',
          registration_number: ''
        },
        error: {
            name: {
                valid: null,
                error: '',
            },
            email: {
                valid: null,
                error: '',
            },
            password: {
                valid: null,
                error: '',
            },
            registration_number: {
                valid: null,
                error: '',
            }
        }
      }
    },
    methods: {
        async register() {
            const response = await this.$api.post('/students', this.model)
            const app = this
            if (response.ok) {
                this.$toast.success("Data Berhasil didaftarkan, Harap tunggu pihak bimbel memverifikasi")
                setTimeout(function () {
                    app.$router.push('/login')
                }, 1000);
            } else {
                const data = response.data
                
                if (data.name) {
                    this.error.name.valid = false
                    this.error.name.error = data.name[0]
                } else {
                    this.error.name.valid = null
                    this.error.name.error = ''
                }

                if (data.email) {
                    this.error.email.valid = false
                    this.error.email.error = data.email[0]
                } else {
                    this.error.email.valid = null
                    this.error.email.error = ''
                }

                if (data.password) {
                    this.error.password.valid = false
                    this.error.password.error = data.password[0]
                } else {
                    this.error.password.valid = null
                    this.error.password.error = ''
                }

                if (data.registration_number) {
                    this.error.registration_number.valid = false
                    this.error.registration_number.error = data.registration_number[0]
                } else {
                    this.error.registration_number.valid = null
                    this.error.registration_number.error = ''
                }
            }
        }
    }
  }
</script>
<style>
</style>
