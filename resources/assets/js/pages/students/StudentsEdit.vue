<template>
    <div>
        <div class="form-group">
            <router-link to="/" class="btn btn-default">Back</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Edit student</div>
            <div class="panel-body">
                <form v-on:submit="saveForm()">
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Student first name</label>
                            <input type="text" v-model="student.firstName" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Student last name</label>
                            <input type="text" v-model="student.lastName" class="form-control">
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
            app.studentId = id;
            axios.get('/api/v1/students/' + id)
                .then(function (resp) {
                    app.student = resp.data;
                })
                .catch(function () {
                    alert("Could not load student")
                });
        },
        data: function () {
            return {
                studentId: null,
                student: {
                    firstName: '',
                    lastName: ''
                }
            }
        },
        methods: {
            saveForm() {
                event.preventDefault();
                var app = this;
                var newStudent = app.student;
                axios.patch('/api/v1/students/' + app.studentId, newStudent)
                    .then(function (resp) {
                        if(resp.data == 'fail'){
                            alert("Can't edit. Please login!");
                        }
                        else{
                            app.$router.replace('/students');
                        }                      
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not create student");
                    });
            }
        }
    }
</script>