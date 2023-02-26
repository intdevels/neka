<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Project extends Model
{
    use HasTranslations;

    public $translatable = ['title','title_2','description','description_title'];
    protected $fillable = ['title','title_2','description','description_title','image','gallery'];

    protected $casts = [
        'gallery' => 'array'
    ];
}
