import Image from "next/image";
import Link from "next/link";

const Coin = ({ data }) => {
  const { uuid, iconUrl, name, symbol } = data;
  return (
    <Link href={`/coins/${uuid}`} className="coin">
      <Image src={iconUrl} alt={name} width={30} height={30} />
      <div className="details">
        <h4>{name}</h4>
        <h4>{symbol}</h4>
      </div>
    </Link>
  );
};

export default Coin;
