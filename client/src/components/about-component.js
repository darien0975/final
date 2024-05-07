import React from "react";
import friends from "../pictures/friends.png";
import london from "../pictures/london.png";

const AboutComponent = () => {
  return (
    <main>
      <div className="container py-4 about-container">
        <div className="container-fluid bg-warning rounded-3 introduce">
          <div className="row align-items-md-stretch ">
            <div className="col-md-12 fs-5">
              <div className="h-100 p-4">
                <h2>什麼是劇本殺?</h2>
                <p>
                  “劇本殺”，一詞起源於西方宴會實況角色扮演“謀殺之謎”，是玩家到實景場館，體驗推理性質的項目。劇本殺的規則是，玩家先選擇人物，閱讀人物對應劇本，蒐集線索後找出活動裏隱藏的真兇。
                  劇本殺不僅僅是一個遊戲，更是一個集知識屬性、心理博弈屬性、強社交屬性於一體的娛樂項目。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-md-stretch video justify-content-center">
          <div className="col-md-12 video-box py-3">
            <iframe
              src="https://www.youtube.com/embed/bpkUHJhd4HY?si=HtoaP6sr9Feh4v6y"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="row align-items-md-stretch mt-5 sop">
          <div className="col-md-12 mb-2 fs-5 text-left">
            <h1 className="text-center">劇本殺遊戲流程</h1>
            <div>
              <p>
                1.
                玩家選擇好自己想要扮演的角色（或組織者直接分配），組織者發背景和人物介紹給玩家
              </p>
              <p>2. 玩家獲得自己角色的劇本。</p>
              <p>3. 玩家閱讀自己的角色劇本並掌握角色身份與任務目標。</p>
              <p>
                4. 玩家將自己代入到劇本中的角色身份並做自我介紹來展開劇本內容。
              </p>
              <p>5. 玩家間互動、取得線索、分析線索來探索劇本的全盤故事內容。</p>
              <p>6. 玩家對劇本故事終局進行投票選擇，劇本結束。</p>
              <p>7. 主持人公布劇本真相，引領玩家復盤、全覽劇本故事內容。</p>
            </div>
          </div>
        </div>
        <div className="row align-items-md-stretch feature">
          <h1 className="text-center">劇本殺特色</h1>
          <div className="row mb-2 p-3 fs-5 feature-box">
            <div className="col-md-8 feature-box-img">
              <img src={friends} alt="" />
            </div>
            <div className="col-md-4 feature-box-text">
              <h2>增進社交</h2>
              <p>
                劇本殺是一個極佳的社交活動，讓人們在互動中建立更深層次的人際關係。透過討論和合作，參與者們可以共同解決謎團，培養團隊精神，並建立持久的友誼。
              </p>
            </div>
          </div>
          <div className="row mb-2 p-3 fs-5 feature-box">
            <div className="col-md-4 feature-box-text">
              <h2>身歷其境</h2>
              <p>
                透過劇本殺，參與者們可以扮演各種不同的角色，從而深入體驗不同的生活和情境。這種身份轉換讓人們能夠更好地理解他人，拓展視野，並增進同理心。
              </p>
            </div>
            <div className="col-md-8 feature-box-img">
              <img src={london} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutComponent;
