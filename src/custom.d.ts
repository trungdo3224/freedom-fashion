declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: FC<React.SVGProps<SVGAElement>>;
  const src: string;
  export default src;
}
