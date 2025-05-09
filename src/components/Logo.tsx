import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  width: number;
  height: number;
};

const Logo = ({ width, height } : LogoProps) => {
  return (
    <Link href="/">
      <Image
        src="/assets/images/logo.png"
        width={width ? width : 70}
        height={height ? height : 70}
        alt="Picture of the author"
        style={{ borderRadius: "50%" }}
      />
    </Link>
  );
};

export default Logo;
