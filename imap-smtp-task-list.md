# IMAP/SMTP Integration Tasks

The current codebase only registers the `google` mail driver and instructs users on Gmail-specific OAuth configuration.
To add IMAP and SMTP support the following areas need work:

## 1. Provider and Configuration
- [x] Add an `imap` (or generic) provider to `apps/server/src/lib/driver/index.ts`.
- [x] Register this provider in `authProviders` and `emailProviders` so users can select it in the UI.
- [x] Extend environment variables and `.env.example` for IMAP/SMTP host, port, and security settings.

## 2. Database Updates
- [x] Update `packages/db/src/schema.ts` and migrations to store IMAP and SMTP connection details (server URLs, ports, username, encrypted password or OAuth tokens).
- [x] Include flags for TLS/SSL and other options.

## 3. Driver Implementation
- [ ] Implement a new `ImapSmtpMailManager` that satisfies `MailManager` in `apps/server/src/lib/driver/types.ts`.
- [ ] Use a reliable IMAP client (e.g. imapflow) for retrieval and `nodemailer` for sending via SMTP.
- [ ] Map driver methods to IMAP/SMTP actions: fetching threads, parsing messages, managing flags, creating and sending drafts, handling attachments, and modifying read/unread status.
- [ ] Provide a standardized error handler similar to `GoogleMailManager.withErrorHandler`.

## 4. Authentication Flow
- [ ] Add a front‑end flow to collect IMAP/SMTP credentials (server, username, password) or OAuth tokens if supported.
- [ ] Securely encrypt credentials in transit and at rest.
- [ ] Update `createAuth` and related helpers to store and retrieve these credentials when creating a driver.

## 5. Server Utilities
- [ ] Extend `connectionToDriver` and `getActiveDriver` so IMAP/SMTP connections return the new driver with the proper config.
- [ ] Ensure new driver integrates with existing TRPC routes (list, send, count, etc.).

## 6. Front‑End Integration
- [ ] Expose IMAP/SMTP as an option in the account connection UI.
- [ ] Provide forms for entering and validating host, port, username, and password information.
- [ ] Allow setting the default FROM address and aliases based on IMAP account details.

## 7. Testing and Validation
- [ ] Add unit tests for the new driver methods.
- [ ] Add integration tests covering connecting an account, listing messages, sending mail, and error handling.

## 8. Documentation
- [ ] Update `README.md` with new setup steps and environment variables.
- [ ] Provide examples for common providers (e.g. generic IMAP/SMTP, Outlook, Yahoo).

## 9. Security and Compliance
- [ ] Encrypt stored IMAP/SMTP credentials using a secure method (e.g. server‑side encryption or secret management service).
- [ ] Ensure connections use TLS/SSL and allow optional certificate validation.
- [ ] Document security considerations for self‑hosting.

