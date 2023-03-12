<?php

namespace App\Http\Controllers;

use App\Models\About;
use App\Models\Partner;
use App\Models\Project;
use App\Models\Rating;
use App\Models\Slider;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index(){

        $sliders = Slider::query()->get();
        $about = About::query()->first();
        $ratings = Rating::query()->get();
        $projects = Project::query()->get();
        $partners = Partner::query()->get();

        return view('index',compact('sliders','about','ratings','projects','partners'));
    }

}
