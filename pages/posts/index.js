import MainLayout from "../../components/layouts/MainLayout";
import SanityStarterData from "../../components/SanityStarterData";
import { getClient } from "../../lib/sanity";
import Link from "next/link"

export default function posts({ data }) {

    const { data: posts } = data

    return (
        <MainLayout>
            <div className="text-container">
                <h1>Posts</h1>
                <ul className="list-disc pl-4 my-4">
                    {posts &&
                        posts.map(post => <li key={post._id}><Link href={`/posts/${post.slug.current}`}><a>{post.title}</a></Link></li>)
                    }
                </ul>
            </div>
        </MainLayout>
    )
}

export async function getStaticProps() {
    const data = await getClient(true).fetch(`*[_type == "post"]`);

    return {
        props: {
            data: { data }
        },
        revalidate: 1
    }
}
