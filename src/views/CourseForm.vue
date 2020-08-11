<template>
  <div>
    <div class="container-fluid mt--7">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Dashboard</router-link>
          </li>
          <li class="breadcrumb-item active">Membuat Soal Ujian</li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-xl-12 order-xl-1">
          <card shadow type="secondary">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">Membuat Soal Ujian</h3>
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
                          label="Nama Mata Pelajaran"
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
                <hr class="my-4" />
                <!-- Description -->
                <h6 class="heading-small text-muted mb-4">Gambar Soal</h6>
                <div class="pl-lg-4">
                  <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
                </div>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vue2Dropzone from "vue2-dropzone";
import { Datetime } from "vue-datetime";
import moment from 'moment';
// You need a specific loader for CSS files
import "vue-datetime/dist/vue-datetime.css";

export default {
  name: "add-course",
  props: {
    title: {
      type: String,
      description: "Title for breadcumb",
      default: ""
    }
  },
  components: {
    vueDropzone: vue2Dropzone,
    Datetime
  },
  data() {
    return {
      dropzoneOptions: null,
      model: {
        date: moment().subtract(4, 'day'),
        // time: null,
        name: ""
      }
    };
  },
  created() {
    // const id = this.$route.params.id;
    this.dropzoneOptions = {
      url: `http://localhost:8000/api/courses/upload`,
      maxFilesize: 0.5,
      autoProcessQueue: false,
      addRemoveLinks: true,
      // acceptedFiles: "application/vnd.ms-excel",
      dictDefaultMessage: "<i class='fa fa-upload'></i> UPLOAD SOAL",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    };
  },
  methods: {
    sendingEvent(file, xhr, formData) {
      formData.append("name", this.examName);
      formData.append("datetime", this.examName);
    },
    uploadFile() {
      this.$refs.myVueDropzone.processQueue();
    },
    uploadComplete(response) {
      if (response.status == "success") {
        this.$toast.success("Berhasil mengunggah soal");
        this.model = false;
        this.$emit("onSuccess");
      }
    },
    async submitForm() {
      const id = this.$route.params.id

      await this.$api.post(`courses/${id}`, this.model)
      this.$router.push(`/exams/${id}/course`)
    }
  }
};
</script>
<style></style>
