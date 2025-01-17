<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BlogController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use Inertia\Inertia;

// Route::redirect('/', '/dashboard');

// Redirigir la raíz a la landing page
Route::redirect('/', '/landing');

Route::get('/landing', function () {
    return inertia('Landing/LandingPage'); // Esto renderiza la landing page usando Inertia
})->name('landing');

Route::get('/soluciones-legales', function () {
    return inertia('Services/Legales');
})->name('legales');

Route::get('/soluciones-negocios-y-backoffice', function () {
    return inertia('Services/Negocios');
})->name('negocios');

Route::get('/comunicaciones-estrategicas', function () {
    return inertia('Services/Comunicaciones');
})->name('comunicaciones');

Route::get('/capacitacion-y-coach-empresarial', function () {
    return inertia('Services/Capacitaciones');
})->name('coach');

Route::get('/sostenibilidad-y-rce', function () {
    return inertia('Services/Sostenibilidad');
})->name('sostenibilidad');

// Rutas de contenido de Media
Route::get('/noticias', function () {
    return inertia('MediaContents/Noticias');
})->name('noticias');

Route::get('/rrss', function () {
    return inertia('MediaContents/SocialNetworks');
})->name('rrss');

// // Rutas de otros componentes/subpáginas
// Route::get('/blog', function () {
//     return inertia('Subpages/Blog');
// })->name('blog');

// Rutas para mostrar los Blogs publicados
Route::get('/blogs/publicados', [BlogController::class, 'getPublishedBlogs'])
    ->name('blogs.published');
Route::get('/blogs/publicados/{blog}', [BlogController::class, 'getPublishedBlog'])
    ->name('blogs.published.show');

// En routes/api.php eventualmente se crearan rutas para acceso API
Route::get('/api/blogs/published', [BlogController::class, 'getPublishedBlogs']);
Route::get('/api/blogs/published/{blog}', [BlogController::class, 'getPublishedBlog']);

// Rutas del mail de Contacto

Route::post('/contacto', [ContactController::class, 'store'])->name('contact.store');

// =================
// Rutas por defecto
// =================

Route::resource('blogs', BlogController::class);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])
        ->name('dashboard');

    Route::resource('project', ProjectController::class);
    Route::resource('blog', BlogController::class);
    Route::get('/task/my-tasks', [TaskController::class, 'myTasks'])
        ->name('task.myTasks');
    Route::resource('task', TaskController::class);
    Route::resource('user', UserController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';