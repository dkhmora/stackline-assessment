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
    <div className="flex flex-1 flex-col items-center p-6 shadow-md bg-white rounded">
      <img src={image} height={100} width={100} />

      <p className="text-2xl font-bold">{title}</p>
      <p className="text-xl">{subtitle}</p>

      <div className="flex">
        {tags ? tags.map((tag) => <p className="text-xl">{tag}</p>) : null}
      </div>
    </div>
  );
}
