import { Moon, Sun } from "react-feather";

import { IconButton, Typography } from "@thor/components/atoms";
import { useThemeContext } from "@thor/contexts";
import { ThemMode } from "@thor/utils/theme.util";
import { IconSize } from "@thor/constants/size.constant";

const styles = {
  header:
    "header fixed z-20 top-0 w-full py-3 px-4 md:py-4 md:px-8 flex justify-between items-center",
  icon: "icon-button p-3",
};

export default function LayoutHeader() {
  const { mode, changeMode } = useThemeContext();

  return (
    <header className={styles.header}>
      <Typography variant="h4" color="textPrimary">
        <span className="text-primary mr-1">Thor</span>Zaden
      </Typography>
      <IconButton className={styles.icon} onClick={changeMode} hovered>
        {mode === ThemMode.Dark ? (
          <Moon size={IconSize.Small} />
        ) : (
          <Sun size={IconSize.Small} />
        )}
      </IconButton>
    </header>
  );
}
