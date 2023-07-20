<?php

use App\Http\Controllers\ProduitController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('produits')->group(function () {
    Route::get('/index',[ ProduitController::class,'index']);
    Route::post('/create',[ ProduitController::class,'create']);
    Route::get('/show/{id}',[ ProduitController::class,'show']);
    Route::put('/update/{id}',[ ProduitController::class,'update']);
    Route::delete('/destroy/{id}',[ ProduitController::class,'destroy']);
});