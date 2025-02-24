import type { APIRoute } from 'astro'
import { getAllPosts } from '../../lib/api'

export const GET: APIRoute = async () => {
	const posts = await getAllPosts()

	// 必要な情報のみを返す
	const sanitizedPosts = posts.map((post) => ({
		id: post.id,
		title: post.title,
		content: post.content,
		eyecatch: post.eyecatch,
		publishedAt: post.publishedAt
	}))

	return new Response(JSON.stringify(sanitizedPosts), {
		headers: {
			'Content-Type': 'application/json',
			// キャッシュを1時間に設定
			'Cache-Control': 'public, max-age=3600'
		}
	})
}
