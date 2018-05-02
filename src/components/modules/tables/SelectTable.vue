<template>
    <transition name="el-zoom-in-top">
        <div class="content-wrapper">
       <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>Select Table<small>It's all start from here <i class="ti-heart"></i><i class="ti-export"></i><i class="ti-printer"></i></small></h1>
            <ol class="breadcrumb">
                <li><router-link to="/"> <i class="ti-home"></i></router-link></li>
                <li><a href="#">Table</a></li>
                <li class="active">Select Table</li>
            </ol>
        </section>
  
            <!-- Main content -->
            <section class="content">
               <!-- Basic Tables-->
                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title">Single select</h3>
                        <div class="box-tools pull-right">
                            <button type="button" data-widget="collapse" data-toggle="tooltip" title="Collapse" class="btn btn-box-tool"><i class="ti-minus"></i></button>
                            <button type="button" data-widget="remove" data-toggle="tooltip" title="Remove" class="btn btn-box-tool"><i class="ti-close"></i></button>
                        </div>
                    </div>
                    <div class="box-body" style="min-height:400px;">
                          <el-table
                            ref="singleTable"
                            :data="tableData"
                            highlight-current-row
                            @current-change="handleCurrentChange"
                            style="width: 100%">
                            <el-table-column
                              type="index"
                              width="50">
                            </el-table-column>
                            <el-table-column
                              property="date"
                              label="Date"
                              width="120">
                            </el-table-column>
                            <el-table-column
                              property="name"
                              label="Name"
                              width="120">
                            </el-table-column>
                            <el-table-column
                              property="address"
                              label="Address">
                            </el-table-column>
                          </el-table>
                          <div style="margin-top: 20px">
                            <el-button @click="setCurrent(tableData[1])">Select second row</el-button>
                            <el-button @click="setCurrent()">Clear selection</el-button>
                          </div>
                    </div>
                </div>
                <!-- End of Basic Tables-->
                <!-- Multiple select-->
                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title">Multiple Select</h3>
                        <div class="box-tools pull-right">
                            <button type="button" data-widget="collapse" data-toggle="tooltip" title="Collapse" class="btn btn-box-tool"><i class="ti-minus"></i></button>
                            <button type="button" data-widget="remove" data-toggle="tooltip" title="Remove" class="btn btn-box-tool"><i class="ti-close"></i></button>
                        </div>
                    </div>
                    <div class="box-body" style="min-height:400px;">
                            <el-table
                                ref="multipleTable"
                                :data="tableData3"
                                border
                                style="width: 100%"
                                @selection-change="handleSelectionChange">
                                <el-table-column
                                  type="selection"
                                  width="55">
                                </el-table-column>
                                <el-table-column
                                  label="Date"
                                  width="120">
                                  <template scope="scope">{{ scope.row.date }}</template>
                                </el-table-column>
                                <el-table-column
                                  property="name"
                                  label="Name"
                                  width="120">
                                </el-table-column>
                                <el-table-column
                                  property="address"
                                  label="Address"
                                  show-overflow-tooltip>
                                </el-table-column>
                              </el-table>
                              <div style="margin-top: 20px">
                                <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">Toggle selection status of second and third rows</el-button>
                                <el-button @click="toggleSelection()">Clear selection</el-button>
                              </div>
                    </div>
                </div>
                <!-- End of Multiple select-->
            

                
                
            </section>
            <!-- /.content -->
        </div>
    </transition>
</template>
<script>
    export default {
      name: 'SelectTable',
      data: function () {
        return {
          tableData: [{
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }],
          tableData3: [{
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-08',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-06',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-07',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }],
          currentRow: null,
          multipleSelection: []
        }
      },

      methods: {
        setCurrent: function (row) {
          this.$refs.singleTable.setCurrentRow(row)
        },
        handleCurrentChange: function (val) {
          this.currentRow = val
        },
        // multiselect
        toggleSelection: function (rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row)
            })
          } else {
            this.$refs.multipleTable.clearSelection()
          }
        },
        handleSelectionChange: function (val) {
          this.multipleSelection = val
        }
      }
    }
</script>
