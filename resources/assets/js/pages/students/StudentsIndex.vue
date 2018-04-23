<template>
    <div>
        <div class="form-group">
            <router-link :to="{name: 'createStudent'}" class="btn btn-success">Add new student</router-link>
        </div>
 
        <div class="panel panel-default">
            <div class="panel-heading">Students list</div>
            <div class="panel-body">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th width="100">&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(student, index) in students"
                        :key=student.id>
                        <td>{{ student.firstName }}</td>
                        <td>{{ student.lastName }}</td>
                        <td>
                            <router-link :to="{name: 'editStudent', params: {id: student.id}}" class="btn btn-xs btn-default">
                                Edit
                            </router-link>
                            <a href="#"
                               class="btn btn-xs btn-danger"
                               v-on:click="deleteEntry(student.id, index)">
                                Delete
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        data: function () {
            return {
                students: []
            }
        },
        mounted() {
            var app = this;
            axios.get('/api/v1/students')
                .then(function (resp) {
                    app.students = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Could not load students");
                });
        },
        methods: {
            deleteEntry(id, index) {
                if (confirm("Do you really want to delete it?")) {
                    var app = this;
                    axios.delete('/api/v1/students/' + id)
                        .then(function (resp) {
                            if(resp.data == 'fail'){
                                alert("Can't delete. Please login!");
                            }
                            else{
                                app.students.splice(index, 1);
                            }
                        })
                        .catch(function (resp) {
                            alert("Could not delete student");
                        });
                }
            }
        }
    }
</script>