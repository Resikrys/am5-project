<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;
use Inertia\Inertia;

use App\Http\Controllers\Controller;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:50',
            'apellido' => 'required|string|max:50',
            'email' => 'required|email',
            'telefono' => 'required|string|max:15',
            'mensaje' => 'required|string|max:500',
        ]);

        // Opcional: Enviar email
        Mail::to(['andres.madariaga@am5.cl', 'ronald.toro@claimy.cl'])
            ->send(new ContactFormMail($validated));
            // ->cc(['copia1@example.com', 'copia2@example.com'])
            // ->bcc(['oculto1@example.com'])

        return redirect()->back()->with('success', 'Mensaje enviado correctamente');
    }
}
