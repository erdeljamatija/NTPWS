<template>
    <div>
        <div class="form-group">
            <router-link :to="{name: 'createCourse'}" class="btn btn-success">Add new course</router-link>
        </div>
 
        <div class="panel panel-default">
            <div class="panel-heading">Courses list</div>
            <div class="panel-body">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th width="100">&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(course, index) in courses"
                        :key=course.id>
                        <td>{{ course.name }}</td>
                        <td>
                            <router-link :to="{name: 'editCourse', params: {id: course.id}}" class="btn btn-xs btn-default">
                                Edit
                            </router-link>
                            <a href="#"
                               class="btn btn-xs btn-danger"
                               v-on:click="deleteEntry(course.id, index)">
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
                courses: []
            }
        },
        mounted() {
            var app = this;
            axios.get('/api/v1/courses')
                .then(function (resp) {
                    app.courses = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Could not load courses");
                });
        },
        methods: {
            deleteEntry(id, index) {
                if (confirm("Do you really want to delete it?")) {
                    var app = this;
                    axios.delete('/api/v1/courses/' + id)
                        .then(function (resp) {
                            if(resp.data == 'fail'){
                                alert("Can't delete. Please login!");
                            }
                            else{
                                app.courses.splice(index, 1);
                            }
                        })
                        .catch(function (resp) {
                            alert("Could not delete course");
                        });
                }
            }
        }
    }
</script>