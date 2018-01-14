<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Note extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);


        return [
            'id' => $this->id,
            'title' => $this->title,
            'body' => $this->body,
            'user_id' => $this->user_id

        ];
    }

    public function with($request){
        return [
            'user_id' => $this->user_id,
            'profile' => $this->user
        ];
    }

}
