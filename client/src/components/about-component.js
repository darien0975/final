import React from "react";

const AboutComponent = () => {
  return (
    <main>
      <div className="container py-4 about-container">
        <div className="row align-items-md-stretch introduce bg-warning rounded-3">
          <div className="col-md-6 mb-2 fs-5">
            <div className="h-100 p-5">
              <h2>什麼是劇本殺?</h2>
              <p>
                “劇本殺”，一詞起源於西方宴會實況角色扮演“謀殺之謎”，是玩家到實景場館，體驗推理性質的項目。劇本殺的規則是，玩家先選擇人物，閱讀人物對應劇本，蒐集線索後找出活動裏隱藏的真兇。
                劇本殺不僅僅是一個遊戲，更是一個集知識屬性、心理博弈屬性、強社交屬性於一體的娛樂項目。
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="h-100 p-5">
              <iframe
                width="460"
                height="275"
                src="https://www.youtube.com/embed/bpkUHJhd4HY?si=EyFWkFNyBAm4QS2-"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="row align-items-md-stretch mt-5">
          <div className="col-md-12 mb-2 fs-5">
            <h1>劇本殺遊戲流程</h1>
            <p>
              1.玩家選擇好自己想要扮演的角色（或組織者直接分配），組織者發背景和人物介紹給玩家
            </p>
            <p>2.玩家獲得自己角色的劇本。</p>
            <p>3.玩家閱讀自己的角色劇本並掌握角色身份與任務目標。</p>
            <p>
              4.玩家將自己代入到劇本中的角色身份並做自我介紹來展開劇本內容。
            </p>
            <p>5.玩家間互動、取得線索、分析線索來探索劇本的全盤故事內容。</p>
            <p>6.玩家對劇本故事終局進行投票選擇，劇本結束。</p>
            <p>7.主持人公布劇本真相，引領玩家復盤、全覽劇本故事內容。</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutComponent;
