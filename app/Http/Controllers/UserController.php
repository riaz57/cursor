<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Mail\SendMail;
use Illuminate\Support\Facades\Mail;

class UserController extends Controller
{

    public function create(Request $request)
    {
        $data = $request->all();

        Mail::to('riaztest57@gmail.com')->send(new SendMail($data));

        return redirect()->back()->with(['success' => 'Contact Form Submit Successfully']);
    }


    // public function mimic($id)
    // {
    //     $data = [
    //         'one' => 'iphone',
    //         'two' => 'nokia',
    //         'three' => 'samsung'
    //     ];

    //     return view('dashboard', [
    //         'data' => $data[$id] ?? 'product '.$id. ' doesnt exist'
    //     ]);

    // }

    public function index()
    {

        // $data = User::get();

        return view('form');
    }

    // public function form() 
    // {
    //     return view('form');
    // }

    // public function create(Request $request) 
    // {
    //     $validated = $request->validate([
    //         'name' => 'required|max:255',
    //         'email' => 'required|email',
    //         'description' => 'required',
    //         'image' => 'required|mimes:jpg,jpeg,png|max:2048'
    //     ]);

    //     if($request->file('image')) {
    //         $imageName = time().'_'.$request->image->getClientOriginalName();

    //         $request->image->move(public_path('/image/'), $imageName);
    //     }
    //     else {
    //         $imageName = NULL;
    //     }

    //     User::create([
    //         'name' => $request->name,
    //         'email' => $request->email,
    //         'description' => $request->description,
    //         'image' => $imageName
    //     ]);

    //     return redirect()->route('dashboard');
    // }

}

