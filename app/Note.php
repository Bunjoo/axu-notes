<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    //
    public function user(){ //$comment ->user->name to use it
        return $this->belongsTo(User::class);
    }
}
