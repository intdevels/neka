<?php

namespace App\Filament\Resources\SliderResource\Pages;

use App\Filament\Resources\SliderResource;
use Filament\Pages\Actions;
use Filament\Resources\Form;
use Filament\Forms;
use Filament\Resources\Pages\CreateRecord;

class CreateSlider extends CreateRecord
{
    use CreateRecord\Concerns\Translatable;

    protected static string $resource = SliderResource::class;

    protected function getActions(): array
    {
        return [
            Actions\LocaleSwitcher::make(),
            // ...
        ];
    }

}
