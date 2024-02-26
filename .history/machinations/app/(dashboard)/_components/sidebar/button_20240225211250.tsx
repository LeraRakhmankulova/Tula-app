"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

export const Button = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <button className="bg-white/25 h-full w-full rounded-md
           flex items-center justify-center opacity-60 hover:opacity-100 transition">
            <Plus className="text-white" />
          </button>
        </div>
      </DialogTrigger>
    </Dialog>
  );
};
