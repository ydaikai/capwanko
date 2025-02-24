/**
 * 日付文字列をJP形式にフォーマットする
 * @param dateString ISO形式の日付文字列
 * @returns フォーマットされた日付文字列
 */
export function formatDate(dateString: string): string {
	return new Date(dateString).toLocaleDateString('ja-JP', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})
}
