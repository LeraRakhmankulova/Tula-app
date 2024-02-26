"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

export const Button = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <button>
            <Pluscl />
          </button>
        </div>
      </DialogTrigger>
    </Dialog>
  );
};
