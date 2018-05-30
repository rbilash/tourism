<?php

namespace App\Http\Controllers;

use App\Models\Travel;
use App\Models\Traveller;
use Illuminate\Http\Request;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use Illuminate\Support\Str;

class FrontController extends Controller
{

    function saveForm(Request $request) {
        $travellers = $request->input('travellers', []);

        $lat = $request->input('lat', '');
        $lng = $request->input('lng', '');
        $city = '';
        $country = '';
        $weather = '';
        $uid = (string) Str::uuid();

        //get the weather forecast
        if (!empty($lat) && !empty($lng)) {
            $weather_url = "http://api.openweathermap.org/data/2.5/weather?lat=".$lat."&lon=".$lng."&&APPID=".env('OPENWEATHER_API_KEY');

            $client = new Client();
            $res = $client->request('GET', $weather_url);
            $status = $res->getStatusCode();
            if ( $status == 200) {
                $weather = $res->getBody();
                $wdata = json_decode($weather);
                $city = $wdata->name;
                $country = $wdata->sys->country;

            }

        }

        $travel = Travel::create([
            'uid' => $uid,
            'lat' => $lat,
            'lng' => $lng,
            'city' => $city,
            'country' => $country,
            'weather' => $weather
        ]);
        if(!empty($travel)) {
            foreach ($travellers as $t) {
                Traveller::create([
                    'travel_id' => $travel->id,
                    'name' => $t['name'],
                    'phone' => $t['phone']
                ]);
            }
        }

        return response()->json(compact('uid'));
    }

    function getBooking(Request $request, $uid) {
        $travel = Travel::where('uid', $uid)->first();
        $weather = json_decode($travel->weather);
        $sky = $weather->weather[0]->main;
        $country = $weather->sys->country;
        $city = $weather->name;
        return response()->json(compact('sky','city', 'country'));
    }
}
