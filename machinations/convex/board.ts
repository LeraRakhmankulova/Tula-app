import { v } from "convex/values";

import { mutation, query } from "./_generated/server";


// this is an api convex

export const create = mutation({
    args: {
        orgId: v.string(),
        title: v.string(),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        }

        const board = await ctx.db.insert("boards", {
            title: args.title,
            orgId: args.orgId,
            authorId: identity.subject,
            authorName: identity.name!,
            imageUrl: "/placeholders/example.png",
        });

        return board;
    },
});

export const remove = mutation({
    args: { id: v.id("boards") },
    handler: async (ctx, args) => {
      const identity = await ctx.auth.getUserIdentity();
  
      if (!identity) {
        throw new Error("Unauthorized");
      }
  
      const userId = identity.subject;
  
    //   const existingFavorite = await ctx.db
    //     .query("userFavorites")
    //     .withIndex("by_user_board", (q) => 
    //       q
    //         .eq("userId", userId)
    //         .eq("boardId", args.id)
    //     )
    //     .unique();
  
    //   if (existingFavorite) {
    //     await ctx.db.delete(existingFavorite._id);
    //   }
  
      await ctx.db.delete(args.id);
    },
  });