<template>
  <card shadow type="secondary">
    <div slot="header" class="bg-white border-0">
      <div class="row align-items-center">
        <div class="col-8">
          <h3 class="mb-0">Soal Soal</h3>
        </div>
        <div class="col-4 text-right">
          <!--                  <a href="#!" class="btn btn-sm btn-primary">Settings</a>-->
        </div>
      </div>
    </div>
    <template>
      <div v-for="exam in data" v-bind:key="exam.id">
        <h6 class="heading-small text-muted mb-4">{{ exam.name }}</h6>
        <div class="pl-lg-4">
          <course-card v-for="course in exam.courses" v-bind:key="course.id" :course="course"/>
        </div>
        <hr class="my-4"/>
      </div>
    </template>
  </card>
</template>

<script>

import CourseCard from "@/components/CourseCard";

export default {
  name: "CourseList",
  components: {
    CourseCard
  },
  data() {
    return {
      data: []
    }
  },
  methods: {
    async getCourses() {
      const { data } = await this.$api.get('exams')
      this.data = data.exams
    }
  },
  created() {
    this.getCourses()
  }
}
</script>
