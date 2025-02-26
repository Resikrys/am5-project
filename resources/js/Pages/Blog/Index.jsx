import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { BLOG_STATUS_CLASS_MAP, BLOG_STATUS_TEXT_MAP } from "@/constants.jsx";
import { Head, Link, router } from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";

export default function Index({ auth, blogs, queryParams = null, success }) {
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }

    router.get(route("blog.index"), queryParams);
  };

  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;

    searchFieldChanged(name, e.target.value);
  };

  const sortChanged = (name) => {
    if (name === queryParams.sort_field) {
      if (queryParams.sort_direction === "asc") {
        queryParams.sort_direction = "desc";
      } else {
        queryParams.sort_direction = "asc";
      }
    } else {
      queryParams.sort_field = name;
      queryParams.sort_direction = "asc";
    }
    router.get(route("blog.index"), queryParams);
  };

  const deleteBlog = (blog) => {
    if (!window.confirm("Seguro que quieres borrar este blog?")) {
      return;
    }
    router.delete(route("blog.destroy", blog.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-900 dark:text-gray-100 leading-tight">
            Blogs
          </h2>
          <Link
            href={route("blog.create")}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Nuevo Blog
          </Link>
        </div>
      }
    >
      <Head title="Blog" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {success && (
            <div className="relative bg-emerald-500 py-2 px-4 text-white rounded mb-4">
              <span>{success}</span>
              <button
                className="absolute top-2 right-2 bg-emerald-600 text-white rounded-full p-1 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-400"
                onClick={() => router.visit(route("blog.index"), { replace: true })}
              >
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          )}
          <div className="bg-lightBackground dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="overflow-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-100">
                  <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100 border-b-2 border-gray-500">
                    <tr className="text-nowrap">
                      <TableHeading
                        name="id"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        ID
                      </TableHeading>
                      <th className="px-3 py-3">Imagen</th>
                      <TableHeading
                        name="title"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Título
                      </TableHeading>

                      <TableHeading
                        name="status"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Estado
                      </TableHeading>

                      <TableHeading
                        name="created_at"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Fec. de creación
                      </TableHeading>

                      <th className="px-3 py-3">Creado por</th>
                      <th className="px-3 py-3">Acciones</th>
                    </tr>
                  </thead>
                  <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100 border-b-2 border-gray-500">
                    <tr className="text-nowrap">
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3">
                        <TextInput
                          className="w-full"
                          defaultValue={queryParams.title}
                          placeholder="Nombre del Blog"
                          onBlur={(e) =>
                            searchFieldChanged("title", e.target.value)
                          }
                          onKeyPress={(e) => onKeyPress("title", e)}
                        />
                      </th>
                      <th className="px-3 py-3">
                        <SelectInput
                          className="w-full"
                          defaultValue={queryParams.status}
                          onChange={(e) =>
                            searchFieldChanged("status", e.target.value)
                          }
                        >
                          <option value="">Estado</option>
                          <option value="draft">Borrador</option>
                          <option value="published">Publicado</option>
                        </SelectInput>
                      </th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.data.map((blog) => (
                      <tr
                        className="bg-lightBackground border-b dark:bg-gray-800 dark:border-gray-700"
                        key={blog.id}
                      >
                        <td className="px-3 py-2">{blog.id}</td>
                        <td className="px-3 py-2">
                          <img src={blog.image_path} style={{ width: 60 }} />
                        </td>
                        <th className="px-3 py-2 text-gray-900 dark:text-gray-100 text-nowrap hover:underline">
                          <Link href={route("blog.show", blog.id)}>
                            {blog.title}
                          </Link>
                        </th>
                        <td className="px-3 py-2">
                          <span
                            className={
                              "px-2 py-1 rounded text-white " +
                              BLOG_STATUS_CLASS_MAP[blog.status]
                            }
                          >
                            {BLOG_STATUS_TEXT_MAP[blog.status]}
                          </span>
                        </td>
                        <td className="px-3 py-2 text-nowrap">
                          {blog.created_at}
                        </td>
                        <td className="px-3 py-2">{blog.createdBy.name}</td>
                        <td className="px-3 py-2 text-nowrap">
                          <Link
                            href={route("blog.edit", blog.id)}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                          >
                            Editar
                          </Link>
                          <button
                            onClick={(e) => deleteBlog(blog)}
                            className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination links={blogs.meta.links} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
