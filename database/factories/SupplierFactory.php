<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\Supplier;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Supplier>
 */
class SupplierFactory extends Factory
{
    protected $model = Supplier::class;

    public function definition(): array
    {
        $name = $this->faker->company;
        $words = explode(' ', $name);
        $acronym = '';

        foreach ($words as $word) {
            $acronym .= strtoupper($word[0]);
        }

        return [
            'code' => $acronym,
            'name' => $name,
            'contact_person' => $this->faker->name,
            'contact_number' => $this->faker->phoneNumber,
            'email' => $this->faker->unique()->safeEmail,
            'address' => $this->faker->address,
            'is_active' => $this->faker->boolean(75)
        ];
    }
}
