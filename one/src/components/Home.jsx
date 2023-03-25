import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>techyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            we are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            asperiores eveniet harum iusto? Sed doloremque fuga, vitae
            repudiandae officiis consequatur laboriosam. Debitis maiores impedit
            ab, nulla itaque porro rem deleniti! Sit ex nobis nemo. Aperiam
            itaque error, atque, libero excepturi deleniti magni quas voluptas
            reprehenderit, temporibus labore facere non exercitationem at
            commodi ipsum mollitia! Maiores repellat repellendus laudantium
            animi officia illo nesciunt enim eligendi recusandae consequuntur
            asperiores libero ipsam cum assumenda, dolorum doloremque numquam
            nisi suscipit voluptas eaque distinctio sint minima. Perspiciatis
            aspernatur voluptatum alias consequatur culpa unde dolore, eius
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazone</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
