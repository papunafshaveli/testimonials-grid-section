import "../Blackish/Blackish.css";

const Blackish = () => {
  return (
    <div className="fourth">
      <div className="profile-div-blackish">
        <img
          className="profile-image-blackish"
          src="./images/image-patrick.jpg"
          alt="photo of man"
        ></img>
        <div className="name-and-status-blackish">
          <b className="name-blackish">Patrick Abrams</b>
          <p className="status-blackish">Verified Graduate</p>
        </div>
      </div>
      <h3 className="info-blackish">
        Awesome teaching support from TAs who did the bootcamp themselves.
        Getting guidance from them and learning from their experiences was easy.
      </h3>
      <p className="description-blackish">
        "The staff seem genuinely concerned about my progress which I find
        really refreshing. The program gave me the confidence necessary to be
        able to go out in the world and present myself as a capable junior
        developer. The standard is above the rest. You will get the personal
        attention you need from an incredible community of smart and amazing
        people. "
      </p>
    </div>
  );
};

export default Blackish;
