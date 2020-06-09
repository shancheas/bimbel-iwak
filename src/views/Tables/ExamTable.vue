<template>
  <div>
    <div class="card">
      <div class="card-header border-0">
        <div class="row align-items-center">
          <div class="col">
            <h3 class="mb-0">Soal</h3>
          </div>
          <div class="col text-right">
            <button type="button" @click="modalExam = true" class="btn btn-sm btn-primary">
              <i class="fa fa-plus"></i> Tambah Soal
            </button>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <base-table thead-classes="thead-light" :data="tableData">
          <template slot="columns">
            <th>Nama</th>
            <th></th>
          </template>

          <template slot-scope="{row}">
            <th scope="row">{{row.name}}</th>
            <td class="text-right">
              <button @click="$router.push(`/exams/${row.id}`)" type="button" class="btn btn-sm btn-primary" title="Buka Soal">
                <i class="fa fa-external-link-alt"></i>
              </button>
              <button type="button" class="btn btn-sm btn-success" title="Download Jawaban">
                <i class="fa fa-download"></i>
              </button>
              <button type="button" class="btn btn-sm btn-danger" title="Ganti Soal">
                <i class="fa fa-redo-alt"></i>
              </button>
            </td>
          </template>
        </base-table>
      </div>
    </div>
    <exam-modal 
      :value="modalExam" 
      @onModalClose="onChange"
      @onSuccess="onSuccess"
    />
  </div>
</template>
<script>
import ExamModal from "../Program/ExamModal";
export default {
  name: "page-exam-table",
  components: {
    ExamModal
  },
  data() {
    return {
      modalExam: false,
      tableData: []
    };
  },
  methods: {
    onChange(value) {
      this.modalExam = value
    },
    onSuccess() {
      this.getExamList()
    },
    async getExamList() {
      const id = this.$route.params.id
      const { data } = await this.$api.get(`programs/${id}/courses`)
      this.tableData = data.data
    }
  },
  created() {
    this.getExamList()
  }
};
</script>
<style>
</style>
