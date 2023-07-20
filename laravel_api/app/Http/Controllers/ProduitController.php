<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produit;

class ProduitController extends Controller
{
    public function index() {
        return response()->json(Produit::all(), 200);
    }

    public function create(Request $request) {
        $produit = Produit::create($request->all());
        return response($produit, 201);
    }

    public function show($id) {
        $produit = Produit::find($id);
        if(is_null($produit)) {
            return response()->json(['message' => 'Produit Introuvable'], 404);
        }
        return response()->json($produit::find($id), 200);
    }

    public function update(Request $request, $id) {
        $produit = Produit::find($id);
        if(is_null($produit)){
            return response()->json(['message' => 'Produit Introuvable'], 404);
        }
        $produit->update($request->all());
        return response($produit, 200);
    }

    public function destroy(Request $request, $id) { 
        $produit = Produit::find($id);
        if(is_null($produit)){
            return response()->json(['message' => 'Produit Introuvable'], 404);
        }
        $produit->delete();
        return response()->json(null, 204);
    }
}
