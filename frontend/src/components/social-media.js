import GodImg from "../images/Social_media2.jpg";

function SocialMedia() {
  return (
    <>
      <h1 class="text-3xl font-bold text-center my-8">
        "Social media has the power to change you!"
      </h1>

      <img
        src={GodImg}
        class="mx-auto mb-8 max-w-full"
        alt="Social media"
        width="800"
        height="500"
      />
      <div class="container mx-auto my-8">
        <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <p>
            Social media is highly influencing society. It has the power to
            change the mentality of the public. The rise of social networking
            sites such as Facebook, Twitter, LinkedIn, and Instagram has created
            a convenient way for people to connect. We can now personalize our
            online presence and meet more people.
          </p>

          <p>
            While social media offers tons of advantages, it also comes with a
            significant downside. A study in the "Journal of Depression and
            Anxiety" suggested a link between high social media usage and
            increased depression. Another research found that people who use
            social media are 2.7 times more likely to be depressed than those
            who don't.
          </p>

          <p>
            The exact reasons social media is linked with depression are up for
            debate. However, some possible causes include:
          </p>

          <ul class="list-disc pl-8">
            <li>Fear of missing out</li>
            <li>Spending too much time online</li>
            <li>Cyberbullying</li>
          </ul>

          <p>
            We can use social media to encourage others and ourselves. It can
            make us feel really happy with the appreciation posts of others. Now
            there are many social media influencers too who inspire others a
            lot. You can find such channels on YouTube, etc.
          </p>
        </div>
      </div>
    </>
  );
}

export default SocialMedia;
