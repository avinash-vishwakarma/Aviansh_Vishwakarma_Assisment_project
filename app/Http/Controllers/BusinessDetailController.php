<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\BusinessDetail;
use Illuminate\Support\Facades\Auth;

class BusinessDetailController extends Controller
{
    //

    public function create(){
        return Inertia::render('addNewDetailForm');
    }

    public function store(Request $request){
        $validatedValues = $request->validate([
            'name'=>"required | string | max:2",
            'email'=>"required | email | string",
            'contactName'=>"required | string ",
            'phoneNumber'=>"required | string ",
            "website"=>"required | string",
            "address"=>"required | max:1000"
        ]);
        $NewBusiness = new BusinessDetail($validatedValues);
        Auth::user()->businessDetails()->save($NewBusiness);
        return to_route('showAllDetails');
    }

    public function show(){
        $businessData = Auth::user()->businessDetails()->paginate(10);
        return Inertia::render('showDetails',['details'=>$businessData]);
    }
}
