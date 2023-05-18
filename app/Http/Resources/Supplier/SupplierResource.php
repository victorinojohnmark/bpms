<?php

namespace App\Http\Resources\Supplier;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SupplierResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'code' => $this->code,
            'name' => $this->name,
            'contactPerson' => $this->contact_person, 
            'contactNumber' => $this->contact_number, 
            'email' => $this->email, 
            'address' => $this->address, 
            'isActive' => $this->is_active,
        ];
    }
}
