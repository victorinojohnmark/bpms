<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'John Mark Victorino',
                'email' => 'victorino.johnmark@zwellrealty.biz',
                'password' => Hash::make('P@ssw0rd#'),
                'is_admin' => true
            ],
            [
                'name' => 'Vanz Eriell Belleza',
                'email' => 'belleza.vanzeriell@zwellrealty.biz',
                'password' => Hash::make('P@ssw0rd#'),
                'is_admin' => true
            ]
        ];

        foreach ($users as $userData) {
            $user = User::where('email', $userData['email'])->first();

            if(!$user) {
                $user = User::create($userData);
            } else {
                $user->update($userData);
            }

            // inject permissions to users
            $permissions = Permission::all();
            foreach ($permissions as $permission) {
                $user->givePermissionTo($permission);
            }
        }


    }
}
