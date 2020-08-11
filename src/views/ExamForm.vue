<template>
  <div>
    <div class="container-fluid mt--7">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Dashboard</router-link>
          </li>
          <li class="breadcrumb-item active">Add Exam</li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-xl-12 order-xl-1">
          <card shadow type="secondary">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">Membuat Ujian</h3>
                </div>
                <div class="col-4 text-right">
                  <button @click="submitForm" class="btn btn-sm btn-primary">SIMPAN</button>
                </div>
              </div>
            </div>
            <template>
              <form @submit.prevent>
                <h6 class="heading-small text-muted mb-4">Informasi Umum</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-md-12">
                      <base-input
                        alternative
                        label="Nama Ujian"
                        input-classes="form-control-alternative"
                        v-model="model.name"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <base-input
                        alternative
                        label="Tanggal Ujian"
                        placeholder="Username"
                        input-classes="form-control-alternative"
                      >
                        <datetime
                          type="datetime"
                          inputClass="form-control form-control-alternative"
                          value-zone="Asia/Jakarta"
                          v-model="model.date"
                        ></datetime>
                      </base-input>
                    </div>
                  </div>
                </div>
                <hr />

<!--                <h6 class="heading-small text-muted mb-4">Peserta</h6>-->
<!--                <multiselect v-model="model.member" tag-placeholder="Pilih Peserta" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>-->
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Datetime } from "vue-datetime";
// import Multiselect from 'vue-multiselect'
// import moment from 'moment';
// You need a specific loader for CSS files
import "vue-datetime/dist/vue-datetime.css";
import "vue-multiselect/dist/vue-multiselect.min.css";

export default {
  name: "add-exam",
  components: {
    Datetime,
    // Multiselect
  },
  data() {
    return {
      model: {
        date: `${new Date().getTime()}`,
        name: "",
        member: []
      },
      students: [{
        id: 0,
        name: "Semua Siswa"
      }]
    };
  },
  methods: {
    async submitForm() {
      await this.$api.post('exams', this.model)
      this.$router.push('/dashboard')
    },
    async getStudents() {
      const { data } = await  this.$api.get('students')
      this.students = [
          ...this.students,
          data.students
      ]
    }
  },
  created() {
    // this.getStudents();
  }
};
</script>
<style></style>
