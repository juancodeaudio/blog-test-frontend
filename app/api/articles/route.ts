import { NextResponse, NextRequest } from "next/server";
import getArticles from "@/app/_libs/getArticles";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get('query');
  const filteredArticles = await getArticles({
    filters: {
      title: {
        $contains: query,
      },
    },
  });

  return NextResponse.json(filteredArticles);
}