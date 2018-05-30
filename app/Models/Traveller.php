<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Traveller extends Model
{
    protected $fillable = ['travel_id','name','phone'];

    public function user() {
        return $this->belongsTo('App\Models\Travel');
    }

}
