<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Note;
use App\Http\Resources\Note as NoteResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;

class NoteController extends Controller
{

    public function __construct()
    {
        //$this->middleware('auth:api');
//        $this->middleware(function ($request, $next) {
//            info(Auth::user());
//
//            return $next($request);
//        });
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        //$userNotes = Note::popular()->orderBy('created_at')->get()->paginate(15);

        //$userNotes = Note::where('user_id',4)->paginate(15);

//        $userNotes = Note::getUserNotes();
//
        //info(Auth::user());



        $input = Input::get('searchTerm');
        $user_id= Input::get('user_id');



        if($input == null){
            $userNotes = Note::where('user_id',$user_id)->paginate(5);
        }else{

            $userNotes = Note::where('user_id',$user_id)->where('title', 'LIKE', '%'.$input.'%')->paginate(15);
        }

        return NoteResource::collection($userNotes);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $note = $request->isMethod('put') ? Note::findOrFail($request->note_id) : new Note;

        $note->id = $request->input('note_id');
        $note->title = $request->input('title');
        $note->body = $request->input('body');
        $note->user_id = $request->input('user_id');

        if ($note->save()) {
            if ($request->isMethod('put'))
                return new NoteResource($note);
            return NoteController::index();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //Get note
        $note = Note::findOrFail($id);

        //info($note->user->id);

        //Return single note as resource
        return new NoteResource($note);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //Delete note
        $note = Note::findOrFail($id);

        if ($note->delete()) {
            return NoteController::index();
        }
    }
}
