<template>
    <div>
        <div class="form-group">
            <router-link to="/" class="btn btn-default">Back</router-link>
        </div>
 
        <div class="panel panel-default">
            <div class="panel-heading">Add new student</div>
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
                            <button class="btn btn-success">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        data: function () {
            return {
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
                axios.post('/api/v1/students', newStudent)
                    .then(function (resp) {
                        if(resp.data == 'fail'){
                            alert("Can't create. Please login!");
                        }
                        else{
                            app.$router.push({path: '/students'});
                        }
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not add new student");
                    });
            }
        }
    }
</script>