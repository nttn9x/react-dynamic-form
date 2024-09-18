import { Input, Typography } from "@thor/components/atoms";
import React from "react";

const styles = {
  root: "flex flex-col gap-1",
};

interface ITextField {
  label?: string;
  errorMessage?: string;
}

export const TextField = React.forwardRef<HTMLInputElement, ITextField>(
  ({ label, errorMessage, ...props }, ref) => {
    return (
      <div className={styles.root}>
        <Typography variant="body-sm">{label}</Typography>
        <div className="w-full">
          <Input className="w-full" ref={ref} {...props} />
        </div>
        {errorMessage && (
          <Typography variant="body-xs" color="critical">
            {errorMessage}
          </Typography>
        )}
      </div>
    );
  }
);
