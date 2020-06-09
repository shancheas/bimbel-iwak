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
          <th>Kelas</th>
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
          <td>{{row.classroom.name}}</td>
          <td>
            <router-link to="/programs" class="btn btn-sm btn-primary">
              <i class="fa fa-eye"></i>
            </router-link>
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "page-visits-table",
  data() {
    return {
      tableData: [],
      search: ''
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
  async created() {
    const id = this.$route.params.id
    const { data } = await this.$api.get(`programs/${id}/students`)
    this.tableData = data.data
  }
};
</script>
<style>
</style>
