"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const Button = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-sqгare">
          <button></button>
        </div>
      </DialogTrigger>
    </Dialog>
  );
};
