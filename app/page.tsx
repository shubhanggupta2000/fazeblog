import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import self from "@/app/me.jpg";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { PiMediumLogoBold } from "react-icons/pi";
import { MdOutlineMail, MdPortrait } from "react-icons/md";
import "./globals.css";

export const revalidate = 30;

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug":  slug.current,
      titleImage
  }
  `;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  return (
    <div className="flex flex-col items-center mb-32">
      <div className="text-center mt-10 mb-16 animate-fade-in-down">
        <Image
          src={self}
          alt="Shubhang Gupta"
          width={250}
          height={250}
          className="rounded-full mx-auto"
        />
        <h1 className="text-4xl mt-10 animate-fade-in">Shubhang Gupta</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-5 animate-fade-in">
          I am passionate about crafting elegant solutions to complex problems.
        </p>
        <div className="flex justify-center space-x-4 mt-8 animate-fade-in">
          {[
            { href: "mailto:guptashubhang2000@gmail.com", Icon: MdOutlineMail },
            { href: "https://www.guptashubhang.me/", Icon: MdPortrait },
            {
              href: "https://www.linkedin.com/in/gupta-shubhang/",
              Icon: FiLinkedin,
            },
            { href: "https://github.com/shubhanggupta2000", Icon: FiGithub },
            { href: "https://x.com/ShubhangGupta13", Icon: FaXTwitter },
            {
              href: "https://medium.com/@guptashubhang2000",
              Icon: PiMediumLogoBold,
            },
            {
              href: "https://www.instagram.com/guptashubhang2000/",
              Icon: GrInstagram,
            },
          ].map(({ href, Icon }, index) => (
            <a
              key={index}
              href={href}
              className="text-gray-600 dark:text-gray-300 transition-colors duration-200 transform hover:scale-110"
            >
              <Icon size={25} />
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 w-full px-4">
        {data.map((post, idx) => (
          <div
            key={idx}
            className={`animate-fade-in-up-${idx}`}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <Card>
              <Image
                src={urlFor(post.titleImage).url()}
                alt="image"
                width={500}
                height={500}
                className="rounded-t-lg h-[200px] object-cover"
              />
              <CardContent className="mt-5">
                <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
                <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                  {post.smallDescription}
                </p>
                <Button asChild className="w-full mt-7">
                  <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
