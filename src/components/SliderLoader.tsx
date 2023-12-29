export default function SliderLoader() {
  return (
    <div className="relative w-full bg-gray-300 h-1.5 overflow-hidden animate-fadeOut ease-in-out duration-100">
      <div className="absolute inset-0 bg-blue-600 h-1.5 w-full">
        <div
          className="absolute top-0 h-1.5 w-full bg-blue-300 rounded-full opacity-75"
          style={{
            animation: "slideGlow 2.5s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  );
}
