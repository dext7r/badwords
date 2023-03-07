import * as fs from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'
const __filename = fileURLToPath(import.meta.url)
const dir: string = path.dirname(__filename)
// 获取当前目录下的所有txt文件
const files: string[] = fs.readdirSync(`${dir}/`)
  .filter((file: string) => file.endsWith('.txt'))

// 读取每个文件的内容
const contents: string[] = files.map((file: string) => {
  const content: string = fs.readFileSync(`${dir}/${file}`, { encoding: 'utf-8' })
  return content
})
export default contents
