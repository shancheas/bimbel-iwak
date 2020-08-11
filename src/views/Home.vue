<template>
  <div>
    <!--Charts-->
    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">

          <div class="card card-profile shadow">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img src="img/icons/siswa.png" class="rounded-circle">
                  </a>
                </div>
              </div>
            </div>
            <div class="card-body pt-0 pt-md-4">
              <div class="row mb-5">
                <div class="col">
                  <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                  </div>
                </div>
              </div>
              <div class="text-center">
                <h3>
                  Jessica Jones<span class="font-weight-light">, 27</span>
                </h3>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>123312233
                </div>
                <hr class="my-4"/>
                <base-button block type="primary">Ganti Password</base-button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-8 order-xl-1">
          <course-list />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import CourseList from "@/views/Dashboard/CourseList";

export default {
  name: 'user-profile',
  components: {
    CourseList
  },
  data() {
    return {
      model: {
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        zipCode: '',
        about: '',
      }
    }
  },
};
</script>
<style></style>
