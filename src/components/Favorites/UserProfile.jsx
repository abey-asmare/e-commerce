import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PropTypes from "prop-types";
import Rating from "./Rating";

function UserProfile({
  avatar_classname = "",
  src = "/users/current_user.jpg",
  username = "Guest User",
  activeStatus = "Just Now",
  type = "",
  rating = 1,
  className
}) {
  const getInitials = (name) =>
    name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("");

  return (
    <div className={`user-profile  flex gap-2 ${className } ${type === "profile" ? "avatar" : ""}`}>
      <Avatar className={avatar_classname}>
        <AvatarImage src={src} />
        <AvatarFallback className="font-medium">{getInitials(username)}</AvatarFallback>
      </Avatar>
      {type === "profile" ? null : (
        <div className="flex flex-col">
          <p className="username text-black font-semibold flex items-center gap-2.5">
            {username}{" "}
            {type === "compact" && (
              <span className="text-gray-400 font-medium text-sm">{activeStatus}</span>
            )}
          </p>
          {type === "compact" ? (
            <Rating
              star_className="size-4"
              rating={rating}
              className="gap-0.5 -translate-y-2/3"
            />
          ) : (
            <p className="active-status font-medium text-sm text-gray-400">
              {activeStatus}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

UserProfile.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  avatar_classname: PropTypes.string,
  username: PropTypes.string,
  activeStatus: PropTypes.string,
  rating: PropTypes.number,
  type: PropTypes.string,
};

export default UserProfile;
