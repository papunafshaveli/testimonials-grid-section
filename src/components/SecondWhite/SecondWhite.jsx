import "../SecondWhite/SecondWhite.css";

const SecondWhite = () => {
  return (
    <div className="fifth">
      <div className="profile-div-secondwhite">
        <img
          className="profile-image-secondwhite"
          src="./images/image-kira.jpg"
          alt="photo of women"
        ></img>
        <div className="name-and-status-secondwhite">
          <b className="name-secondwhite">Kira Whittle</b>
          <p className="status-secondwhite">Verified Graduate</p>
        </div>
      </div>
      <h3 className="info-secondwhite">
        Such a life-changing experience. Highly recommended!
      </h3>
      <p className="description-secondwhite">
        "Before joining the bootcamp, I've never written a line of code. I
        needed some structure from professionals who can help me learn
        programming step by step. I was encouraged to enroll by a former student
        of theirs who can only say wonderful things about the program. The
        entire curriculum and staff did not disappoint. They were very hands-on
        and I never had to wait long for assistance. The agile team project, in
        particular, was outstanding. It took my learning to the next level in a
        way that no tutorial could ever have. In fact, I've often referred to it
        during interviews as an example of my developent experience. It
        certainly helped me land a job as a full-stack developer after receiving
        multiple offers. 100% recommend!"
      </p>
    </div>
  );
};

export default SecondWhite;
