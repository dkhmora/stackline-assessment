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
      <div className="flex flex-col items-center p-6">
        <img
          src={image}
          alt={`${title}-product-image`}
          className="min-w-24 max-w-[60%] h-auto"
        />

        <p className="text-2xl font-bold">{title}</p>
        <p className="text-xl">{subtitle}</p>
      </div>

      <div className="flex flex-wrap w-full p-6 justify-between">
        {tags
          ? tags.map((tagText, index) => (
              <Tag text={tagText} key={`${tagText}${index}`} />
            ))
          : null}
      </div>
    </div>
  );
}
