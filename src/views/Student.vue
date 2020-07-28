<template>
  <div>
    <!--Charts-->
    <div class="container-fluid mt--7">
      <h1 class="display-2 text-white">{{ program.name }}</h1>
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

export default {
  components: {
    StudentTable
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
    const students = await this.$api.get(`students`)
    this.tableData = students.data.data
  }
};
</script>
<style></style>
