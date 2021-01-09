import React from 'react';
import './component/css/style.css';
import { FaArrowLeft } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import snowflake from'./component/image/snowflake.jpg';
import dubstep from'./component/image/dubstep2.jpg';
import happyrock from'./component/image/happyrock.jpg';
import track from'./component/image/track3.jpeg';
import retrosoul from'./component/image/retrosoul.jpg';
import snowflake2 from'./component/image/snowflake2.jpg';

class App extends React.Component {
  render() {
     return (
        <div>
          <div className="container">
            <div className="playlist">
              <div className="playlist__control">
                <span>
                  <FaArrowLeft />
                </span>

                <span className="playlist__control__name">
                  Favourite
                </span>

                <span className="more">
                  <FaEllipsisV />
                </span>
                <div className="clearfix" />
              </div>

              <ul className="playlist__music">
                <li className="playlist__music__item">
                  <a href="#" className="playlist__music__item__link">
                    <div className="playlist__music__item__link__image">
                      <img src={snowflake} />
                    </div>
                    <div>
                      <div className="playlist__music__item__link__name">
                        <div className="main-name">Living Nightmare</div>
                        <div className="sub-name">Snowflake</div>
                      </div>
                      <span className="playlist__music__item__link__time">
                        2:58
                      </span>
                    </div>
                  </a>
                </li>

                <li className="playlist__music__item">
                  <a href="#" className="playlist__music__item__link">
                    <div className="playlist__music__item__link__image">
                      <img src={dubstep} />
                    </div>
                    <div>
                      <div className="playlist__music__item__link__name">
                        <div className="main-name">Dubstep</div>
                        <div className="sub-name">Bensound</div>
                      </div>
                      <span className="playlist__music__item__link__time">
                        2:04
                      </span>
                    </div>
                  </a>
                </li>

                <li className="playlist__music__item">
                  <a href="#" className="playlist__music__item__link">
                    <div className="playlist__music__item__link__image">
                      <img src={track} />
                    </div>
                    <div>
                      <div className="playlist__music__item__link__name">
                        <div className="main-name">42</div>
                        <div className="sub-name">Secret of life</div>
                      </div>
                      <span className="playlist__music__item__link__time">
                        1:18
                      </span>
                    </div>
                  </a>
                </li>

                <li className="playlist__music__item">
                  <a href="#" className="playlist__music__item__link">
                    <div className="playlist__music__item__link__image">
                      <img src={retrosoul} />
                    </div>
                    <div>
                      <div className="playlist__music__item__link__name">
                        <div className="main-name">Retrosoul</div>
                        <div className="sub-name">Bensound</div>
                      </div>
                      <span className="playlist__music__item__link__time">
                        3:36
                      </span>
                    </div>
                  </a>
                </li>

                <li className="playlist__music__item">
                  <a href="#" className="playlist__music__item__link">
                    <div className="playlist__music__item__link__image">
                      <img src={snowflake2} />
                    </div>
                    <div>
                      <div className="playlist__music__item__link__name">
                        <div className="main-name">Holiday Funky Blues</div>
                        <div className="sub-name">Snowflake</div>
                      </div>
                      <span className="playlist__music__item__link__time">
                        2:55
                      </span>
                    </div>
                  </a>
                </li>

                <li className="playlist__music__item">
                  <a href="#" className="playlist__music__item__link">
                    <div className="playlist__music__item__link__image">
                      <img src={happyrock} />
                    </div>
                    <div>
                      <div className="playlist__music__item__link__name">
                        <div className="main-name">Happy Rock</div>
                        <div className="sub-name">Bensound</div>
                      </div>
                      <span className="playlist__music__item__link__time">
                        1:45
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
     );
  }
}

export default App;
