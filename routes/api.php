<?php

use Illuminate\Http\Request;

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

// List Articles
Route::get('notes','NoteController@index');

// List one Article
Route::get('note/{id}','NoteController@show');

// Create new Article
Route::post('note','NoteController@store');

// Update Article
Route::put('note','NoteController@store');

// Delete Article
Route::delete('note/{id}','NoteController@destroy');