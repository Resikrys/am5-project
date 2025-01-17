<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Blog::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("title")) {
            $query->where("title", "like", "%" . request("title") . "%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }

        $blogs = $query->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia("Blog/Index", [
            "blogs" => BlogResource::collection($blogs),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Blog/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlogRequest $request)
    {
        $data = $request->validated();
        /** @var $image \Illuminate\Http\UploadedFile */
        $image = $data['image'] ?? null;
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        if ($image) {
            $data['image_path'] = $image->store('blog/' . Str::random(), 'public');
        }
        Blog::create($data);

        return to_route('blogs.index')
            ->with('success', 'Blog creado.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        $query = $blog->createdBy();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("title")) {
            $query->where("title", "like", "%" . request("title") . "%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }

        $tasks = $query->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);
        return inertia('Blog/Show', [
            'blog' => new BlogResource($blog),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        return inertia('Blog/Edit', [
            'blog' => new BlogResource($blog),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBlogRequest $request, Blog $blog)
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;
        $data['updated_by'] = Auth::id();
        if ($image) {
            if ($blog->image_path) {
                Storage::disk('public')->deleteDirectory(dirname($blog->image_path));
            }
            $data['image_path'] = $image->store('blog/' . Str::random(), 'public');
        }
        $blog->update($data);

        return to_route('blogs.index')
            ->with('success', "El blog \"$blog->title\" fue actualizado");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        $title = $blog->title;

        // Eliminar blog
        $blog->delete();
        if ($blog->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($blog->image_path));
        }

        return to_route('blogs.index')
            ->with('success', "Blog \"$title\" fue eliminado");
    }

    /**
     * Get published blogs for the public frontend
     */
    public function getPublishedBlogs(Request $request)
    {        
        $query = Blog::query()
            ->where('status', 'published')
            ->orderBy('created_at', 'desc');

        $blogs = $query->paginate(12);

        return Inertia::render('Blog/Published', [
            'blogs' => BlogResource::collection($blogs)
        ]);
    }

    /**
     * Get a single published blog
     */
    public function getPublishedBlog(Blog $blog)
    {
        if ($blog->status !== 'published') {
            abort(404);
        }

        if (request()->wantsJson()) {
            return new BlogResource($blog);
        }

        return inertia('Blog/PublishedShow', [
            'blog' => new BlogResource($blog)
        ]);
    }
}