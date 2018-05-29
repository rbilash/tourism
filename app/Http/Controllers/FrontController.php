<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontController extends Controller
{

    function saveForm(Request $request) {
        $travellers = $request->input('travellers', []);
        $lat = $request->input('lat', '');
        $lng = $request->input('lng', '');
        dd($travellers);
    }
}
