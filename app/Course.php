<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\Controller;

class Course extends Model
{
    protected $fillable = [
        'name'
    ]; 
}