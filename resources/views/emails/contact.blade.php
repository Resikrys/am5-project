<x-mail::message>
# Nuevo Mensaje de Contacto

Hola equipo,<br>

Hemos recibido un nuevo mensaje a través del formulario de contacto de {{ config('app.name') }}. A continuación, se detallan los datos proporcionados:

<x-mail::panel>
**Detalles del contacto:**

- **Nombre:** {{ $data['nombre'] }} {{ $data['apellido'] }} <br>
- **Email:** {{ $data['email'] }} <br>
- **Teléfono:** {{ $data['telefono'] }}
</x-mail::panel>

<x-mail::panel>
**Mensaje:**
{{ $data['mensaje'] }}
</x-mail::panel>

<x-mail::table>
| Campo | Valor |
| ----- | ----- |
| Fecha | {{ now()->format('d/m/Y H:i:s') }} |
| IP | {{ request()->ip() }} |
</x-mail::table>

Gracias por su atención.<br>

Saludos,<br>

El equipo de {{ config('app.name') }}.
</x-mail::message>