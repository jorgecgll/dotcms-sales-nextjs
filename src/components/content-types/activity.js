import { ChevronRight } from "lucide-react"
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


function Activity({ title, description, image, urlTitle }) {
  return (
    <Card className="mb-6">
      <CardHeader>
        {image && (
          <Image
            className="w-full mb-4"
            src={image?.idPath ?? image}
            width={100}
            height={100}
            alt="Activity Image"
            style={{ borderRadius: "0.75rem" }}
          />
        )}
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        {/* href={`/activities/${urlTitle || '#'}`} */}
        <Button>Link to detail &nbsp;<ChevronRight className="h-4 w-4" /></Button>
      </CardFooter>
    </Card>
  )
}

export default Activity;