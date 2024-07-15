import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function Banner({ title, image, caption, buttonText, link }) {

  return (<div>
    <div className="p-16">
      <section className="py-18 flex flex-col items-center text-center gap-7">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="text-4xl">{caption}</p>
        <div className="flex gap-6 items-center justify-center">
          <Button>{buttonText}</Button>
        </div>
      </section>

    </div>
    <div>
      <Image
        src={image?.idPath ?? image}
        width={500}
        height={500}
        className="object-cover rounded-md"
        alt={title}
        style={{width: "100%", borderRadius: "40px"}}
      />
    </div>
  </div>
  );
}

export default Banner;
