<template>
    <div>
        <div class="form-group">
            <router-link to="/" class="btn btn-default">Back</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Edit course</div>
            <div class="panel-body">
                <form v-on:submit="saveForm()">
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Course name</label>
                            <input type="text" v-model="course.name" class="form-control">
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
            app.courseId = id;
            axios.get('/api/v1/courses/' + id)
                .then(function (resp) {
                    app.course = resp.data;
                })
                .catch(function () {
                    alert("Could not load course")
                });
        },
        data: function () {
            return {
                courseId: null,
                course: {
                    name: ''
                }
            }
        },
        methods: {
            saveForm() {
                event.preventDefault();
                var app = this;
                var newCourse = app.course;
                axios.patch('/api/v1/courses/' + app.courseId, newCourse)
                    .then(function (resp) {
                        if(resp.data == 'fail'){
                            alert("Can't edit. Please login!");
                        }
                        else{
                            app.$router.replace('/courses');
                        }
                        
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not create course");
                    });
            }
        }
    }
</script>