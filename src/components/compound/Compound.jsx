import CompoundCategory from "./CompoundCategory";
import CompoundImage from "./CompoundImage";
import CompoundPrice from "./CompoundPrice";
import CompoundTitle from "./CompoundTitle";

export default function Compound({ children }) {
  return <div>{children}</div>;
}

Compound.Title = CompoundTitle;
Compound.Category = CompoundCategory;
Compound.Price = CompoundPrice;
Compound.Image = CompoundImage;
