import HistoryImg from "../images/history.jpg";

function History() {
  return (
    <>
      <h1 class="text-3xl font-bold text-center my-8">
        "History is theirs whose language is sun :)"
      </h1>

      <img
        src={HistoryImg}
        class="mx-auto mb-8 max-w-full"
        alt="History"
        width="700"
        height="500"
      />

      <div class="container mx-auto my-8">
        <h2 class="text-xl font-semibold mb-4">Select from these</h2>
        <ul class="list-disc pl-8">
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Mughal_Empire#:~:text=The%20Mughal%20Empire%20was%20founded,Khan%20on%20his%20mother's%20side."
              class="text-blue-500"
            >
              Mughals
            </a>
          </li>
          <li>
            <a
              href="https://www.britannica.com/biography/Lakshmi-Bai"
              class="text-blue-500"
            >
              Rani Laxmi Bai
            </a>
          </li>
          <li>
            <a
              href="https://www.nonviolent-conflict.org/indian-independence-struggle-1930-1931/#:~:text=Mohandas%20K.,movement%20from%20about%201940%2D1942."
              class="text-blue-500"
            >
              Mahatma Gandhi
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default History;
