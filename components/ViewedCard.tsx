"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import ViewedDrawer from "./ViewedDrawer";
import ViewedHeader from "./ViewedHeader";

type ViewedCardPropTypes = {
  src: string;
  type: string;
};

const ViewedCard = ({ type }: ViewedCardPropTypes) => {
  return (
    <>
    <ViewedHeader />
      <div className="flex rounded shadow-md">
        <div>
          <Image
            src="https://m.media-amazon.com/images/M/MV5BMTQyNTgxODA1Ml5BMl5BanBnXkFtZTcwOTUwMDE0MQ@@._V1_SX300.jpg"
            alt="Movie Poster"
            priority={false}
            width={500}
            height={500}
            className="sm:w-[190px] sm:h-[280px] w-[95px] h-[140px] rounded-l"
          />
        </div>
        <div className="flex flex-col justify-evenly">
          <div className="ml-3 sm:text-3xl">
            <Badge>
              <div className="sm:text-3xl">Movie</div>
            </Badge>

            <h1 className="font-semibold">Aamdani Atthanni Kharcha Rupaiya</h1>
            <div>
              <span>8.4</span>
              <span className="mx-2">&#x2022;</span>
              <span>73%</span>
            </div>
          </div>
          <div className="ml-3 sm:text-3xl">
            <ViewedDrawer>
              <p className="underline underline-offset-4 cursor-pointer">
                See more...
              </p>
            </ViewedDrawer>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewedCard;
