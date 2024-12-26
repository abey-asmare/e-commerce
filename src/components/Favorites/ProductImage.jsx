import PropTypes from "prop-types";


function ProductImage({
  size = "lg",
  src = "",
  alt = "product image",
  isActive = false,
}) {
  return size == "lg" ? (
    <div className="top mb-2 max-w-[600px]">
      <div className="hero-img rounded-[8px] overflow-hidden">
        <img src={src} alt={alt} className="w-full" />
      </div>
    </div>
  ) : (
    <div
      className={`sm-img hover:outline hover:outline-black hover:outline-offset-2 hero-img max-w-20 w-20 rounded-sm overflow-hidden ${
        isActive ? "outline outline-black outline-offset-2" : "opacity-60"
      }`}
    >
      <img src={src} alt={alt} className="w-full" />
    </div>
  );
}

ProductImage.propTypes = {
  size: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  isActive: PropTypes.bool,
};

export default ProductImage;