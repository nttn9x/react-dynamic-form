import { Typography } from "@thor/components/atoms";
import * as styles from "./banner.style";

export function BannerHelloUp() {
  return (
    <div className={styles.infoContainer}>
      <div className={"content"}>
        <div className="text-base">
          <span className="text-secondary mr-1">{"Hello, I'm"}</span>
          <span className={`text-primary-500`}>Nguyen</span>
        </div>

        <Typography>Build awesome app</Typography>
        <div className={styles.infoContent}>
          BUILD<div className={"mx-1 text-primary"}>WHATEVER</div>YOU WANT
        </div>
      </div>
    </div>
  );
}
export function BannerHelloDown() {
  return (
    <div className={styles.infoContainer}>
      <div className={"content"}>
        <div className="text-base">
          <span className="text-secondary">{"Hey, I'm"}</span>
          <span className={"text-white"}>Nguyen</span>
        </div>

        <div className={styles.infoContentHover}>
          BUILD<div className={"mx-1 text-black"}>SHIT</div>FOR YOU
        </div>
      </div>
    </div>
  );
}
