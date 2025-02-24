import { client, Blog, Category, Tag } from './microcms'

export const getAllPosts = async () => {
	const response = await client.getList<Blog>({
		endpoint: 'blogs'
	})
	return response.contents
}

export const getPostBySlug = async (slug: string) => {
	const post = await client.getListDetail<Blog>({
		endpoint: 'blogs',
		contentId: slug
	})
	return post
}

export const getAllCategories = async () => {
	const response = await client.getList<Category>({
		endpoint: 'categories',
		queries: { orders: 'order' }
	})
	return response.contents
}

export const getAllTags = async () => {
	const response = await client.getList<Tag>({
		endpoint: 'tags'
	})
	return response.contents
}
