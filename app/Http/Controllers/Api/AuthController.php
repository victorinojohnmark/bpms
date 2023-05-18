<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    // private function __construct()
    // {
    //     $this->minutes = 2;
    // }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (auth()->attempt($credentials)) {
            $user = $request->user();
            $minutes = 240;
            $expiration = now()->addMinutes($minutes);
            $token = $user->createToken('API Token', [], $expiration)->plainTextToken;
            
            return response()->json([
                'message' => 'Login successful.',
                'user' => $user->only(['id', 'name', 'email', 'created_at']),
                'permissions' => $user->permissions->map(function($permission) { return $permission->name; }),
                'token' => $token,
                'tokenExpiration' => $expiration
            ]);
        } else {
            return response()->json([
                'message' => 'Invalid login credentials.'
            ], 401);
        }

    }

    public function register(Request $request) 
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:6',
        ]);

        $data = $request->validate([
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:6',
        ]);

        $user = User::create(array_merge($data, ['password' => bcrypt($request->password)]));
        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'User logged out successfully']);
    }

    public function refresh(Request $request) 
    {
        // return $this->createNewToken(auth()->refresh());
        $user = $request->user();
        $minutes = 240;
        $expiration = now()->addMinutes($minutes);
        $newToken = $user->createToken('API Token', [], now()->addMinutes($minutes))->plainTextToken;
        return response()->json([
            'message' => 'Token refreshed.',
            'user' => $user->only(['id', 'name', 'email', 'created_at']),
            'permissions' => $user->permissions->map(function($permission) { return $permission->name; }),
            'token' => $newToken,
            'tokenExpiration' => $expiration
        ]);
    }

    public function userProfile() 
    {
        return response()->json(auth()->user());
    }

    protected function createNewToken($user)
    {
        return response()->json([
            'access_token' => $user->createToken('authToken')->plainTextToken,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => array_merge(auth()->user()->only(['id', 'name', 'email', 'created_at']), [
                'permissions' => auth()->user()->permissions->map(function($permission) {
                    return $permission->name;
                })
            ]),
        ]);
    }
}
