"use client";
import { useRouter } from "next/navigation";

export const Footer = (props) => {
  const router = useRouter();
  const handleMovieZButton = () => {
    router.push(`/`);
  };
  return (
    <div className="pt-[52px]">
      <div className="flex w-full pl-20 pr-20 pt-10 pb-10 bg-[#4338CA] h-[280px] justify-between text-[#FAFAFA]">
        <div className="flex">
          <div>
            <div className="">
              <div className="flex gap-2 w-full" onClick={handleMovieZButton}>
                <img
                  className="w-[20px] cursor-pointer"
                  src="/WhiteMovieZ.svg"
                />
                <button className="cursor-pointer">MovieZ</button>
              </div>
            </div>
            <h1 className="pt-3">© 2024 Movie Z. All Rights Reserved.</h1>
          </div>
        </div>
        <div className="flex">
          <div>
            <h1 className="">Contact Information</h1>
            <div className="flex gap-2">
              <img className="w-4" src="/Email.svg" />
              <h1 className="text-[14px]">
                <span className="flex">Email:</span>support@movieZ.com
              </h1>
            </div>
            <div className="flex gap-2">
              <img className="w-4" src="/phone.svg" />
              <h1 className="text-[14px]">
                <span className="flex">Phone:</span>+976 (11) 123-4567
              </h1>
            </div>
          </div>
          <div className="pl-[96px] gap-2">
            <h1 className="">Follow us</h1>
            <div className="flex gap-2">
              <button>Facebook</button>
              <button>Instagram</button>
              <button>Twitter</button>
              <button>Youtube</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
