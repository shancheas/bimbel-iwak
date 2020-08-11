<template>
  <div>
    <div class="card">
      <div class="card-header border-0">
        <div class="row align-items-center">
          <div class="col">
            <h3 class="mb-0">Daftar Mata Pelajaran</h3>
          </div>
          <div class="col text-right">
            <button type="button" @click="$router.push(`/courses/${$route.params.id}/create`)" class="btn btn-sm btn-primary">
              <i class="fa fa-plus"></i> Tambah Mata Ujian
            </button>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <base-table thead-classes="thead-light" :data="tableData">
          <template slot="columns">
            <th>Nama</th>
            <th>Tanggal Ujian</th>
            <th></th>
          </template>

          <template slot-scope="{row}">
            <th scope="row">{{row.name}}</th>
            <th scope="row">{{formatDate(row.date)}}</th>
            <td class="text-right">
              <button @click="$router.push(`/exams/${row.id}/course`)" type="button" class="btn btn-sm btn-primary" title="Buka Soal">
                <i class="fa fa-external-link-alt"></i>
              </button>
              <button @click="deleteExam(row.id)" type="button" class="btn btn-sm btn-success" title="Ganti Soal">
                <i class="fa fa-download"></i>
              </button>
              <button @click="deleteExam(row.id)" type="button" class="btn btn-sm btn-danger" title="Ganti Soal">
                <i class="fa fa-trash"></i>
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
import moment from 'moment';

export default {
  name: "page-exam-table",
  props: {
    data: {
      type: Array,
      description: "table data",
      require: true
    }
  },
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
    formatDate(dattime) {
      const d = dattime == null ? Date.now() : dattime
      moment.locale('id')
      return moment(d).format('LLLL')
    },
    async deleteExam(id) {
      await this.$api.delete(`courses/${id}`)
      await this.getCourses()
    },
    async getCourses() {
      const id = this.$route.params.id;
      const { data } = await this.$api.get(`exams/${id}`);
      this.tableData = data.exam.courses
    }
  },
  created() {
    this.getCourses()
  }
};
</script>
<style>
</style>
