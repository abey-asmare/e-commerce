import PropTypes from "prop-types";
import { Button } from "./ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ColorChoice from "./Favorites/ColorChoice";
import SizeChoice from "./Favorites/SizeChoice";
import ProductImage from "./Favorites/ProductImage";
import UserProfile from "./Favorites/UserProfile";
import Rating from "./Favorites/Rating";
import MessageSectionDialog from "./Favorites/MessageSectionDialog";

function ProductDetail() {
  const initialMessages = [
    {
      id: 1,
      sender: "productOwner",
      content: "Hello! How can I assist you today?",
      timestamp: "2023-05-10 10:00:00",
    },
    {
      id: 2,
      sender: "client",
      content: "Hi, I have a question about the product I ordered.",
      timestamp: "2023-05-10 10:05:00",
    },
  ];

  return (
    <div className="container px-10 pr-20 space-y-4 ">
      <div className="top">
        <div className="">
          <Breadcrumb className="font-medium py-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Clothes and shoes</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Men</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>T-shirt</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex gap-28 flex justify-between">
            <div className="left flex flex-col gap-2 justify-betwen">
              <ProductImage
                size="lg"
                src="/products/product-detail-img-1.jpg"
              />
              <div className="bottom flex gap-2">
                <ProductImage
                  size="sm"
                  isActive={true}
                  src="/products/product-detail-img-1.jpg"
                />
                <ProductImage
                  size="sm"
                  src="/products/product-detail-img-1.jpg"
                />
                <ProductImage
                  size="sm"
                  src="/products/product-detail-img-1.jpg"
                />
                <ProductImage
                  size="sm"
                  src="/products/product-detail-img-1.jpg"
                />
              </div>
            </div>
            <div className="right space-y-4">
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
              <div className="color-section">
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
                    isActive={true}
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
              <div className="add-btns flex gap-4 justify-between items-center">
                <Button className="bg-black text-white grow px-8 py-5 text-md font-medium hover:opacity-90 hover:bg-black">
                  <span className="mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                  </span>
                  Add to Cart
                </Button>

                <Button className="bg-[#E5D597] rounded-md p-5 hover:bg-[#E7D281] text-black">
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </span>
                </Button>
              </div>
              <div className="font-semibold flex gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>
                </span>
                <p> Free delivery on order over 2 pcs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom space-y-6">
        <div className="headers flex gap-20">
          <Button variant="link" className={` font-semibold text-2xl`} >
            Reviews
            </Button>
          <MessageSectionDialog initialMessages={initialMessages} clientName={"abey asmare"} productOwnerName={"customer support"} activeStatus={"Just now"} >
          <Button variant="link" className={` font-semibold text-2xl`}>
          Message
          </Button>

          </MessageSectionDialog>
          
        </div>
        <div className="flex justify-between">
          <div className="left max-w-[600px]">
            {/* review container goes here */}
            <div className="message-container">
            </div>
          </div>
          <div className="right">
            <div className="rating space-y-2 ">
              <Rating
                rating={4}
                text="4"
                text_className="pl-8"
                size="lg"
              ></Rating>
              <div className="rating-description border-t border-[#C4C4C4] pt-5 px-1">
                <RatingDesc
                  ratingNum={5}
                  computedWidth={10}
                  users_rated={15}
                ></RatingDesc>
                <RatingDesc
                  ratingNum={5}
                  computedWidth={10}
                  users_rated={15}
                ></RatingDesc>
                <RatingDesc
                  ratingNum={5}
                  computedWidth={10}
                  users_rated={15}
                ></RatingDesc>
                <RatingDesc
                  ratingNum={5}
                  computedWidth={10}
                  users_rated={15}
                ></RatingDesc>
                <RatingDesc
                  ratingNum={5}
                  computedWidth={10}
                  users_rated={15}
                ></RatingDesc>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RatingDesc({ ratingNum, computedWidth = 0, users_rated = 0 }) {
  return (
    <div className="flex gap-2 items-center font-medium">
      {ratingNum}
      <div className="relative progress grow rounded-[3px] h-3 bg-[#EBEBEB] overflow-hidden">
        <div
          className="absolute top-0 bottom-0 left-0 rounded-[3px] bg-[#E9C745]"
          style={{ width: `${computedWidth}%` }}
        ></div>
      </div>
      {users_rated}
    </div>
  );
}

RatingDesc.propTypes = {
  ratingNum: PropTypes.string.isRequired, // Text color (default: Tailwind class)
  computedWidth: PropTypes.number, // Text color (default: Tailwind class)
  users_rated: PropTypes.number, // Text color (default: Tailwind class)
};

function Comment({
  username,
  likes = 0,
  dislikes = 0,
  subcomments,
  avatar,
  activeStatus,
  rating,
  commentText,
}) {
  return (
    <div className="main-comment space-y-4">
      <div className="comment">
        <UserProfile
          type="compact"
          username={username}
          avatar={avatar}
          activeStatus={activeStatus}
          rating={rating}
        ></UserProfile>
        <div className="comment-section pl-10">
          <p className="comment-text">{commentText}</p>
          <div className="customer-interaction flex gap-6 items-center">
            <Button variant="link" className="font-medium text-[#AA8B15] px-0">
              Reply
            </Button>
            <div className="font-semibold flex gap-1.5 items-end">
              <Icon classname={"thumbs-up"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                  />
                </svg>
              </Icon>

              {likes > 0 && likes}
            </div>
            <div className="font-semibold flex gap-1.5 items-end">
              <Icon classname={"thumbs-down"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                  />
                </svg>
              </Icon>
              {dislikes > 0 && dislikes}
            </div>
          </div>
        </div>
      </div>
      {subcomments && (
        <div className="sub-comments pl-10 space-y-5">
          {subcomments.map((subcomments, index) => {
            return (
              <div key={index} className="sub-comment">
                <UserProfile
                  type="compact"
                  username={subcomments.username}
                  avatar={subcomments.avatar}
                  activeStatus={subcomments.activeStatus}
                  rating={subcomments.rating}
                ></UserProfile>
                <div className="comment-section pl-10">
                  <p className="comment">{subcomments.commentText}</p>
                  <div className="customer-interaction flex gap-6 items-center">
                    <Button
                      variant="link"
                      className="font-medium text-[#AA8B15] px-0"
                    >
                      Reply
                    </Button>
                    <div className="font-semibold flex gap-1.5 items-end">
                      <Icon classname={"thumbs-up"}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                          />
                        </svg>
                      </Icon>
                      {subcomments.likes && subcomments.likes}
                    </div>
                    <div className="font-semibold flex gap-1.5 items-end">
                      <Icon classname={"thumbs-down"}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                          />
                        </svg>
                      </Icon>
                      {subcomments.dislikes && subcomments.dislikes}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

Comment.propTypes = {
  username: PropTypes.string.isRequired, // The username must be a string
  likes: PropTypes.number, // Likes must be a number (default is 0 if not provided)
  dislikes: PropTypes.number, // Dislikes must be a number
  subcomments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired, // Subcomment username
      likes: PropTypes.number, // Subcomment likes
      dislikes: PropTypes.number, // Subcomment dislikes
      commentText: PropTypes.string.isRequired, // Subcomment text
    })
  ), // Subcomments should be an array of objects with specific keys
  avatar: PropTypes.string, // Avatar should be a string URL
  activeStatus: PropTypes.string, // Active status of the user
  rating: PropTypes.number, // Rating should be a number
  commentText: PropTypes.string.isRequired, // Main comment text is required
};

function Icon({
  children,
  classname,
  color = "text-[#929292]",
  hoverColor = "text-black",
  // fillColor = "text-black",
}) {
  return (
    <span className={`thumbs-up ${color} hover:${hoverColor} ${classname}`}>
      {children}
    </span>
  );
}

Icon.propTypes = {
  children: PropTypes.node.isRequired, // The icon or content to render inside the component
  classname: PropTypes.string, // Additional CSS classes for custom styling
  color: PropTypes.string, // Text color (default: Tailwind class)
  hoverColor: PropTypes.string, // Hover text color (default: Tailwind class)
};

export default ProductDetail;
