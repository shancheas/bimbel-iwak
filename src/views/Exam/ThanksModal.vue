<template>
  <modal
    :show.sync="model"
    gradient="success"
    :showClose="false"
    modal-classes="modal-success modal-dialog-centered"
  >
    <h6 slot="header" class="modal-title" id="modal-title-notification">Your attention is required</h6>

    <div class="py-3 text-center">
      <i class="ni ni-bell-55 ni-3x"></i>
      <h4 class="heading mt-4">ujian telah selasai</h4>
      <p>Terima Kasih anda sudah mengerjakan ujian, hasil akan dilaporkan langsung oleh guru terkait</p>
    </div>

    <template slot="footer">
      <router-link to="/dashboard">
        <base-button @click="$emit('onSubmit')" type="white">Oke</base-button>
      </router-link>
      <base-button
        type="link"
        text-color="white"
        class="ml-auto d-none"
        @click="model = false"
      >Close</base-button>
    </template>
  </modal>
</template>
<script>
export default {
  props: {
    model: {
      type: Boolean,
      default: false,
      description: "for modal"
    }
  }
};
</script>