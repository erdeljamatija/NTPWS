<?php

namespace App\Http\Controllers\Api\V1;

use App\Professor;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
// use DB;
// use View;

class ProfessorsController extends Controller
{
    // public function getAll(){
    //     $professors = DB::table('professors')->get();
    //     return $professors;
    //     return View('professors')->with('professors',$professors);
    // }

    // public function getSelected(Request $request){
    //     $professor = $request->input('selectProfessor');
    //     return response()->json([
    //         'firstName' => $professor,
    //         'lastName' => $professor
    //     ]);
    //     $json = file_get_contents('http://localhost:8000/getProfessor');
    //     $obj = json_decode($json);
    //     echo $obj->access_token;
    // }

    public function index()
    {
        return Professor::all();
    }
 
    public function show($id)
    {
        return Professor::findOrFail($id);
    }
 
    public function update(Request $request, $id)
    {
        $professor = Professor::findOrFail($id);
        if(auth()->check()){
            $professor->update($request->all());
            return $professor;
        }
        else{
            return 'fail';
        }
    }
 
    public function store(Request $request)
    {
        if(auth()->check()){
            $professor = Professor::create($request->all());
            return $professor;
        }
        else{
            return 'fail';
        }
    }
 
    public function destroy($id)
    {
        $compprofessorany = Professor::findOrFail($id);
        if(auth()->check()){
            $compprofessorany->delete();
            return 'success';
        }
        else{
            return 'fail';
        }
    }
}

