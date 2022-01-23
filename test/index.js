import fs from 'fs'
import { preprocess } from 'svelte/compiler'
import { svelteViewSource } from '../src/index.js'

async function main() {
  const inputFile = fs.readFileSync('./test/Input.svelte', 'utf-8')

  const result = await preprocess(inputFile, [svelteViewSource()])

  fs.writeFileSync('./test/Output.svelte', result.code, 'utf-8')
}

main()
