import { test, expect } from 'bun:test';
import { authProviders } from '../apps/server/src/lib/auth-providers';
import { emailProviders } from '../apps/mail/lib/constants';

test('authProviders includes imap provider', () => {
  const providers = authProviders({
    IMAP_HOST: 'imap.example.com',
    IMAP_PORT: '993',
    IMAP_SECURE: 'true',
    SMTP_HOST: 'smtp.example.com',
    SMTP_PORT: '465',
    SMTP_SECURE: 'true',
  } as Record<string, string>);
  expect(providers.some(p => p.id === 'imap')).toBe(true);
});

test('emailProviders includes imap provider', () => {
  expect(emailProviders.some(p => p.providerId === 'imap')).toBe(true);
});
