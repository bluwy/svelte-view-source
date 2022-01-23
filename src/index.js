import MagicString from 'magic-string'
import {  parse, walk} from 'svelte/compiler'

/**
 * @returns {import('svelte/types/compiler/preprocess').PreprocessorGroup}
 */
export function svelteViewSource() {
  return {
    markup({ content, filename }) {
      const s = new MagicString(content)

      const ast = parse(content)

      walk(ast.html, {
        enter(node) {
          if (node.type === 'InlineComponent' && node.name === 'SourceCode') {
            const contentStart = node.children[0].start
            const contentEnd = node.children[node.children.length - 1].end
            const cont = s.slice(contentStart, contentEnd)

            const injectStart = node.start + '<SourceCode'.length
            s.appendLeft(injectStart, ` source={\`${cont.replace('`', '\\`')}\`} `)
          }
        }
      })

      return {
        code: s.toString(),
        map: s.generateMap({hires: true, file: filename})
      }
    }
  }
}
