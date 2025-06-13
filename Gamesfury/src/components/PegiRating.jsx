const PegiRating = ({ pegi }) => {
  if (!pegi || !pegi?.rating) return null;

  let ratingIcon = "";

  switch (pegi.rating) {
    case "3":
      ratingIcon = "https://pegi.info/sites/default/files/inline-images/age-3-black_0.jpg";
      break;
    case "7":
      ratingIcon = "https://pegi.info/sites/default/files/inline-images/age-7-black.jpg";
      break;
    case "12":
      ratingIcon = "https://pegi.info/sites/default/files/inline-images/age-12-black.jpg";
      break;
    case "16":
      ratingIcon = "https://pegi.info/sites/default/files/inline-images/age-16-black.jpg";
      break;
    case "18":
      ratingIcon = "https://pegi.info/sites/default/files/inline-images/age-18-black%202_0.jpg";
      break;
    default:
      ratingIcon =
        "https://pegi.info/sites/default/files/inline-images/PEGI_Parental_Guidance_Recommended.png";
      break;
  }

  return (
    <div className="pegi-rating d-flex gap-3 p-2 rounded">
      <img className="pegi-logo object-fit-contain" src={ratingIcon} alt={`PEGI ${pegi.rating}`} />

      <div className="pegi-info">
        <p className="text-primary fw-bold fs-4 m-0">{pegi.rating}+</p>
        <hr className="my-1" />
        <p className="m-0 fw-semibold">{pegi.descriptors || "Pegi Online"}</p>
      </div>
    </div>
  );
};

export default PegiRating;
