<?php
namespace App\Http\Controllers;
class ProfessorsController extends Controller
{
    public function index()
    {
        return view('admin.professors.index');
    }
}