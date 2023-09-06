import { NextResponse, NextRequest } from "next/server";
import getUsers from "@/app/_libs/getUsers";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get('query');
  const filteredAuthors = await getUsers({
    filters: {
      name: {
        $containsi: query,
      },
    },
    populate: {
      avatar: {
        fields: ['url']
      }
    }
  });

  return NextResponse.json(filteredAuthors);
}