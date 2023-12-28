export default function Tag({ text }: { text: string }) {
  return (
    <div className="border rounded-lg mx-1 my-2 p-1 flex-auto">
      <p className="text-lg">{text}</p>
    </div>
  );
}