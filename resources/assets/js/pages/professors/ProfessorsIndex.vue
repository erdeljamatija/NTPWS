<template>
    <div>
        <div class="form-group">
            <router-link :to="{name: 'createProfessor'}" class="btn btn-success">Add new professor</router-link>
        </div>
 
        <div class="panel panel-default">
            <div class="panel-heading">Professors list</div>
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
                    <tr v-for="(professor, index) in professors"
                        :key=professor.id>
                        <td>{{ professor.firstName }}</td>
                        <td>{{ professor.lastName }}</td>
                        <td>
                            <router-link :to="{name: 'editProfessor', params: {id: professor.id}}" class="btn btn-xs btn-default">
                                Edit
                            </router-link>
                            <a href="#"
                               class="btn btn-xs btn-danger"
                               v-on:click="deleteEntry(professor.id, index)">
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
                professors: []
            }
        },
        mounted() {
            var app = this;
            axios.get('/api/v1/professors')
                .then(function (resp) {
                    app.professors = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Could not load professors");
                });
        },
        methods: {
            deleteEntry(id, index) {
                if (confirm("Do you really want to delete it?")) {
                    var app = this;
                    axios.delete('/api/v1/professors/' + id)
                        .then(function (resp) {
                            if(resp.data == 'fail'){
                                alert("Can't delete. Please login!");
                            }
                            else{
                                app.professors.splice(index, 1);
                            }
                        })
                        .catch(function (resp) {
                            alert("Could not delete professor");
                        });
                }
            }
        }
    }
</script>