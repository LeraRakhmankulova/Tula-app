import { Button } from "./button";
import { List } from "./list";

export const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-1 bg-blue-950 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white">
      <List />
      <Button />
    </aside>
  );
};
