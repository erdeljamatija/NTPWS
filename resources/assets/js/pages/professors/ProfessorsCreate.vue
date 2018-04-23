<template>
    <div>
        <div class="form-group">
            <router-link to="/" class="btn btn-default">Back</router-link>
        </div>
 
        <div class="panel panel-default">
            <div class="panel-heading">Add new professor</div>
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
                axios.post('/api/v1/professors', newProfessor)
                    .then(function (resp) {
                        if(resp.data == 'fail'){
                            alert("Can't create. Please login!");
                        }
                        else{
                            app.$router.push({path: '/professors'});
                        }
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not add new professor");
                    });
            }
        }
    }
</script>