export class UserSession {
  sessionId: string;
  userId: string;
  operatingSystem: string;
  language: string;
  browser: string;
  location: string;
  referrer: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
