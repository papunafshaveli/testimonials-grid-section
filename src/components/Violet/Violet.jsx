import "../Violet/Violet.css";

const Violet = () => {
  return (
    <div className="first">
      <div className="profile-div">
        <img
          className="profile-image"
          src="./images/image-daniel.jpg"
          alt="photo of man"
        ></img>
        <div className="name-and-status">
          <b className="name">Daniel Clifford</b>
          <p className="status">Verified Graduate</p>
        </div>
      </div>
      <h3 className="info">
        I received a job offer mid-course, and the subjects I learned were
        current, if not more so, in the company I joined. I honestly feel I got
        every penny's worth.
      </h3>
      <p className="description">
        "I was an EMT for many years before I joined the bootcamp. I've been
        looking to make a transition and have heard some people who had an
        amazing experience here. I signed up for the free intro course and found
        it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was
        the best - and most grueling - time of my life. Since completing the
        course, I've successfully switched careers, working as a Software
        Engineer at a VR startup".
      </p>
    </div>
  );
};

export default Violet;
