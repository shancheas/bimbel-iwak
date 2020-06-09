<template>
  <modal :show.sync="model" body-classes="p-0" modal-classes="modal-dialog-centered modal-sm">
    <card type="secondary" shadow body-classes="px-lg-5 py-lg-5" class="border-0">
      <template>
        <div class="text-center text-muted mb-4">
          <small>
            Upload soal untuk programs
            <br />
            <b>{{ program }}</b>
          </small>
        </div>
        <form role="form">
          <base-input
            alternative
            class="mb-3"
            placeholder="Nama Soal"
            :value="examName"
            @inputChange="inputChange"
          ></base-input>
          <vue-dropzone
            ref="myVueDropzone"
            id="dropzone"
            :options="dropzoneOptions"
            @vdropzone-sending="sendingEvent"
            @vdropzone-complete="uploadComplete"
          ></vue-dropzone>
          <div class="text-center">
            <base-button @click="uploadFile" type="primary" class="my-4">UPLOAD</base-button>
          </div>
        </form>
      </template>
    </card>
  </modal>
</template>
<script>
import vue2Dropzone from "vue2-dropzone";

export default {
  name: "exam-modal",
  components: {
    vueDropzone: vue2Dropzone
  },
  props: {
    value: {
      type: Boolean,
      default: false,
      description: "Switch value"
    },
    program: {
      type: String,
      default: '',
      description: "name program for title"
    }
  },
  methods: {
    sendingEvent(file, xhr, formData) {
      formData.append("name", this.examName);
    },
    uploadFile() {
      this.$refs.myVueDropzone.processQueue();
    },
    uploadComplete(response) {
      if (response.status == 'success') {
        this.$toast.success("Berhasil mengunggah soal");
        this.model = false;
        this.$emit('onSuccess')
      }
    },
    inputChange(val) {
      this.examName = val;
    }
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("onModalClose", value);
      }
    }
  },
  data() {
    return {
      dropzoneOptions: null,
      examName: ""
    };
  },
  created() {
    const id = this.$route.params.id
    this.dropzoneOptions = {
        url: `http://localhost:8000/api/courses/${id}`,
        maxFilesize: 0.5,
        maxFiles: 1,
        autoProcessQueue: false,
        addRemoveLinks: true,
        // acceptedFiles: "application/vnd.ms-excel",
        dictDefaultMessage: "<i class='fa fa-upload'></i> UPLOAD SOAL",
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
      }
  }
};
</script>