import RwAdapter from "@packages/rw-adapter";

export default function core(message: string): void {
  const adapter = new RwAdapter("hello world");
  adapter.print();
}