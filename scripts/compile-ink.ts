/**
 * Ink derleyici.
 * story/main.ink (ve INCLUDE ettiği bütün dosyalar) → assets/story/story.json
 *
 * Kullanım:
 *   npm run ink          → bir kez derle
 *   npm run ink:watch    → story/ klasörünü izle, değişince yeniden derle
 *
 * Hata varsa çıkış kodu 1 olur (Claude Code kancası bu sayede hatayı görür).
 */
import fs from 'node:fs';
import path from 'node:path';
import { Compiler, CompilerOptions } from 'inkjs/compiler/Compiler';
import { PosixFileHandler } from 'inkjs/compiler/FileHandler/PosixFileHandler';

const ROOT = path.resolve(__dirname, '..');
const STORY_DIR = path.join(ROOT, 'story');
const ENTRY = path.join(STORY_DIR, 'main.ink');
const OUT = path.join(ROOT, 'assets', 'story', 'story.json');

export function compileInk(): boolean {
  const started = Date.now();
  const source = fs.readFileSync(ENTRY, 'utf8');
  const errors: string[] = [];
  const warnings: string[] = [];

  const options = new CompilerOptions(
    ENTRY,
    [],
    false,
    (message: string, type: number) => {
      // ErrorType: 0 = Author (TODO), 1 = Warning, 2 = Error
      if (type === 2) errors.push(message);
      else if (type === 1) warnings.push(message);
      else console.log(`  ✎ TODO: ${message}`);
    },
    new PosixFileHandler(STORY_DIR + path.sep),
  );

  let json: string | undefined;
  try {
    const story = new Compiler(source, options).Compile();
    json = story?.ToJson() ?? undefined;
  } catch (e) {
    errors.push(e instanceof Error ? e.message : String(e));
  }

  warnings.forEach((w) => console.warn(`  ⚠ ${w}`));
  if (errors.length || !json) {
    console.error(`\n✖ Ink derlenemedi (${errors.length} hata):`);
    errors.forEach((e) => console.error(`  • ${e}`));
    return false;
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, json);
  console.log(`✔ Ink derlendi → assets/story/story.json (${Date.now() - started} ms)`);
  return true;
}

if (require.main === module) {
  const ok = compileInk();
  if (process.argv.includes('--watch')) {
    console.log('… story/ izleniyor (çıkmak için Ctrl+C)');
    let timer: NodeJS.Timeout | undefined;
    fs.watch(STORY_DIR, { recursive: true }, (_event, file) => {
      if (!file || !String(file).endsWith('.ink')) return;
      clearTimeout(timer);
      timer = setTimeout(() => compileInk(), 150);
    });
  } else if (!ok) {
    process.exit(1);
  }
}
