import { expect, test } from 'bun:test';
import { connection } from '../packages/db/src/schema';

test('connection schema has imap/smtp columns', () => {
  const cols = Object.keys(connection);
  expect(cols.includes('imapHost')).toBe(true);
  expect(cols.includes('imapPort')).toBe(true);
  expect(cols.includes('smtpHost')).toBe(true);
  expect(cols.includes('smtpPort')).toBe(true);
});
