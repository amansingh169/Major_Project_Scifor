import Footer from "./Footer";

const EmptySection = ({ sectionName }) => {
  return (
    <>
      <div
        className="empty-section d-flex align-items-center justify-content-center px-5"
        style={{ height: "700px" }}
      >
        <div className="empty-section-message text-center" style={{ maxWidth: "900px" }}>
          <svg style={{ width: "100px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 52">
            <g fill="none" fillRule="evenodd">
              <path
                d="M4.058 0C1.094 0 0 1.098 0 4.075v35.922c0 .338.013.65.043.94.068.65-.043 1.934 2.285 2.96 1.553.683 7.62 3.208 18.203 7.573 1.024.428 1.313.529 2.081.529.685.013 1.137-.099 2.072-.53 10.59-4.227 16.66-6.752 18.213-7.573 2.327-1.23 2.097-3.561 2.097-3.899V4.075C44.994 1.098 44.13 0 41.166 0H4.058z"
                fill="#404044"
              ></path>
              <path
                stroke="#FFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 18l4.91 2.545-2.455 4M25.544 28.705c-1.056-.131-1.806-.14-2.25-.025-.444.115-1.209.514-2.294 1.197M29.09 21.727L25 19.5l2.045-3.5"
              ></path>
            </g>
          </svg>
          <h1 className="mt-4">You haven't added anything in your {sectionName} yet.</h1>
          <button className="btn btn-primary rounded-10 mt-3">Shot for Games & Apps</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EmptySection;
