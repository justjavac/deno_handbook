/**
 * Every exported symbol ideally should have a documentation line.
 *
 * It is important that documentation is easily human readable,
 * but there is also a need to provide additional styling information to ensure
 * generated documentation is more rich text.
 * Therefore JSDoc should generally follow markdown markup to enrich the text.
 *
 * follow https://deno.land/std/style_guide.md
 *
 * @param foo - Description of non obvious parameter
 */
export default function starter(foo: string): string {
  return foo;
}
