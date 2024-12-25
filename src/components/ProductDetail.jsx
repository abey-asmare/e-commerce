import PropTypes from "prop-types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

function ProductDetail() {
  return (
    <div className="px-10">
      <p>
        Clothes and shoes {">"} Men {">"} T-shirt
      </p>
      <div className="flex gap-28 ">
        <div className="left">
          <ProductImage size="lg" src="/products/product-detail-img-1.jpg" />
          <div className="bottom flex gap-2">
            <ProductImage size="sm" src="/products/product-detail-img-1.jpg" />
            <ProductImage size="sm" src="/products/product-detail-img-1.jpg" />
            <ProductImage size="sm" src="/products/product-detail-img-1.jpg" />
            <ProductImage size="sm" src="/products/product-detail-img-1.jpg" />
          </div>
        </div>
        <div className="right">
          <UserProfile
            src="/users/current_user.jpg"
            username="abey asmare"
            activeStatus="Just Now"
          ></UserProfile>
          <div className="title-rating">
            <h2 className="text-2xl font-semibold ">
              MENS WHITE T-SHIRT ESSENTIAL
            </h2>
            <Rating text="42 reviews"></Rating>
          </div>
          <div className="price text-3xl font-semibold">2500Birr</div>
          <div>
            <div className="color-description-heading font-semibold text-base flex justify-between">
              <p>
                Color <span className="text-gray-400"> {">"} White</span>
              </p>
              <button className="hover:underline">view Description</button>
            </div>
            <div className="color-choices space-x-2 my-4">
              <ColorChoice
                color="white"
                src="/products/product-detail-img-1.jpg"
              ></ColorChoice>
              <ColorChoice
                color="white"
                src="/products/product-detail-img-1.jpg"
              ></ColorChoice>
              <ColorChoice
                color="white"
                src="/products/product-detail-img-1.jpg"
              ></ColorChoice>
            </div>
          </div>
          <div>
            <div className="color-description-heading font-semibold text-base">
              <p>
                Size <span className="text-gray-400"> {">"} EU Men</span>
              </p>
            </div>
            <div className="size-choices flex gap-3">
              <SizeChoice size="sm"></SizeChoice>
              <SizeChoice size="md"></SizeChoice>
              <SizeChoice size="lg"></SizeChoice>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SizeChoice({ size }) {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem
        value={size}
        className="border border-gray-400 py-3 h-10 data-[state=off]:bg-transparent data-[state=off]:text-gray-600 hover:text-black hover:border-black px-6 rounded-none text-base font-semibold data-[state=on]:bg-[#1A1A1D] data-[state=on]:text-white"
      >
        {size }
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

SizeChoice.propTypes = {
  size: PropTypes.string,
};

function ColorChoice({ color, src }) {
  return (
    <button
      className={`color-choice hover:outline hover:outline-offset-2 hover:outline-black w-12 h-[74px] overflow-hidden rounded-md ${color}`}
    >
      <img
        src={src}
        alt="color choice"
        className="object-cover w-full h-full "
      />
    </button>
  );
}

ColorChoice.propTypes = {
  color: PropTypes.string,
  src: PropTypes.string,
};

function ProductImage({ size = "lg", src = "", alt = "product image" }) {
  return size == "lg" ? (
    <div className="top mb-2 max-w-[560px]">
      <div className="hero-img rounded-[8px] overflow-hidden">
        <img src={src} alt={alt} className="w-full" />
      </div>
    </div>
  ) : (
    <div className="sm-img hero-img max-w-20 w-20 rounded-sm overflow-hidden">
      <img src={src} alt={alt} className="w-full" />
    </div>
  );
}

ProductImage.propTypes = {
  size: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

function UserProfile({
  profileOnly = true,
  avatar_classname = "",
  src = "",
  username = "",
  activeStatus = "",
}) {
  return profileOnly ? (
    <div className="user-profile flex gap-2">
      <Avatar className={` ` + avatar_classname}>
        <AvatarImage src={src} />
        <AvatarFallback>
          {username
            .split(" ")
            .map((name) => name.charAt(0))
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div>
        <p className="username font-semibold">{username}</p>
        <p className="active-status font-medium text-sm text-gray-400">
          {activeStatus}
        </p>
      </div>
    </div>
  ) : (
    <div className="avatar">
      <Avatar className={` ` + avatar_classname}>
        <AvatarImage src="/users/current_user.jpg" />
        <AvatarFallback>
          {username
            .split(" ")
            .map((name) => name.charAt(0))
            .join("")}
        </AvatarFallback>
      </Avatar>
    </div>
  );
}

UserProfile.propTypes = {
  profileOnly: PropTypes.bool,
  src: PropTypes.string,
  avatar_classname: PropTypes.string,
  username: PropTypes.string,
  activeStatus: PropTypes.string,
};

function Rating({ size = "sm", rating = 4, text = "" }) {
  return (
    <span
      className={`text-gray-300 flex mt-2 items-start ${
        size == "sm"
          ? "gap-6 text-sm"
          : "justify-between font-medium text-2xl text-black"
      }`}
    >
      <span className="flex gap-1.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={`${rating > index && "text-[#E9C745]"}  ${
              size == "sm" ? "w-[16px] h-[16px]" : "w-9 h-9"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        ))}
      </span>
      <span className="text-gray-400 font-medium text-base">{text}</span>
    </span>
  );
}

Rating.propTypes = {
  size: PropTypes.string,
  rating: PropTypes.number,
  text: PropTypes.number,
};

export default ProductDetail;
