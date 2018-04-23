<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\Controller;


class Student extends Model
{
    protected $fillable = [
        'firstName', 'lastName'
    ];
}