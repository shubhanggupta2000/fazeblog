import Image from 'next/image';
import { urlFor } from '@/app/lib/sanity';

export default function CustomImage({ value }: { value: any }) {
  return (
    <Image
      src={urlFor(value).url()}
      alt={value.alt || ' '}
      width={800}
      height={800}
      className="rounded-lg mt-4 mb-4"
    />
  );
}