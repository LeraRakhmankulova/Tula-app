"use client";

import { formatDistanceToNow } from "date-fns";

import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import { MoreHorizontal } from "lucide-react";
import { Footer } from "./footer";

interface BoardCardProps {
  id: string;
  title: string;
  authorName: string;
  authorId: string;
  createdAt: number;
  imageUrl: string;
  orgId: string;
  isFavorite: boolean;
};

export const BoardCard = ({
  id,
  title,
  authorId,
  authorName,
  createdAt,
  imageUrl,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();

  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

//   const {
//     mutate: onFavorite,
//     pending: pendingFavorite,
//   } = useApiMutation(api.board.favorite);
//   const {
//     mutate: onUnfavorite,
//     pending: pendingUnfavorite,
//   } = useApiMutation(api.board.unfavorite);

//   const toggleFavorite = () => {
//     if (isFavorite) {
//       onUnfavorite({ id })
//         .catch(() => toast.error("Failed to unfavorite"))
//     } else {
//       onFavorite({ id, orgId })
//         .catch(() => toast.error("Failed to favorite"))
//     }
//   };

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[130/130] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-fit"
          />
          {/* 
          <Actions
            id={id}
            title={title}
            side="right"
          > */}
            <button
              className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none"
            >
              <MoreHorizontal
                className="text-white opacity-75 hover:opacity-100 transition-opacity"
              />
            </button>
          {/* </Actions> */}
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  );
};
