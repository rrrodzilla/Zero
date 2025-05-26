import type {
  MailManager,
  ManagerConfig,
  IGetThreadResponse,
  ParsedDraft,
} from './types';
import type { IOutgoingMessage, Label } from '../types';
import type { CreateDraftData } from '../schemas';

export class ImapSmtpMailManager implements MailManager {
  constructor(public config: ManagerConfig) {}

  private unimplemented(): never {
    throw new Error('ImapSmtpMailManager not implemented');
  }

  async get(_id: string): Promise<IGetThreadResponse> {
    return this.unimplemented();
  }
  async create(_data: IOutgoingMessage): Promise<{ id?: string | null }> {
    return this.unimplemented();
  }
  async sendDraft(_id: string, _data: IOutgoingMessage): Promise<void> {
    return this.unimplemented();
  }
  async createDraft(_data: CreateDraftData): Promise<{ id?: string | null; success?: boolean; error?: string }> {
    return this.unimplemented();
  }
  async getDraft(_id: string): Promise<ParsedDraft> {
    return this.unimplemented();
  }
  async listDrafts(_params: { q?: string; maxResults?: number; pageToken?: string }): Promise<{ threads: { id: string; $raw: unknown }[]; nextPageToken: string | null }> {
    return this.unimplemented();
  }
  async delete(_id: string): Promise<void> {
    return this.unimplemented();
  }
  async list(_params: { folder: string; query?: string; maxResults?: number; labelIds?: string[]; pageToken?: string | number }): Promise<{ threads: { id: string; $raw?: unknown }[]; nextPageToken: string | null }> {
    return this.unimplemented();
  }
  async count(): Promise<{ count?: number; label?: string }[]> {
    return this.unimplemented();
  }
  async getTokens(_code: string): Promise<{ tokens: { access_token?: string; refresh_token?: string; expiry_date?: number } }> {
    return this.unimplemented();
  }
  async getUserInfo(_tokens?: ManagerConfig['auth']): Promise<{ address: string; name: string; photo: string }> {
    return this.unimplemented();
  }
  getScope(): string {
    return '';
  }
  async markAsRead(_threadIds: string[]): Promise<void> {
    return this.unimplemented();
  }
  async markAsUnread(_threadIds: string[]): Promise<void> {
    return this.unimplemented();
  }
  normalizeIds(ids: string[]): { threadIds: string[] } {
    return { threadIds: ids };
  }
  async modifyLabels(_ids: string[], _options: { addLabels: string[]; removeLabels: string[] }): Promise<void> {
    return this.unimplemented();
  }
  async getAttachment(_messageId: string, _attachmentId: string): Promise<string | undefined> {
    return this.unimplemented();
  }
  async getUserLabels(): Promise<Label[]> {
    return this.unimplemented();
  }
  async getLabel(_id: string): Promise<Label> {
    return this.unimplemented();
  }
  async createLabel(_label: { name: string; color?: { backgroundColor: string; textColor: string } }): Promise<void> {
    return this.unimplemented();
  }
  async updateLabel(_id: string, _label: { name: string; color?: { backgroundColor: string; textColor: string } }): Promise<void> {
    return this.unimplemented();
  }
  async deleteLabel(_id: string): Promise<void> {
    return this.unimplemented();
  }
  async getEmailAliases(): Promise<{ email: string; name?: string; primary?: boolean }[]> {
    return this.unimplemented();
  }
  async revokeRefreshToken(_refreshToken: string): Promise<boolean> {
    return this.unimplemented();
  }
}
