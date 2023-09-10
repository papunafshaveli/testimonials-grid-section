import "../FirstWhite/FirstWhite.css";

const FirstWhite = () => {
  return (
    <div className="third">
      <div className="profile-div-firstwhite">
        <img
          className="profile-image-firstwhite"
          src="./images/image-jeanette.jpg"
          alt="photo of women"
        ></img>
        <div className="name-and-status-firstwhite">
          <b className="name-firstwhite">Jeanette Harmon</b>
          <p className="status-firstwhite">Verified Graduate</p>
        </div>
      </div>
      <h3 className="info-firstwhite">
        An overall wonderful and rewarding experience
      </h3>
      <p className="description-firstwhite">
        "Thank you for the wonderful experience! I now have a job I really
        enjoy, and make a good living while doing something I love."
      </p>
    </div>
  );
};

export default FirstWhite;
