<?php

namespace App\Http\Controllers\Api\V1;

use App\Student;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
// use DB;
// use View;

class StudentsController extends Controller
{

    public function index()
    {
        return Student::all();
    }
 
    public function show($id)
    {
        return Student::findOrFail($id);
    }
 
    public function update(Request $request, $id)
    {
        $student = Student::findOrFail($id);
        if(auth()->check()){
            $student->update($request->all());
            return $student;
        }
        else{
            return 'fail';
        }
    }
 
    public function store(Request $request)
    {
        if(auth()->check()){
            $student = Student::create($request->all());
            return $student;
        }
        else{
            return 'fail';
        }
    }
 
    public function destroy($id)
    {
        $compstudentany = Student::findOrFail($id);
        if(auth()->check()){
            $compstudentany->delete();
            return 'success';
        }
        else{
            return 'fail';
        }
    }
}

