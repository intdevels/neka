<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Rating extends Model
{
    use HasTranslations;

    public $translatable = ['title','description'];
    protected $fillable = ['score','description'];
}
