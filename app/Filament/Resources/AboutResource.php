<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AboutResource\Pages;
use App\Filament\Resources\AboutResource\RelationManagers;
use App\Models\About;
use Filament\Forms;
use Filament\Resources\Concerns\Translatable;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AboutResource extends Resource
{
    use Translatable;

    protected static ?string $model = About::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function getPluralModelLabel(): string
    {
        return __('admin.about');
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
               Forms\Components\Card::make([
                   Forms\Components\TextInput::make('title')
                       ->required()
                       ->helperText('<small>&lt;b&gt; Your Text &lt;/b&gt;</small>'),
                   Forms\Components\Textarea::make('description'),
                   Forms\Components\FileUpload::make('image')
               ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image')->label(__('admin.image')),
                Tables\Columns\TextColumn::make('title')->label(__('admin.title')),
                Tables\Columns\TextColumn::make('description')->label(__('admin.description')),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->label(__('admin.created_at')),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->label(__('admin.updated_at')),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAbouts::route('/'),
           // 'create' => Pages\CreateAbout::route('/create'),
            'edit' => Pages\EditAbout::route('/{record}/edit'),
        ];
    }

    public static function canCreate(): bool
    {
        return false;
    }
}
