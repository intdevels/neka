<?php

namespace App\Filament\Resources\AboutResource\Pages;

use App\Filament\Resources\AboutResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditAbout extends EditRecord
{
    use EditRecord\Concerns\Translatable;

    protected static string $resource = AboutResource::class;

    protected function getActions(): array
    {
        return [
            Actions\LocaleSwitcher::make(),
        ];
    }
}
