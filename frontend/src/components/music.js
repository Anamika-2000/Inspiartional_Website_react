import musicImg from "../images/music2.jpg";

function Music() {
  return (
    <>
      <h1 class="text-3xl font-bold text-center my-8">
        "Music has the power to make this place a more beautiful place to live!"
      </h1>

      <img
        src={musicImg}
        class="mx-auto mb-8 max-w-full"
        alt="Music"
        width="800"
        height="500"
      />

      <div class="container mx-auto my-8">
        <h2 class="text-xl font-semibold mb-4">Select from these:</h2>
        <ul class="list-disc pl-8">
          <li>
            <a
              href="https://timesofindia.indiatimes.com/entertainment/punjabi/movies/did-you-know/did-you-know-about-gurdas-maans-journey-from-an-electricity-board-employee-to-punjabs-living-legend/articleshow/68269344.cms"
              class="text-blue-500"
            >
              Gurdas Maan
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Master_Saleem"
              class="text-blue-500"
            >
              Master Salim
            </a>
          </li>
          <li>
            <a
              href="https://nettv4u.com/entertainment/hindi/article/struggling-life-of-sonu-nigam"
              class="text-blue-500"
            >
              Sonu Nigam
            </a>
          </li>
          <li>
            <a
              href="https://www.mansworldindia.com/currentedition/covers/the-self-made-success-story-of-guru-randhawa/#:~:text=Born%20in%20Gurdaspur%2C%20Punjab%2C%20Randhawa,parties%20and%20functions%20in%20Delhi."
              class="text-blue-500"
            >
              Guru Randhawa
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Music;
