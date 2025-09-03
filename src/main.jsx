import { createRoot } from "react-dom/client";
import Bappa from "./GanapatiBappa";

const root = createRoot(document.getElementById("root"));

function Ganesha() {
    return (
      <>
        <header className="mainHead">
          <h1> 🌸Ashtavinayak Ganapati Temples Cards 🌸</h1>
        </header>
        <div className="cardsContainer">
          <div className="mainParent">
            <Bappa
              BappaName="🦚 Mayureshwar (Moreshwar) Ganapati"
              location="📍Location: Morgaon, Pune district, Maharashtra."
              information="* Information *"
            />

            <ul className="informationList">
              <li>
                Considered the first temple to visit in the Ashtavinayak Yatra.
              </li>
              <li>
                Lord Ganesha is worshipped here as Mayureshwar, who rides a
                peacock.
              </li>
              <li>
                The idol has a serpent around its waist and diamonds in its eyes
                and navel.
              </li>
              <li>
                This temple is the most important and often the starting and
                ending point of the pilgrimage.
              </li>
            </ul>
          </div>

          <div className="mainParent">
            <Bappa
              BappaName="🌟Siddhivinayak Ganapati"
              location="📍Siddhatek, Ahmednagar district, Maharashtra."
              information="* Information *"
            />
            <ul className="informationList">
              <li>
                The only Ashtavinayak temple situated on a riverbank (Bhima
                river).
              </li>
              <li>
                Lord Vishnu is believed to have worshipped Ganesha here to
                defeat demons Madhu and Kaitabha.
              </li>
              <li>
                The idol is right-trunked (Siddhi Vinayak), which is considered
                very powerful and rare.
              </li>
            </ul>
          </div>

          <div className="mainParent">
            <Bappa
              BappaName="🌞Ballaleshwar Ganapati"
              location="📍Location: Pali, Raigad district, Maharashtra."
              information="* Information *"
            />
            <ul className="informationList">
              <li>Named after Ballal, a devoted child of Lord Ganesha.</li>
              <li>
                This is the only temple where Ganesha is named after a devotee
                instead of a place.
              </li>
              <li>The idol has a diamond on its navel and faces east.</li>
              <li>
                The temple is built in such a way that during sunrise, the rays
                fall directly on the idol.
              </li>
            </ul>
          </div>

          <div className="mainParent">
            <Bappa
              BappaName="🌿Varadvinayak Ganapati"
              location="📍Location: Mahad, Raigad district, Maharashtra."
              information="* Information *"
            />
            <ul className="informationList">
              <li>Known as the giver of boons (Varad).</li>
              <li>
                The temple is unique because devotees are allowed to perform
                puja directly inside the sanctum (garbhagriha).
              </li>
              <li>
                The temple pond is considered sacred, and devotees often take
                holy dips here.
              </li>
            </ul>
          </div>

          <div className="mainParent">
            <Bappa
              BappaName="🌼Chintamani Ganapati"
              location="📍Location: Theur, Pune district, Maharashtra."
              information="* Information *"
            />
            <ul className="informationList">
              <li>
                Lord Ganesha here is believed to remove worries (Chinta) and
                grant peace.
              </li>
              <li>
                Sage Kapila had worshipped Ganesha here with the gem called
                Chintamani, which was later retrieved by Ganesha from a greedy
                king.
              </li>
              <li>The idol has large eyes and sits with a calm expression.</li>
            </ul>
          </div>

          <div className="mainParent">
            <Bappa
              BappaName="🏔Girijatmaj Ganapati"
              location="📍Lenyadri, Pune district, Maharashtra (inside caves)."
              information="* Information *"
            />
            <ul className="informationList">
              <li>
                The only Ashtavinayak temple located on a mountain in caves
                (part of 18 Buddhist rock-cut caves).
              </li>
              <li>“Girijatmaj” means “son of Goddess Parvati (Girija).”</li>
              <li>The temple has 307 steps leading up to it.</li>
              <li>
                The idol faces north and is carved on a single stone wall (not a
                separate idol).
              </li>
            </ul>
          </div>

          <div className="mainParent">
            <Bappa
              BappaName="🔱Vighneshwar Ganapati"
              location="📍Location: Ozar, Pune district, Maharashtra."
              information="* Information *"
            />
            <ul className="informationList">
              <li>Famous for removing obstacles (Vighna).</li>
              <li>
                Built to commemorate Ganesha’s victory over demon Vighnasura.
              </li>
              <li>
                The temple has beautiful golden domes and a deepmala (lamp
                tower).
              </li>
              <li>The idol faces east with rubies in its eyes.</li>
            </ul>
          </div>

          <div className="mainParent">
            <Bappa
              BappaName="🔥Mahaganapati"
              location="📍Location: Ranjangaon, Pune district, Maharashtra."
              information="* Information *"
            />
            <ul className="informationList">
              <li>Considered the most powerful of all Ashtavinayak temples.</li>
              <li>
                Lord Shiva is believed to have worshipped Mahaganapati before
                fighting Tripurasura.
              </li>
              <li>
                The idol is said to be very large (Mahaganapati) with 10 trunks
                and 20 arms, but normally only the smaller idol is visible to
                devotees.
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}
root.render(<Ganesha />);