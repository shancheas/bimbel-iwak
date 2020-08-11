<template>
  <stats-card class="bg-gradient-primary mb-2">
    <!-- Card body -->
    <div class="row">
      <div class="col">
        <h5 class="card-title text-uppercase text-muted mb-0 text-white">{{ course.name }}</h5>
        <span class="h2 font-weight-bold mb-0 text-white">{{ course.total }} Soal</span>
      </div>
      <div class="col-auto">
        <router-link :to="`/exams/${course.id}`">
          <button type="button" class="btn btn-sm btn-primary">Belum Dikerjakan</button>
        </router-link>
      </div>
    </div>
    <p class="mt-3 mb-0 text-sm">
      <span class="text-nowrap text-white"><small>{{ getTime }}</small></span>
    </p>
  </stats-card>
</template>

<script>
import moment from 'moment'
export default {
  name: "CourseCard",
  props: {
    course: {
      type: Object,
      description: "The Course",
      require: true
    }
  },
  computed: {
    getTime() {
      moment.locale('id')
      return moment(this.course.created_at).format('LLL')
    }
  }
}
</script>
