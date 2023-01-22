import Link from 'next/link'
import Head from 'next/head'

export default function Home({ posts }) {

  return (
    <div>
      <Head>
        <title>{`blog page`}</title>
      </Head>
      <h1>Hello From The Home Page!</h1>
      {
        posts.nodes.map(post => {
          return (
            <ul key={post.slug}>
              <li >
                <Link href={`/posts/${post.slug}`} className='post-title'>{post.title}</Link>
                <br/>
                <a href={`/posts/${post.slug}`} className='read-more-link'>Read more</a>
              </li>
            </ul>
          )
        })
      }
    </div>
  )

}

export async function getStaticProps() {

  const res = await fetch('https://admin.souhaybkamal.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
          query HomePageQuery {
            posts {
              nodes {
                slug
                title
              }
            }
          }
          `,
    })
  })

  const json = await res.json()

  return {
    props: {
      posts: json.data.posts,
    },
  }

}
