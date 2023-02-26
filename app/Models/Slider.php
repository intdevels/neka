<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Slider extends Model
{
    use HasTranslations;

    protected $fillable = ['title','description','short_description','image'];
    public $translatable = ['title','description','short_description'];

}
