<?php

namespace App\Filament\Resources\RatingResource\Pages;

use App\Filament\Resources\RatingResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListRatings extends ListRecords
{
    use ListRecords\Concerns\Translatable;

    protected static string $resource = RatingResource::class;
    protected function getActions(): array
    {
        return [
            Actions\LocaleSwitcher::make(),
            Actions\CreateAction::make(),
        ];
    }
}
