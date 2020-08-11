<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Program</h3>
        </div>
        <div class="col text-right">
          <!-- <a href="#!" class="btn btn-sm btn-primary"><i class="fa fa-plus"></i> Tambah Kelas</a> -->
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light"
                  :data="tableData">
        <template slot="columns">
          <th>Nama</th>
          <th>Jumlah Siswa</th>
          <th>Soal Diupload</th>
          <th></th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            {{row.name}}
          </th>
          <td>
            {{row.students_count}}
          </td>
          <td>
            {{row.courses_count}}
          </td>
          <td>
            <router-link :to="`/programs/${row.id}`" class="btn btn-sm btn-primary"><i class="fa fa-eye"></i></router-link>
          </td>
        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'page-visits-table',
    data() {
      return {
        tableData: []
      }
    },
    async created() {
      const { data } = await this.$api.get('programs')
      this.tableData = data.data
    }
  }
</script>
<style>
</style>
