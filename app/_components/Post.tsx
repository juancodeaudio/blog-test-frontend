import { postRenderer } from '../_libs/postRenderer';

import { ArticlesDatum } from "../_types/types"


export default function Post({ data }: { data: ArticlesDatum }) {
  return (
    <article className="space-y-8 w-full max-w-4xl mb-10">
      <div>
        {data.attributes.blocks?.map((section: any, index: number) => postRenderer(section, index))}
      </div>
    </article>
  );
}