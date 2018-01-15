<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Note extends Model
{
    //

    public function user()
    { //$note ->user->name to use it
        return $this->belongsTo(User::class);
    }

    public function scopeGetUserNotes($query)
    {

//        info($query);
  //      return $query->where('user_id', 4)->paginate(15);

    }

    public function getUser(Request $request){

    }

}
