<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // Permite que cualquiera use el formulario
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nombre' => 'required|string|max:50',
            'apellido' => 'required|string|max:50',
            'email' => 'required|email',
            'telefono' => 'required|string|max:15',
            'mensaje' => 'required|string|max:500',
        ];
    }

    public function messages(): array
    {
        return [
            'nombre.required' => 'El nombre es obligatorio',
            'apellido.required' => 'El apellido es obligatorio',
            'email.required' => 'El correo electrónico es obligatorio',
            'email.email' => 'El correo electrónico debe ser válido',
            'telefono.required' => 'El teléfono es obligatorio',
            'mensaje.required' => 'El mensaje es obligatorio',
            'nombre.max' => 'El nombre no puede tener más de 50 caracteres',
            'apellido.max' => 'El apellido no puede tener más de 50 caracteres',
            'telefono.max' => 'El teléfono no puede tener más de 15 caracteres',
            'mensaje.max' => 'El mensaje no puede tener más de 500 caracteres',
        ];
    }
}
