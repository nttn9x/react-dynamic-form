import BannerAvatar from "./banner-avatar.component";
import { BannerHelloDown, BannerHelloUp } from "./banner-hello.component";
import * as styles from "./banner.style";

interface IBanner {
  mask?: boolean;
}

export default function Banner({ mask }: IBanner) {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        {mask && <BannerHelloDown />}
        {!mask && <BannerHelloUp />}
        <BannerAvatar />
      </div>
    </div>
  );
}
