/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  const {
    productName,
    productImage,
    description,
    price,
    category,
    ratings,
    productCreationDate,
  } = product;

  const formattedDate = new Date(productCreationDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  return (
    <div className="">
      <div className="card bg-base-100 h-[600px] shadow-xl">
        <figure>
          <img className="px-10" src={productImage} alt="proudct" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {productName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <div className="">
            <div className="flex justify-between">
              <p>
                <strong>Price:</strong> {price} TK
              </p>
              <p>
                <strong>Rating:</strong> {ratings}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="">
                <div className="">
                  <p className="badge badge-outline">{category}</p>
                </div>
              </div>
              <div className="">
                <p>
                  <strong></strong> {formattedDate}
                </p>
              </div>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary mt-2">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
