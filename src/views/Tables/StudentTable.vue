<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Siswa</h3>
        </div>
        <div class="col text-right">
          <label>
            <input
              type="search"
              class="form-control form-control-sm"
              placeholder="Cari Siswa"
              aria-controls="datatable-basic"
              v-model="search"
            />
          </label>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light" :data="students">
        <template slot="columns">
          <th>Nama</th>
          <th>Nomor Registrasi</th>
          <th>status</th>
          <th></th>
        </template>

        <template slot-scope="{row}">
          <th class="table-user" scope="row">
            <img
              alt="Image placeholder"
              src="img/icons/siswa.png"
              class="avatar avatar-sm rounded-circle mr-3"
            />
            {{row.name}}
          </th>
          <td>{{row.registration_number}}</td>
          <td>
            <badge pill :type="row.approve == 1 ? `success` : `danger`">
              {{ row.approve == 1 ? 'Terverifikasi' : 'Belum Diverifikasi' }}
            </badge>
          </td>
          <td>
            <router-link to="/programs" class="btn btn-sm btn-primary">
              <i class="fa fa-eye"></i>
            </router-link>
            <button @click="approve(row.id)" :class="{disabled: row.approve == 1}" type="button" class="btn btn-sm btn-success" title="Verifikasi Siswa">
              <i class="fa fa-check"></i>
            </button>
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "page-visits-table",
  props: {
    setting: {
      type: Boolean,
      default: false,
      description: 'Menunjukan bahwa ini table setting'
    }
  },
  data() {
    return {
      search: '',
      tableData: []
    };
  },
  computed: {
    students() {
      const app = this
      return this.tableData.filter(student => {
        return student.name.includes(app.search)
      })
    }
  },
  methods: {
    async approve(id) {
      const students = await this.$api.put(`students/approve/${id}`)

      if (students.ok) {
        const app = this
        this.$toast.success(students.data.message)
        setTimeout(function () {
          app.getStudents()
        }, 1000);
      }
    },
    async getStudents() {
      const { data } = await this.$api.get(`students`)
      this.tableData = data.students
    }
  },
  created() {
    this.getStudents();
  }
};
</script>
<style>
</style>
