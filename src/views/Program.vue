<template>
  <div>
    <!--Charts-->
    <div class="container-fluid mt--7">
      <h1 class="display-2 text-white">{{ program.name }}</h1>
      <!--Tables-->
      <div class="row mt-5">
        <div class="col-xl-12 mb-5 mb-xl-0">
          <exam-table></exam-table>
        </div>
      </div>
      <!--End tables-->
      <!--Tables-->
      <div class="row mt-5">
        <div class="col-xl-12 mb-5 mb-xl-0">
          <student-table
            :data="tableData"
          ></student-table>
        </div>
      </div>
      <!--End tables-->
    </div>
  </div>
</template>
<script>
import StudentTable from "./Tables/StudentTable";
import ExamTable from "./Tables/ExamTable";

export default {
  components: {
    StudentTable,
    ExamTable
  },
  data() {
    return {
      examModal: false,
      tableData: [],
      program: {
        name: ''
      }
    };
  },
  async created() {
    const id = this.$route.params.id
    const { data } = await this.$api.get(`programs/${id}`)
    this.program = data.data

    const students = await this.$api.get(`programs/${id}/students`)
    this.tableData = students.data.data
  }
};
</script>
<style></style>
