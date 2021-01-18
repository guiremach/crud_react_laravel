<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('clientes', 'App\Http\Controllers\Api\ClientesController@getAllClientes');
Route::get('clientes/{id}', 'App\Http\Controllers\Api\ClientesController@getClientes');
Route::post('clientes', 'App\Http\Controllers\Api\ClientesController@createClientes');
Route::put('clientes/{id}', 'App\Http\Controllers\Api\ClientesController@updateClientes');
Route::delete('clientes/{id}','App\Http\Controllers\Api\ClientesController@deleteClientes');
