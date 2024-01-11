// CardDemo/index.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  cardTitle: string;
  cardDescription: string;
  cardContent: string;
  cardFooter: string;
};

export const CardDemo: React.FC<Props> = (props) => {
  return (
    <Card>
      <CardHeader className="h-32">
        <CardTitle>{props.cardTitle}</CardTitle>
        <CardDescription>{props.cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="outline"
          className="border-solid border-2 border-gray-700"
        >
          <Link href={props.cardContent}>シフト {props.cardTitle}</Link>
        </Button>
      </CardContent>
      <CardFooter>
        <p>{props.cardFooter}</p>
      </CardFooter>
    </Card>
  );
};
