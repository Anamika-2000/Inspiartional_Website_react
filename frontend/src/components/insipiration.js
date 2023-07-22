import React from "react";
import navbarImg from "../images/icons8-creative-64.png";
import CelebrityImg from "../images/celebrity_life.jpg";
import SportsImg from "../images/Sports1.jpg";
import God_painting from "../images/God_painting.jpg";
import HistoryImg from "../images/history1.jpg";
import MusicImg from "../images/music1.jpg";
import social_mediaImg from "../images/social_media1.jpg";
import othersImg from "../images/othrsLife.jpg";
import WritingImg from "../images/Writting.jpg";

function Inspiration() {
  return (
    <div>
      <nav className="bg-pink-100 shadow-lg">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <a className="navbar-brand" href="/">
            <img src={navbarImg} alt="The better you" />
          </a>
          
          <a className="navbar-brand text-lg" href="#">
            <b>The better you :)</b>
          </a>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          History is not made in a few seconds! You really need to work hard on
          your dreams and live them with your eyes wide open :)
        </h1>

        <p className="mb-8">
          Life is really hard. We always need inspiration in front of us to work
          in a better way. This inspiration can come from various sources, such
          as real-life experiences, family members, celebrities, sportsmen,
          spiritual books, historical figures, movies, music, social media, and
          even the experiences of common people. Choose who inspires you the
          most!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <a
            href="/celebrity"
            target="_blank"
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              className="w-full h-48 object-cover"
              src={CelebrityImg}
              alt="Celebrities"
            />
            <div className="p-4">
              <p className="text-lg font-semibold mb-2">
                Celebrity inspire us how beautiful harwork can look like in the
                long run.
              </p>
            </div>
          </a>

          <a
            href="/sports"
            target="_blank"
            class="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              class="w-full h-48 object-cover"
              src={SportsImg}
              alt="Sports"
            />
            <div class="p-4">
              <p class="text-lg font-semibold mb-2">
                {" "}
                Sportsmen inspire us alot to do more.
              </p>
            </div>
          </a>
          <a
            href="/god"
            target="_blank"
            class="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              class="w-full h-48 object-cover"
              src={God_painting}
              alt="Spiritual"
            />
            <div class="p-4">
              <p class="text-lg font-semibold mb-2">
                All the religions greatly inspire mankind.
              </p>
            </div>
          </a>

          <a
            href="/history"
            target="_blank"
            class="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              class="w-full h-48 object-cover"
              src={HistoryImg}
              alt="Freedom fighter"
            />
            <div class="p-4">
              <p class="text-lg font-semibold mb-2">
                History was and will always be a great source of inspiration.
              </p>
            </div>
          </a>

          <a
            href="/music"
            target="_blank"
            class="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              class="w-full h-48 object-cover"
              src={MusicImg}
              alt="Freedom fighter"
            />
            <div class="p-4">
              <p class="text-lg font-semibold mb-2">
                Music has power to make you a new being.
              </p>
            </div>
          </a>
          <a
            href="/socialMedia"
            target="_blank"
            class="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              class="w-full h-48 object-cover"
              src={social_mediaImg}
              alt="Freedom fighter"
            />
            <div class="p-4">
              <p class="text-lg font-semibold mb-2">
                Social media is the most powerful thing to inspire you.
              </p>
            </div>
          </a>

          <a
            href="/common_people"
            target="_blank"
            class="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              class="w-full h-48 object-cover"
              src={othersImg}
              alt="Inspirations from others experiences"
            />
            <div class="p-4">
              <p class="text-lg font-semibold mb-2">
                Life of common public can even inspire you.
              </p>
            </div>
          </a>
          <a
            href="/writeInsipiration"
            target="_blank"
            class="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              class="w-full h-48 object-cover"
              src={WritingImg}
              alt="Write your own"
            />
            <div class="p-4">
              <p class="text-lg font-semibold mb-2">
                You can share your own life experiences here.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Inspiration;
