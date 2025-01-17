import { Head } from '@inertiajs/react';
import Blogs from '../MediaContents/Blogs';

export default function Published({ blogs }) {
    return (
        <>
            <Head title="Blogs Publicados" />
            <Blogs blogs={blogs} />
        </>
    );
}