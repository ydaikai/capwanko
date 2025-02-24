import { createClient } from 'microcms-js-sdk'

if (!import.meta.env.MICROCMS_SERVICE_DOMAIN) {
	throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}
if (!import.meta.env.MICROCMS_API_KEY) {
	throw new Error('MICROCMS_API_KEY is required')
}

export const client = createClient({
	serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
	apiKey: import.meta.env.MICROCMS_API_KEY
})

export type Tag = {
	id: string
	name: string
}

export type Category = {
	id: string
	name: string
	order: number
}

export type Blog = {
	id: string
	title: string
	content: string
	publishedAt: string
	revisedAt: string
	category: Category
	eyecatch?: {
		url: string
		height: number
		width: number
	}
	tag?: Tag[]
}
