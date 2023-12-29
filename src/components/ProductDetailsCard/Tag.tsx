export default function Tag({ text }: { text: string }) {
  return (
    <div className="border rounded-md mx-1 my-1.5 py-0.5 px-5">
      <span className="text-md font-light">{text}</span>
    </div>
  );
}
