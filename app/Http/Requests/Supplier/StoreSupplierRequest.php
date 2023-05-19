<?php

namespace App\Http\Requests\Supplier;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreSupplierRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {

        $method = $this->method();

        if($method == 'PUT') {
            return [
                'code' => ['nullable', Rule::unique('suppliers', 'code')->ignore($request->id), 'max:10'],
                'name' => ['required', 'max:255'],
                'contact_person' => 'required|max:255', 
                'contact_number' => 'required|max:100', 
                'email' => 'required|email|unique:suppliers,email', 
                'address' => 'required|max:255', 
                'is_active' => 'required|boolean'
            ];
        } else {
            return [
                'code' => 'nullable|unique:suppliers,code|max:10',
                'name' => 'required|max:255',
                'contact_person' => 'required|max:255', 
                'contact_number' => 'required|max:100', 
                'email' => 'required|email|unique:suppliers,email', 
                'address' => 'required|max:255', 
                'is_active' => 'required|boolean'
            ];
        }

        
    }
}
