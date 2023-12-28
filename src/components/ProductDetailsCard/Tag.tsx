import { memo } from "react";

export default memo(function Tag({ text }: { text: string }) {
  return (
    <div className="border rounded-lg mx-1 my-2 p-1 flex-auto">
      <span className="text-lg">{text}</span>
    </div>
  );
});
