<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Supplier extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['code', 'name', 'contact_person', 'contact_number', 'email', 'address', 'is_active'];

    public static function createRecord($values): self
    {
        return self::create([
            'supplier_code' => $values['supplier_code'], 
            'name' => $values['name'],
            'contact_person' => $values['contact_person'], 
            'contact_number' => $values['contact_number'],
            'email' => $values['email'], 
            'address' => $values['address'],
            'is_active' => $values['is_active']
        ]);
    }

    public static function updateRecord($values): self
    {
        return self::update([
            'supplier_code' => $values['supplier_code'], 
            'name' => $values['name'],
            'contact_person' => $values['contact_person'], 
            'contact_number' => $values['contact_number'],
            'email' => $values['email'], 
            'address' => $values['address'],
            'is_active' => $values['is_active']
        ]);
    }
}
