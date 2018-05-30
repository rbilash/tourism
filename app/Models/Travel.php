<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Travel extends Model
{

    protected $fillable = ['uid','lat','lng','city','country','weather'];

    public function travellers() {
        return $this->hasMany('App\Model\Traveller');
    }


}
