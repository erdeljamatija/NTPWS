<template>
    <div>
        <div class="form-group">
            <router-link to="/" class="btn btn-default">Back</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Edit professor</div>
            <div class="panel-body">
                <form v-on:submit="saveForm()">
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Professor first name</label>
                            <input type="text" v-model="professor.firstName" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Professor last name</label>
                            <input type="text" v-model="professor.lastName" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <button class="btn btn-success">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            let app = this;
            let id = app.$route.params.id;
            app.professorId = id;
            axios.get('/api/v1/professors/' + id)
                .then(function (resp) {
                    app.professor = resp.data;
                })
                .catch(function () {
                    alert("Could not load professor")
                });
        },
        data: function () {
            return {
                professorId: null,
                professor: {
                    firstName: '',
                    lastName: ''
                }
            }
        },
        methods: {
            saveForm() {
                event.preventDefault();
                var app = this;
                var newProfessor = app.professor;
                axios.patch('/api/v1/professors/' + app.professorId, newProfessor)
                    .then(function (resp) {
                        if(resp.data == 'fail'){
                            alert("Can't edit. Please login!");
                        }
                        else{
                            app.$router.replace('/professors');
                        }
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not create professor");
                    });
            }
        }
    }
</script>