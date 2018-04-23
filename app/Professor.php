<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\Controller;


class Professor extends Model
{
    protected $fillable = [
        'firstName', 'lastName'
    ];
}