export interface ServiceContext {
  method: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
}
