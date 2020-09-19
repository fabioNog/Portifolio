<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProdutosController extends Controller
{
    public function index(){
        return response()->json(){[
            ['id' => 1, 'name' => 'p1'],
            ['id' => 1, 'name' => 'p2'],
            ['id' => 1, 'name' => 'p3'],
            ['id' => 1, 'name' => 'p4'],
        ]};
    }
}
