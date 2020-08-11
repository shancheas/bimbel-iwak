<template>
  <div>
    <!--Charts-->
    <div class="container-fluid mt--7">
      <h1 class="display-2 text-white">{{ exam.name }}</h1>
      <!--Tables-->

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Dashboard</router-link>
          </li>
          <li class="breadcrumb-item active">{{ exam.name }}</li>
        </ol>
      </nav>
      <div class="row mt-5">
        <div class="col-xl-12 mb-5 mb-xl-0">
          <course-table :data="tableData"></course-table>
        </div>
      </div>
      <!--End tables-->
      <!--Tables-->
      <div class="row mt-5">
        <div class="col-xl-12 mb-5 mb-xl-0">
<!--          <student-table-->
<!--              :data="tableData"-->
<!--          ></student-table>-->
        </div>
      </div>
      <!--End tables-->
    </div>
  </div>
</template>
<script>
// import StudentTable from "./Tables/StudentTable";
import CourseTable from "./Tables/CourseTable";

export default {
  components: {
    // StudentTable,
    CourseTable
  },
  data() {
    return {
      examModal: false,
      tableData: [],
      exam: {
        name: ''
      }
    };
  },
  methods: {
    async getCourses() {
      const id = this.$route.params.id;
      const { data } = await this.$api.get(`exams/${id}`);
      this.exam = data.exam
      this.tableData = this.exam.courses
    }
  },
  created() {
    this.getCourses()
  }
};
</script>
<style></style>
