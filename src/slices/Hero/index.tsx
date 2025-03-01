import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h1 className="text-red-500">{slice.primary.first_name}</h1>
      <h1>{slice.primary.last_name}</h1>
      <h3>{slice.primary.tag_line}</h3>
    </section>
  );
};

export default Hero;
