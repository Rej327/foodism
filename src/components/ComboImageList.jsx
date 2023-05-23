import { ImageList, ImageListItem } from "@mui/material";
import { ComboList } from "../data/data";

export default function ComboImageList() {
  return (
    <div className="w-full">
      <ImageList
        sx={{ width: 1000, height: 950 }}
        variant="woven"
        cols={3}
        gap={0}
        className="m-auto py-10"
      >
        {ComboList.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.img}?w=161&fit=crop&auto=format`}
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              className="hover:-translate-y-5 duration-300 delay-75"
            />
            <p className="font-head text-2xl text-white text-center">
              {item.title}
            </p>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
