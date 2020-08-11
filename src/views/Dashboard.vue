<template>
  <div>
    <!--Charts-->
    <div class="container-fluid mt--7">
      <!--Tables-->
      <div class="row mt-5">
        <div class="col-xl-12 mb-5 mb-xl-0">
          <exam-table></exam-table>
        </div>
      </div>
      <!--End tables-->
    </div>
  </div>
</template>
<script>
import ExamTable from "./Tables/ExamTable";

export default {
  components: {
    ExamTable
  },
  data() {
    return {};
  }
};
</script>
<style></style>
