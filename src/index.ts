import badwords from './words/index'

/**
 * 检查是否包含敏感词
 * @param text
 */
function checkWord(text: string, words: string[] = badwords): boolean {
    for (let word of words) {
        if (text.includes(word)) {
            return true
        }
    }
    return false
}

export {badwords, checkWord}
