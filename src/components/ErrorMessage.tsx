export default function ErrorMessage({
  errorMessage,
}: {
  errorMessage: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-5rem)]">
      <span>
        An Error has occured! Please try again by refreshing the page.
      </span>
      <span className="text-red-500">{errorMessage}</span>
    </div>
  );
}
