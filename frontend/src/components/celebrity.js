import React from "react";

import image from "../images/celebrity2.jpg";

function Celebrity() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">
        What you see is not really what we are going through!
      </h1>
      <img src={image} class="mx-auto mb-8 max-w-full" alt="Our life"></img>
      <div class="container mx-auto my-8">
        <h2 class="text-xl font-semibold mb-4">Select your favourite actor</h2>
        <ul class="list-disc pl-8">
          <li>
            <a
              href="https://www.indiatvnews.com/entertainment/celebrities/deepika-padukone-recalls-her-struggle-with-depression-says-mom-realised-when-my-cry-was-different-721068"
              class="text-blue-500"
            >
              Deepika Padukone
            </a>
          </li>
          <li>
            <a
              href="https://www.hindustantimes.com/bollywood/my-struggle-period-wasn-t-easy-at-all-for-close-to-3-5-years-i-was-just-groping-in-the-dark-ranveer-singh/story-5sz1UKfFCH34uQoiHAHj0N.html"
              class="text-blue-500"
            >
              Ranveer Singh
            </a>
          </li>
          <li>
            <a
              href="https://www.popxo.com/article/hina-khan-struggles-912256/"
              class="text-blue-500"
            >
              Hina Khan
            </a>
          </li>
          <li>
            <a
              href="https://www.justshowbiz.net/actress-rubina-dilaik-unfolded-her-struggle-story-and-it-was-sad-and-shocking/"
              class="text-blue-500"
            >
              Rubina Dilaik
            </a>
          </li>
          <li>
            <a
              href="https://www.indiatoday.in/television/celebrity/story/prince-narula-recalls-getting-rejected-from-auditions-says-was-told-body-patla-kar-lo-heavy-ho-exclusive-2361855-2023-04-19"
              class="text-blue-500"
            >
              Prince Narula
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Celebrity;
