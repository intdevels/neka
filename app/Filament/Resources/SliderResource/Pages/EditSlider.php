<?php

namespace App\Filament\Resources\SliderResource\Pages;

use App\Filament\Resources\SliderResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditSlider extends EditRecord
{
    use EditRecord\Concerns\Translatable;

    protected static string $resource = SliderResource::class;

    protected function getActions(): array
    {
        return [
            Actions\LocaleSwitcher::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
