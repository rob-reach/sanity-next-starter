import SanityBlockContent from "@sanity/block-content-to-react"
import JSONPretty from "react-json-pretty"
import MainLayout from "../../components/layouts/MainLayout"
import { getClient } from "../../lib/sanity"
import Head from "next/head"

export default function post({ data }) {

    if (!data) {
        return (
            <MainLayout>
                <h1>Error</h1>
            </MainLayout>
        )
    } else {

        const { post } = data

        return (
            <MainLayout>
                <div className="text-container">
                    <h1>{post.title}</h1>
                    <h2>raw data</h2>
                    <JSONPretty style={{ maxWidth: "100ch", maxHeight: '500px', overflowX: "scroll", boxShadow: "0 0 5px rgba(0,0,0,.3" }} id="json-pretty" data={post}></JSONPretty>
                </div>
            </MainLayout>
        )
    }
}

export async function getStaticProps({ params }) {
    const post = await getClient(true).fetch(`*[_type == "post" && slug.current == $slug][0]{...}`, {
        slug: params.slug,
    })

    return {
        props: {
            data: {
                post,
            },
        },
    }
}

export async function getStaticPaths() {
    const paths = await getClient(true).fetch('*[_type == "post"]{slug}')
    return {
        paths: paths.map(({ slug }) => ({ params: { slug: slug.current } })),
        fallback: true,
    }
}
