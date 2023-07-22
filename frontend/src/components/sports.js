import GodImg from "../images/sports2.jpg";

function Sports() {
  return (
    <>
      <h1 class="text-3xl font-bold text-center my-8">
        "Be the best version of yourself :)"
      </h1>

      <img src={GodImg} class="mx-auto mb-8 max-w-full" alt="Our life" />

      <div class="container mx-auto my-8">
        <h2 class="text-xl font-semibold mb-4">Select your favourite</h2>
        <ul class="list-disc pl-8">
          <li>
            <a
              href="https://sports.ndtv.com/cricket/virat-kohli-reveals-his-life-story-from-struggling-days-to-india-captain-1656071#:~:text=Kohli%20was%2018%20when%20his,dream%20to%20play%20for%20India."
              class="text-blue-500"
            >
              Virat Kohli
            </a>
          </li>
          <li>
            <a
              href="https://timesofindia.indiatimes.com/sports/more-sports/wrestling/i-was-paralysed-and-confined-to-the-chair-for-8-years-sangram/articleshow/21706607.cms"
              class="text-blue-500"
            >
              Sangram Singh
            </a>
          </li>
          <li>
            <a
              href="https://www.cityspidey.com/news/13974/milkha-singh-an-epitome-of-struggle"
              class="text-blue-500"
            >
              Milkha Singh
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sports;
