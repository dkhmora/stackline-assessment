import Tag from "./Tag";

type ProductDetailsCardProps = {
  image?: string;
  title?: string;
  subtitle?: string;
  tags?: string[];
};

export default function ProductDetailsCard({
  image,
  title,
  subtitle,
  tags,
}: ProductDetailsCardProps) {
  return (
    <div className="flex flex-1 flex-col items-center shadow-md bg-white rounded overflow-hidden">
      <div className="flex flex-col items-center p-6 border-b">
        <img
          src={image}
          alt={`${title}-product-image`}
          className="min-w-24 max-w-[60%] h-auto"
        />

        <div className="px-6 mt-5">
          <h1 className="text-2xl font-bold py-2 text-gray-700">{title}</h1>
          <h2 className="text-lg font-light tracking-wide text-gray-400">
            {subtitle}
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap w-full px-6 py-3 justify-between border-b">
        {tags
          ? tags.map((tagText, index) => (
              <Tag text={tagText} key={`${tagText}${index}`} />
            ))
          : null}
      </div>
    </div>
  );
}
