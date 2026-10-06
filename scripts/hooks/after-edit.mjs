#!/usr/bin/env node
/**
 * Claude Code PostToolUse kancası (.claude/settings.json).
 * Claude bir dosyayı düzenledikten hemen sonra çalışır:
 *   • .ink dosyası → Ink'i derler. Hata varsa Claude'a geri bildirir (çıkış kodu 2).
 *   • .ts/.tsx dosyası → Prettier ile biçimlendirir.
 * Windows, macOS ve Linux'ta çalışsın diye Node ile yazıldı.
 */
import { spawnSync } from 'node:child_process';

let input = '';
process.stdin.on('data', (c) => (input += c));
process.stdin.on('end', () => {
  let file = '';
  try {
    const data = JSON.parse(input || '{}');
    file = data?.tool_input?.file_path ?? data?.tool_input?.path ?? '';
  } catch {
    process.exit(0);
  }
  const cwd = process.env.CLAUDE_PROJECT_DIR || process.cwd();
  const shell = process.platform === 'win32';

  if (file.endsWith('.ink')) {
    const r = spawnSync('npx', ['tsx', 'scripts/compile-ink.ts'], { cwd, encoding: 'utf8', shell });
    if (r.status !== 0) {
      process.stderr.write(`Ink derleme hatası — düzeltmeden devam etme:\n${r.stdout}${r.stderr}`);
      process.exit(2);
    }
    process.exit(0);
  }

  if (/\.(ts|tsx)$/.test(file) && !file.includes('node_modules')) {
    spawnSync('npx', ['prettier', '--write', '--log-level', 'warn', file], { cwd, shell });
  }
  process.exit(0);
});
