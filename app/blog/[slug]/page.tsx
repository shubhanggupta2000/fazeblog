import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import CustomImage from "@/app/components/CustomImage";
import Image from "next/image";

export const revalidate = 30; // revalidate at every 30 seconds

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage,
      }[0]
    `;

  const data = await client.fetch(query);
  return data;
}

const components = {
  types: {
    image: CustomImage,
  },
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);

  return (
    <div className="mt-8 pb-20">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Shubhang Gupta - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        alt="titleImage"
        priority
        className="rounded-lg mt-8 border"
      />

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content} components={components} />
      </div>
    </div>
  );
}
