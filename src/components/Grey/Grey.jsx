import "../Grey/Grey.css";

const Grey = () => {
  return (
    <div className="second">
      <div className="profile-div-grey">
        <img
          className="profile-image-grey"
          src="./images/image-jonathan.jpg"
          alt="photo of man"
        ></img>
        <div className="name-and-status-grey">
          <b className="name-grey">Jonathan Walters</b>
          <p className="status-grey">Verified Graduate</p>
        </div>
      </div>
      <h3 className="info-grey">
        The team was very supportive and kept me motivated{" "}
      </h3>
      <p className="description-grey">
        "I started as a total newbie with virtually no coding skills. I now work
        as a mobile engineer for a big company. This was one of the best
        investments I've made in myself.".
      </p>
    </div>
  );
};

export default Grey;
