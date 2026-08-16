import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;
  const title = "FoodFat｜我的料理熱量簿";
  const description = "記錄食材標籤、建立食譜，快速換算每份料理熱量。";
  return { title, description, openGraph:{title,description,images:[image]}, twitter:{card:"summary_large_image",title,description,images:[image]} };
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-Hant"><body>{children}</body></html>; }
