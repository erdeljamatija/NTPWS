<?php

namespace App\Http\Controllers\Api\V1;

use App\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
// use DB;
// use View;

class CoursesController extends Controller
{

    public function index()
    {
        return Course::all();
    }
 
    public function show($id)
    {
        return Course::findOrFail($id);
    }
 
    public function update(Request $request, $id)
    {
        $course = Course::findOrFail($id);
        if(auth()->check()){
            $course->update($request->all());
            return $course;
        }
        else{
            return 'fail';
        }
    }
 
    public function store(Request $request)
    {
        if(auth()->check()){
            $course = Course::create($request->all());
            return $course;
        }
        else{
            return 'fail';
        }
    }
 
    public function destroy($id)
    {
        $compcourseany = Course::findOrFail($id);
        if(auth()->check()){
            $compcourseany->delete();
            return 'success';
        }
        
        return 'fail';
    }
}

