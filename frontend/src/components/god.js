import GodImg from "../images/god_image2.jpg"


function GOD() {
  return (
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8 text-center">
        "No one who does good work will ever come to a bad end."
      </h1>
      <img
        src={GodImg}
        class="mx-auto mb-8 rounded-lg shadow-lg"
        alt="God"
        width="1000"
        height="500"
      />
      <h2 class="text-2xl font-bold mb-4">Select Religion</h2>
      <ul class="list-disc pl-8">
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Hindu_texts"
            class="text-blue-500 hover:underline"
          >
            Hinduism
          </a>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Sikh_scriptures"
            class="text-blue-500 hover:underline"
          >
            Sikhism
          </a>
        </li>
        <li>
          <a
            href="https://www.womansday.com/life/entertainment/g25662481/best-christian-books/"
            class="text-blue-500 hover:underline"
          >
            Christianity
          </a>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Islamic_holy_books"
            class="text-blue-500 hover:underline"
          >
            Islam
          </a>
        </li>
      </ul>
    </div>
  );
}

export default GOD;
