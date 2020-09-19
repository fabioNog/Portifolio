<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class AutenticadorController extends Controller
{
    public function register(Request $request){
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed'
        ]);
        $user = new User([
            'name' => $required->name,
            'email' => $required->email,
            'password' => bcrypt($required->password)
        ]);

        $user->save();

        return response()->json([
            'res' => 'Usuario criado com sucesso'
        ],201);
    }

    public function login(Request $request){
        $request->validate([
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed'
        ]);

        $credenciais = [
            'email' => $required->email,
            'password' => $required->password
        ];

        Auth::attempt($credenciais);
    }

    public function logout(Request $request){
        $request->user()->token()->revoke();
    }
}
