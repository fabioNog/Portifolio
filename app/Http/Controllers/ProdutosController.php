<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProdutosController extends Controller
{
    public function index(){
       return response()->json([
           ['id' => 1,'name'=> 'P1'],
           ['id' => 1,'name'=> 'P2'],
           ['id' => 1,'name'=> 'P3'],
           ['id' => 1,'name'=> 'P4'],
       ]);
    }
}
