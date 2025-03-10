<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Todo;

use Illuminate\Http\Request;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Todos/Index',[
            'todos' => Todo::all()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255'
        ]);

        Todo::create([
            'title'=> $request->title,      
          ]);

          return redirect()->route('todos.index'); 
         }

   

    public function update(Todo $todo)

    {
     $todo->update([
        'completed' => !$todo->completed
     ]);

     return redirect()->route('todos.index');
    }
    public function show(Todo $todo)
    {
        return Inertia::render('Todos/Show', [
            'todo' => $todo
        ]);
    }
    
    public function edit(Todo $todo)
    {
        return Inertia::render('Todos/Edit', [
            'todo' => $todo
        ]);
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todo $todo)
    {
        $todo->delete();

        return redirect()->route('todos.index');
    }
}
