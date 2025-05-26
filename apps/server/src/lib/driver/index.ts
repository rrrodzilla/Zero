import type { MailManager, ManagerConfig } from './types';
import { GoogleMailManager } from './google';
import { ImapSmtpMailManager } from './imap';

const supportedProviders = {
  google: GoogleMailManager,
  imap: ImapSmtpMailManager,
  // microsoft: microsoftDriver,
};

export const createDriver = (
  provider: keyof typeof supportedProviders | (string & {}),
  config: ManagerConfig,
): MailManager => {
  const Provider = supportedProviders[provider as keyof typeof supportedProviders];
  if (!Provider) throw new Error('Provider not supported');
  return new Provider(config);
};
