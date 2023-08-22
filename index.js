
//日付オブジェクトを作成
let date7 = new Date();
//日付オブジェクトから「年」を取得
let year = date7.getFullYear();
//日付オブジェクトから「月」を取得
let month = date7.getMonth() + 1;
//日付オブジェクトから「日」を取得
let day = date7.getDate();

//年を出力する
let ad = document.getElementById("wstCalendar");
ad.innerHTML = "株式会社 亜細亜情報システム 組織図（" + year + "年度）";

//月を出力する
let today = document.getElementById("date");
today.innerHTML = year + "/" + month + "/" + day + "　現在";

let ais = {
  officer: {
    shareholder: "株主総会",
    regulation: {
      position: "取締役会",
      audit: {
        groupName: "監査役",
        name: "鄭 昌株", position: "（非常勤）",
        chairman: {
          groupName: "代表取締役会長",
          name: "趙 元章",
          president: {
            prsGroup: [
              { name: "東山 龍二", position: "営業本部長" },
              { name: "田中 耕一郎", position: "代表取締役社長" },
              { name: "猪狩 正", position: "相談役" }
            ],
            category: {
              management: {//管理本部
                groupName: "管理本部",
                name: "田中 耕一郎", position: "本部長 （兼）",
                mngGroup: {
                  groupName: "経営支援室",
                  groupMember: [
                    { name: "李 恵元", position: "室長" },
                    { name: "青柳 いずみ", position: "課長" },
                    { name: "提箸 てん", position: "社員" }
                  ]
                },
                bizGroup: {
                  groupName: "営業部",
                  groupMember: [
                    { name: "真砂 憲昭", position: "部長" },
                    { name: "裵 城準", position: "次長" },
                    { name: "趙 祥延", position: "代理" }
                  ]
                },
                qltGroup: {
                  groupName: "品質管理部",
                  groupMember: [
                    { name: "遠藤 勝良", position: "部長" },
                    { name: "榛葉 佳彦", position: "部長" }
                  ]
                },
                sesGroup: {
                  groupName: "スマートエナジーソリューション部",
                  groupMember: [
                    { name: "真砂 憲昭", position: "部長" }
                  ]
                }
              },
              development: {//開発本部
                name: "金 允泳", position: "取締役 兼 本部長",
                groupProxy: {
                  name: "全 正暉", position: "本部長代理",
                  group: {
                    group1: {
                      groupName: "第１グループ",
                      groupMember: [
                        { name: "全 正暉", position: "部長" },
                        { name: "趙 景ミン", position: "課長" },
                        { name: "金 鎭晩", position: "部長" },
                        { name: "姜 俊守", position: "次長" },
                        { name: "朴 知年", position: "課長" },
                        { name: "文 昭英", position: "代理" },
                        { name: "田 鎭光", position: "代理" },
                        { name: "金 智雄", position: "主任" },
                        { name: "呉 奎真", position: "主任" },
                        { name: "盧 ウンビン", position: "主任" },
                        { name: "李 グッゴン", position: "主任" },
                        { name: "金 洪稷", position: "社員" },
                        { name: "高 董協", position: "社員" },
                        { name: "鄭 在氾", position: "社員" },
                        { name: "洪 容澤", position: "社員" },
                        { name: "崔 榕峻", position: "社員" },
                        { name: "南 正真", position: "社員" },
                        { name: "鄭 在玹", position: "社員" },
                        { name: "宋 昇炫", position: "社員" },
                        { name: "朴 仙栽", position: "社員" },
                        { name: "鎗田 祐生", position: "社員" }
                      ]
                    },
                    group2: {
                      groupName: "第２グループ",
                      groupMember: [
                        { name: "稲葉 拓実", position: "課長" },
                        { name: "洪 彦星", position: "課長" },
                        { name: "鄭 誠鎬", position: "部長" },
                        { name: "沼尾 智浩", position: "次長" },
                        { name: "金 敬讚", position: "課長" },
                        { name: "春田 直道", position: "代理" },
                        { name: "阪口 雅樹", position: "代理" },
                        { name: "梁 玹準", position: "主任" },
                        { name: "李 縡熹", position: "主任" },
                        { name: "奉 叡智", position: "主任" },
                        { name: "沈 材炯", position: "社員" },
                        { name: "許 民英", position: "社員" },
                        { name: "黄 智厚", position: "社員" },
                        { name: "鄭 仁", position: "社員" },
                        { name: "朴 笑利", position: "社員" },
                        { name: "元 世英", position: "社員" },
                        { name: "田 侑眞", position: "社員" },
                        { name: "鄭 露珠", position: "社員" },
                        { name: "金 永錫", position: "社員" },
                        { name: "崔 彰元", position: "社員" },
                        { name: "洪 定杓", position: "社員" }
                      ]
                    },
                    group3: {
                      groupName: "第３グループ",
                      groupMember: [
                        { name: "趙 顯彬", position: "次長" },
                        { name: "谷向 拓也", position: "代理" },
                        { name: "柳 得均", position: "次長" },
                        { name: "韓 承澔", position: "課長" },
                        { name: "姜 営国", position: "課長" },
                        { name: "孫 永洛", position: "代理" },
                        { name: "齊藤 慎樹", position: "代理" },
                        { name: "金 槿哲", position: "代理" },
                        { name: "三科 悠介", position: "代理" },
                        { name: "呉 宰権", position: "主任" },
                        { name: "趙 晟材", position: "主任" },
                        { name: "李 厚硬", position: "主任" },
                        { name: "安 洸旻", position: "主任" },
                        { name: "金 暋起", position: "主任" },
                        { name: "朴 成俊", position: "主任" },
                        { name: "朴 チャンウル", position: "社員" },
                        { name: "李 到炯", position: "社員" },
                        { name: "金 泰勳", position: "社員" },
                        { name: "宋 尚炫", position: "社員" },
                        { name: "姜 炯奭", position: "社員" },
                        { name: "韓 炯振", position: "社員" }
                      ]
                    },
                    group4: {
                      groupName: "第４グループ",
                      groupMember: [
                        { name: "金 榮甲", position: "次長" },
                        { name: "崔 鐘赫", position: "課長" },
                        { name: "田 鍾洙", position: "部長" },
                        { name: "朴 正煥", position: "次長" },
                        { name: "丁 玹承", position: "課長" },
                        { name: "金 鉉洙", position: "代理" },
                        { name: "梁 得珠", position: "主任" },
                        { name: "金 東祿", position: "主任" },
                        { name: "金 昞夏", position: "主任" },
                        { name: "金 亨太", position: "主任" },
                        { name: "李 在燻", position: "主任" },
                        { name: "車 周悦", position: "主任" },
                        { name: "朴 性昱", position: "主任" },
                        { name: "陳 相旻", position: "社員" },
                        { name: "禹 誠國", position: "社員" },
                        { name: "梁 真圭", position: "社員" },
                        { name: "趙 玟植", position: "社員" },
                        { name: "文 泰潤", position: "社員" },
                        { name: "金 秀旼", position: "社員" },
                        { name: "朴 俊成", position: "社員" },
                        { name: "朴 元彬", position: "社員" }
                      ]
                    },
                    group5: {//研究教育グループ
                      groupName: "研究教育グループ",
                      groupMember: [
                        { name: "金 兌勳", position: "次長" },
                        { name: "姜 慶旻", position: "課長" },
                        { name: "南 俊", position: "主任" },
                        { name: "郭 棹逸", position: "社員" }
                      ]
                    },
                    group6: {//特定顧客グループ
                      groupName: "特定顧客グループ",
                      groupMember: [
                        { name: "裵 城準", position: "次長" },
                        { name: "金 徳用", position: "部長" },
                        { name: "林 承培", position: "部長" },
                        { name: "姜 現卓", position: "部長" },
                        { name: "鄭 吉謀", position: "部長" },
                        { name: "城 英敏", position: "部長" },
                        { name: "黄 潤虎", position: "部長" },
                        { name: "河島 彰彦", position: "部長" },
                        { name: "宋 容順", position: "課長" },
                        { name: "趙 洒姈", position: "主任" },
                        { name: "李 鍾勳", position: "社員" },
                        { name: "姜 尚助", position: "社員" },
                        { name: "石 在原", position: "社員" },
                        { name: "金 炫国", position: "代理" },
                        { name: "千 歳文", position: "代理" },
                        { name: "金 慧認", position: "社員" },
                        { name: "金 宇経", position: "社員" }
                      ]
                    },
                    group7: {//品証グループ
                      groupName: "品証グループ",
                      groupMember: [
                        { name: "真砂 憲昭", position: "部長" },
                        { name: "榛葉 佳彦", position: "部長" },
                        { name: "武田 進", position: "部長" },
                        { name: "八百 秀義", position: "部長" },
                        { name: "松本 茂", position: "部長" },
                        { name: "栗山 実", position: "部長" },
                        { name: "中山 孝", position: "部長" }
                      ]
                    },
                  }
                }
              },
              ict: {//ICT本部
                name: "金 辰奎", position: "取締役副社長 兼 本部長",
                group: {
                  group1: {
                    groupName: "第１グループ",
                    groupMember: [
                      { name: "尹 世熲", position: "課長" },
                      { name: "朴 海珍", position: "代理" },
                      { name: "李 相厚", position: "代理" },
                      { name: "朴 相赫", position: "代理" },
                      { name: "尹 成福", position: "代理" },
                      { name: "金 秀祜", position: "主任" },
                      { name: "許 翼", position: "主任" },
                      { name: "崔 宗煥", position: "社員" },
                      { name: "韓 志元", position: "社員" },
                      { name: "盧 在赫", position: "社員" }
                    ]
                  },
                  group2: {
                    groupName: "第２グループ",
                    groupMember: [
                      { name: "金 承哲", position: "次長" },
                      { name: "鄭 玄暉", position: "代理" },
                      { name: "安 琇智", position: "代理" },
                      { name: "李 慧潾", position: "主任" },
                      { name: "中島 直美", position: "主任" },
                      { name: "盧 柱延", position: "主任" },
                      { name: "崔 湖鐘", position: "社員" },
                      { name: "劉 東旭", position: "社員" },
                      { name: "崔 光林", position: "社員" },
                      { name: "宋 在憲", position: "社員" },
                      { name: "宋 志鏞", position: "社員" }
                    ]
                  },
                  group3: {
                    groupName: "第３グループ",
                    groupMember: [
                      { name: "金 孝根", position: "次長" },
                      { name: "原田 美幸", position: "次長" },
                      { name: "金 貞恩", position: "代理" },
                      { name: "曺 政佑", position: "代理" },
                      { name: "張 韓率", position: "代理" },
                      { name: "朴 婉呈", position: "主任" },
                      { name: "黄 奕振", position: "主任" },
                      { name: "林 太利", position: "主任" },
                      { name: "崔 範宇", position: "社員" }
                    ]
                  },
                  group4: {
                    groupName: "第４グループ",
                    groupMember: [
                      { name: "新保 雅士", position: "部長" },
                      { name: "沈 完輔", position: "部長" },
                      { name: "齋藤 傑紀", position: "次長" },
                      { name: "姜 東煥", position: "主任" },
                      { name: "三科 啓太", position: "社員" },
                      { name: "黄 炳晙", position: "社員" }
                    ]
                  },
                  group5: {
                    groupName: "第５グループ",
                    groupMember: [
                      { name: "李 炅穆", position: "次長" },
                      { name: "蔡 洪官", position: "主任" },
                      { name: "李 知勲", position: "主任" },
                      { name: "具 元謀", position: "主任" },
                      { name: "李 碩峻", position: "主任" },
                      { name: "崔 富盛", position: "主任" },
                      { name: "秋 炅旻", position: "社員" },
                      { name: "睦 敏洙", position: "社員" }
                    ]
                  },
                  group6: {
                    groupName: "新人グループ",
                    groupMember: [
                      { name: "趙 祥延", position: "代理" },
                      { name: "國政 晶子", position: "代理" },
                      { name: "権 容振", position: "社員" }
                    ]
                  },
                  group7: {
                    groupName: "特定プロジェクトグループ",
                    groupMember: [
                      { name: "金 辰奎", position: "本部長" },
                      { name: "大城 哲", position: "次長" },
                      { name: "岩間 俊光", position: "次長" },
                      { name: "趙 祥延", position: "代理" }
                    ]
                  },
                }
              },
              eastBusiness: {
                groupName: "東北事業所",
                groupMember: [
                  { name: "田中 耕一郎", position: "所長" },
                  { name: "倉持 誠司", position: "部長" },
                  { name: "小野寺 大輔", position: "課長" },
                  { name: "須藤 健", position: "課長" },
                  { name: "梅山 直貴", position: "課長" },
                  { name: "佐藤 友明", position: "課長" },
                  { name: "青木 総司", position: "課長" },
                  { name: "坪井 快太", position: "主任" }
                ]
              }
            }
          }
        }
      }
    }
  }
}


//株主総会を取得
let shareH = document.getElementById("sh");
shareH.firstChild.value = ais.officer.shareholder;

//取締役会を取得
let regulPosition = document.getElementById("rglt");
regulPosition.firstChild.value = ais.officer.regulation.position;

//監査役を取得
let auditName = document.getElementById("adt");
auditName.children[0].value = ais.officer.regulation.audit.groupName;
auditName.children[1].value = ais.officer.regulation.audit.position
  + ais.officer.regulation.audit.name;

//代表取締役会長を取得
let chairmanName = document.getElementById("presidt");
chairmanName.children[0].value = ais.officer.regulation.audit.chairman.groupName;
chairmanName.children[1].value = ais.officer.regulation.audit.chairman.name;

//営業本部長を取得X
let presidentName1 = document.getElementById("biz");
presidentName1.children[0].value = ais.officer.regulation.audit.chairman.president.prsGroup[0].position;
presidentName1.children[1].value = ais.officer.regulation.audit.chairman.president.prsGroup[0].name;

//代表取締役社長を取得X
let presidentName2 = document.getElementById("prez");
presidentName2.children[0].value = ais.officer.regulation.audit.chairman.president.prsGroup[1].position;
presidentName2.children[1].value = ais.officer.regulation.audit.chairman.president.prsGroup[1].name;

//相談役を取得
let presidentName3 = document.getElementById("consult");
presidentName3.children[0].value = ais.officer.regulation.audit.chairman.president.prsGroup[2].position;
presidentName3.children[1].value = ais.officer.regulation.audit.chairman.president.prsGroup[2].name;

//管理本部
let manage = document.getElementsByClassName("manageTop");
if (manage.length > 0) {
  manage[0].children[0].value = ais.officer.regulation.audit.chairman.president.category.management.groupName;
  manage[0].children[1].value = ais.officer.regulation.audit.chairman.president.category.management.position
    + " " + ais.officer.regulation.audit.chairman.president.category.management.name;
}
// 経営支援室
let mngTop = document.getElementsByClassName("memberTop");
if (mngTop.length > 0) {
  mngTop[0].children[0].value = ais.officer.regulation.audit.chairman.president.category.management.mngGroup.groupName;
  mngTop[0].children[1].value = ais.officer.regulation.audit.chairman.president.category.management.mngGroup.groupMember[0].position
    + "　" + ais.officer.regulation.audit.chairman.president.category.management.mngGroup.groupMember[0].name;
}

// for文を使用して指定されたメンバー情報を生成する部分
let mngMemBox = document.querySelector(".mngMem");

for (let i = 1; i < ais.officer.regulation.audit.chairman.president.category.management.mngGroup.groupMember.length; i++) {
  let member = ais.officer.regulation.audit.chairman.president.category.management.mngGroup.groupMember[i];

  let mngCreate = document.createElement("input");
  mngCreate.setAttribute("type", "text");
  mngCreate.value = member.name + " " + member.position;

  mngMemBox.appendChild(mngCreate);
}

//営業部
let bizGroup = document.getElementsByClassName("bizTop");
if (bizGroup.length > 0) {
  bizGroup[0].children[0].value =
    ais.officer.regulation.audit.chairman.president.category.management.bizGroup.groupName;
  bizGroup[0].children[1].value =
    ais.officer.regulation.audit.chairman.president.category.management.bizGroup.groupMember[0].position
    + "　" + ais.officer.regulation.audit.chairman.president.category.management.bizGroup.groupMember[0].name;
}

// for文を使用して指定されたメンバー情報を生成する部分
let bizMemBox = document.querySelector(".bizMem");
for (let i = 1; i < ais.officer.regulation.audit.chairman.president.category.management.bizGroup.groupMember.length; i++) {
  let member = ais.officer.regulation.audit.chairman.president.category.management.bizGroup.groupMember[i];

  let bizCreate = document.createElement("input");
  bizCreate.setAttribute("type", "text");
  bizCreate.value = member.name + " " + member.position;

  bizMemBox.appendChild(bizCreate);
}

//品質管理部
let qltGroup = document.getElementsByClassName("qltTop");
if (qltGroup.length > 0) {
  qltGroup[0].children[0].value =
    ais.officer.regulation.audit.chairman.president.category.management.qltGroup.groupName;
  qltGroup[0].children[1].value =
    ais.officer.regulation.audit.chairman.president.category.management.qltGroup.groupMember[0].position
    + "　" + ais.officer.regulation.audit.chairman.president.category.management.qltGroup.groupMember[0].name;
}

// for文を使用して指定されたメンバー情報を生成する部分
let qltMemBox = document.querySelector(".qltMem");
for (let i = 1; i < ais.officer.regulation.audit.chairman.president.category.management.qltGroup.groupMember.length; i++) {
  let member = ais.officer.regulation.audit.chairman.president.category.management.qltGroup.groupMember[i];

  let qltCreate = document.createElement("input");
  qltCreate.setAttribute("type", "text");
  qltCreate.value = member.name + " " + member.position;

  qltMemBox.appendChild(qltCreate);
}

//スマートエナジーソリューション部
let sesGroup = document.getElementsByClassName("sesTop");
if (sesGroup.length > 0) {
  sesGroup[0].children[0].value =
    ais.officer.regulation.audit.chairman.president.category.management.sesGroup.groupName;
  sesGroup[0].children[1].value =
    ais.officer.regulation.audit.chairman.president.category.management.sesGroup.groupMember[0].position
    + "　" + ais.officer.regulation.audit.chairman.president.category.management.sesGroup.groupMember[0].name;
}

// for文を使用して指定されたメンバー情報を生成する部分
let sesMemBox = document.querySelector(".sesMem");
for (let i = 1; i < ais.officer.regulation.audit.chairman.president.category.management.sesGroup.groupMember.length; i++) {
  let member = ais.officer.regulation.audit.chairman.president.category.management.sesGroup.groupMember[i];

  let sesCreate = document.createElement("input");
  sesCreate.setAttribute("type", "text");
  sesCreate.value = member.name + " " + member.position;

  sesMemBox.appendChild(sesCreate);
}




  //   // コンソール表示
  //   console.log(ais.officer.shareholder);
  //   console.log("-----")

  //   console.log(ais.officer.regulation.position);
  //   console.log("監査役")
  //   console.log(ais.officer.regulation.audit.position + "  " + ais.officer.regulation.audit.name);
  //   console.log("----")

  //   console.log(ais.officer.regulation.audit.chairman.position)
  //   console.log(ais.officer.regulation.audit.chairman.name);
  //   console.log("-----")

  //   console.log(ais.officer.regulation.audit.chairman.president.prsGroup[0].position)
  //   console.log(ais.officer.regulation.audit.chairman.president.prsGroup[0].name);
  //   console.log("-----")

  //   console.log(ais.officer.regulation.audit.chairman.president.prsGroup[1].position)
  //   console.log(ais.officer.regulation.audit.chairman.president.prsGroup[1].name);
  //   console.log("-----")

  //   console.log(ais.officer.regulation.audit.chairman.president.prsGroup[2].position)
  //   console.log(ais.officer.regulation.audit.chairman.president.prsGroup[2].name);
  //   console.log("-----")

  //   console.log("管理本部")
  //   console.log(ais.officer.regulation.audit.chairman.president.category.management.position + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.management.name);
  //   console.log("-----")

  //   console.log(ais.officer.regulation.audit.chairman.president.category.management.mngGroup.mngName);
  //   console.log(ais.officer.regulation.audit.chairman.president.category.management.mngGroup.mngMember[0].position + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.management.mngGroup.mngMember[0].name);
  //   console.log(ais.officer.regulation.audit.chairman.president.category.management.mngGroup.mngMember[1].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.management.mngGroup.mngMember[1].position);
  //   console.log(ais.officer.regulation.audit.chairman.president.category.management.mngGroup.mngMember[2].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.management.mngGroup.mngMember[2].position);
  //   console.log("-----")

  //   console.log(ais.officer.regulation.audit.chairman.president.category.management.bizGroup.bizName);
  //   console.log(ais.officer.regulation.audit.chairman.president.category.management.bizGroup.bizMember[0].position + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.management.bizGroup.bizMember[0].name);
  //   console.log("（兼）" + ais.officer.regulation.audit.chairman.president.category.management.bizGroup.bizMember[1].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.management.bizGroup.bizMember[1].position);
  //   console.log("（兼）" + ais.officer.regulation.audit.chairman.president.category.management.bizGroup.bizMember[2].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.management.bizGroup.bizMember[2].position);
  //   console.log("-----")

  //   console.log(ais.officer.regulation.audit.chairman.president.category.management.qltGroup.qltName);
  //   console.log(ais.officer.regulation.audit.chairman.president.category.management.qltGroup.qltMember[0].position + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.management.bizGroup.bizMember[0].name);
  //   console.log("（兼）" + ais.officer.regulation.audit.chairman.president.category.management.qltGroup.qltMember[1].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.management.bizGroup.bizMember[1].position);
  //   console.log("-----")

  //   console.log(ais.officer.regulation.audit.chairman.president.category.management.sesGroup.sesName);
  //   console.log("（兼）" + ais.officer.regulation.audit.chairman.president.category.management.sesGroup.sesMember.position + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.management.sesGroup.sesMember.name);
  //   console.log("-----")

  //   console.log("開発本部")
  //   console.log(ais.officer.regulation.audit.chairman.president.category.development.position + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.development.name);
  //   console.log(ais.officer.regulation.audit.chairman.president.category.development.groupProxy.position + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.development.groupProxy.name);
  //   console.log("-----")

  //   console.log(ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group1.groupName);
  //   console.log("（兼）" + ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group1.groupMember[0].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group1.groupMember[0].position);
  //   console.log("  副）" + ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group1.groupMember[1].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group1.groupMember[1].position);
  //   console.log("-----↓")
  //   const groupDev1Member = [
  //     { name: "金 鎭晩", position: "部長" },
  //     { name: "姜 俊守", position: "次長" },
  //     { name: "朴 知年", position: "課長" },
  //     { name: "文 昭英", position: "代理" },
  //     { name: "田 鎭光", position: "代理" },
  //     { name: "金 智雄", position: "主任" },
  //     { name: "呉 奎真", position: "主任" },
  //     { name: "盧 ウンビン", position: "主任" },
  //     { name: "李 グッゴン", position: "主任" },
  //     { name: "金 洪稷", position: "社員" },
  //     { name: "高 董協", position: "社員" },
  //     { name: "鄭 在氾", position: "社員" },
  //     { name: "洪 容澤", position: "社員" },
  //     { name: "崔 榕峻", position: "社員" },
  //     { name: "南 正真", position: "社員" },
  //     { name: "鄭 在玹", position: "社員" },
  //     { name: "宋 昇炫", position: "社員" },
  //     { name: "朴 仙栽", position: "社員" },
  //     { name: "鎗田 祐生", position: "社員" }
  //   ];
  //   for (const member of groupDev1Member) {
  //     console.log(member.name + "  " + member.position);
  //   }



  //   console.log("-----")
  //   console.log(ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group2.groupName);
  //   console.log("（兼）" + ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group2.groupMember[0].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group1.groupMember[0].position);
  //   console.log("  副）" + ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group2.groupMember[1].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group2.groupMember[1].position);
  //   console.log("-----↓")
  //   const groupDev2Member = [
  //     { name: "稲葉 拓実", position: "課長" },
  //     { name: "洪 彦星", position: "課長" },
  //     { name: "鄭 誠鎬", position: "部長" },
  //     { name: "沼尾 智浩", position: "次長" },
  //     { name: "金 敬讚", position: "課長" },
  //     { name: "春田 直道", position: "代理" },
  //     { name: "阪口 雅樹", position: "代理" },
  //     { name: "梁 玹準", position: "主任" },
  //     { name: "李 縡熹", position: "主任" },
  //     { name: "奉 叡智", position: "主任" },
  //     { name: "沈 材炯", position: "社員" },
  //     { name: "許 民英", position: "社員" },
  //     { name: "黄 智厚", position: "社員" },
  //     { name: "鄭 仁", position: "社員" },
  //     { name: "朴 笑利", position: "社員" },
  //     { name: "元 世英", position: "社員" },
  //     { name: "田 侑眞", position: "社員" },
  //     { name: "鄭 露珠", position: "社員" },
  //     { name: "金 永錫", position: "社員" },
  //     { name: "崔 彰元", position: "社員" },
  //     { name: "洪 定杓", position: "社員" }
  //   ];
  //   for (const member of groupDev2Member) {
  //     console.log(member.name + "  " + member.position);
  //   }
  //   console.log("-----")
  //   console.log(ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group3.groupName);
  //   console.log("（兼）" + ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group3.groupMember[0].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group1.groupMember[0].position);
  //   console.log("  副）" + ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group3.groupMember[1].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group3.groupMember[1].position);
  //   console.log("-----↓")
  //   const groupDev3Member = [
  //     { name: "柳 得均", position: "次長" },
  //     { name: "韓 承澔", position: "課長" },
  //     { name: "姜 営国", position: "課長" },
  //     { name: "孫 永洛", position: "代理" },
  //     { name: "齊藤 慎樹", position: "代理" },
  //     { name: "金 槿哲", position: "代理" },
  //     { name: "三科 悠介", position: "代理" },
  //     { name: "呉 宰権", position: "主任" },
  //     { name: "趙 晟材", position: "主任" },
  //     { name: "李 厚硬", position: "主任" },
  //     { name: "安 洸旻", position: "主任" },
  //     { name: "金 暋起", position: "主任" },
  //     { name: "朴 成俊", position: "主任" },
  //     { name: "朴 チャンウル", position: "社員" },
  //     { name: "李 到炯", position: "社員" },
  //     { name: "金 泰勳", position: "社員" },
  //     { name: "宋 尚炫", position: "社員" },
  //     { name: "姜 炯奭", position: "社員" },
  //     { name: "韓 炯振", position: "社員" }
  //   ];
  //   for (const member of groupDev3Member) {
  //     console.log(member.name + "  " + member.position);
  //   }
  //   console.log("-----")
  //   console.log(ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group4.groupName);
  //   console.log("（兼）" + ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group4.groupMember[0].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group1.groupMember[0].position);
  //   console.log("  副）" + ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group4.groupMember[1].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group4.groupMember[1].position);
  //   console.log("-----↓")
  //   const groupDev4Member = [
  //     { name: "田 鍾洙", position: "部長" },
  //     { name: "朴 正煥", position: "次長" },
  //     { name: "丁 玹承", position: "課長" },
  //     { name: "金 鉉洙", position: "代理" },
  //     { name: "梁 得珠", position: "主任" },
  //     { name: "金 東祿", position: "主任" },
  //     { name: "金 昞夏", position: "主任" },
  //     { name: "金 亨太", position: "主任" },
  //     { name: "李 在燻", position: "主任" },
  //     { name: "車 周悦", position: "主任" },
  //     { name: "朴 性昱", position: "主任" },
  //     { name: "陳 相旻", position: "社員" },
  //     { name: "禹 誠國", position: "社員" },
  //     { name: "梁 真圭", position: "社員" },
  //     { name: "趙 玟植", position: "社員" },
  //     { name: "文 泰潤", position: "社員" },
  //     { name: "金 秀旼", position: "社員" },
  //     { name: "朴 俊成", position: "社員" },
  //     { name: "朴 元彬", position: "社員" }
  //   ];
  //   for (const member of groupDev4Member) {
  //     console.log(member.name + "  " + member.position);
  //   }
  //   console.log("-----")
  //   console.log(ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group5.groupName);
  //   console.log(ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group5.groupMember[0].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group1.groupMember[0].position);
  //   console.log("-----")
  //   const groupDev5Member = [//研究教育グループ
  //     { name: "姜 慶旻", position: "課長" },
  //     { name: "南 俊", position: "主任" },
  //     { name: "郭 棹逸", position: "社員" }
  //   ];
  //   for (const member of groupDev5Member) {
  //     console.log(member.name + "  " + member.position);
  //   }
  //   console.log("-----")
  //   console.log(ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group6.groupName);
  //   console.log(ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group6.groupMember[0].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group1.groupMember[0].position);
  //   console.log("-----↓")
  //   const groupDev6Member = [//特定顧客グループ
  //     { name: "金 徳用", position: "部長" },
  //     { name: "林 承培", position: "部長" },
  //     { name: "姜 現卓", position: "部長" },
  //     { name: "鄭 吉謀", position: "部長" },
  //     { name: "城 英敏", position: "部長" },
  //     { name: "黄 潤虎", position: "部長" },
  //     { name: "河島 彰彦", position: "部長" },
  //     { name: "宋 容順", position: "課長" },
  //     { name: "趙 洒姈", position: "主任" },
  //     { name: "李 鍾勳", position: "社員" },
  //     { name: "姜 尚助", position: "社員" },
  //     { name: "石 在原", position: "社員" },
  //     { name: "金 炫国", position: "代理" },
  //     { name: "千 歳文", position: "代理" },
  //     { name: "金 慧認", position: "社員" },
  //     { name: "金 宇経", position: "社員" }
  //   ];
  //   for (const member of groupDev6Member) {
  //     console.log(member.name + "  " + member.position);
  //   }
  //   console.log("-----")
  //   console.log(ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group7.groupName);
  //   console.log("（兼）" + ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group7.groupMember[0].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group.group1.groupMember[0].position);
  //   console.log("-----↓")
  //   const groupDev7Member = [//品証グループ
  //     { name: "榛葉 佳彦", position: "部長" },
  //     { name: "武田 進", position: "部長" },
  //     { name: "八百 秀義", position: "部長" },
  //     { name: "松本 茂", position: "部長" },
  //     { name: "栗山 実", position: "部長" },
  //     { name: "中山 孝", position: "部長" }
  //   ];
  //   for (const member of groupDev7Member) {
  //     console.log(member.name + "  " + member.position);
  //   }

  //   console.log("-----")
  //   console.log("ICT本部")
  //   console.log(ais.officer.regulation.audit.chairman.president.category.ict.position + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.ict.name);
  //   console.log("-----")
  //   console.log(ais.officer.regulation.audit.chairman.president.category.ict.group.group1.groupName);
  //   console.log(ais.officer.regulation.audit.chairman.president.category.ict.group.group1.groupMember[0].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.ict.group.group1.groupMember[0].position);
  //   console.log("-----↓")
  //   const groupIct1Member = [
  //     { name: "朴 海珍", position: "代理" },
  //     { name: "李 相厚", position: "代理" },
  //     { name: "朴 相赫", position: "代理" },
  //     { name: "尹 成福", position: "代理" },
  //     { name: "金 秀祜", position: "主任" },
  //     { name: "許 翼", position: "主任" },
  //     { name: "崔 宗煥", position: "社員" },
  //     { name: "韓 志元", position: "社員" },
  //     { name: "盧 在赫", position: "社員" }
  //   ];
  //   for (const member of groupIct1Member) {
  //     console.log(member.name + "  " + member.position);
  //   }
  //   console.log("-----")
  //   console.log(ais.officer.regulation.audit.chairman.president.category.ict.group.group2.groupName);
  //   console.log(ais.officer.regulation.audit.chairman.president.category.ict.group.group1.groupMember[1].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.ict.group.group1.groupMember[1].position);
  //   console.log("-----↓")
  //   const groupIct2Member = [
  //     { name: "鄭 玄暉", position: "代理" },
  //     { name: "安 琇智", position: "代理" },
  //     { name: "李 慧潾", position: "主任" },
  //     { name: "中島 直美", position: "主任" },
  //     { name: "盧 柱延", position: "主任" },
  //     { name: "崔 湖鐘", position: "社員" },
  //     { name: "劉 東旭", position: "社員" },
  //     { name: "崔 光林", position: "社員" },
  //     { name: "宋 在憲", position: "社員" },
  //     { name: "宋 志鏞", position: "社員" }
  //   ];
  //   for (const member of groupIct2Member) {
  //     console.log(member.name + "  " + member.position);
  //   }
  //   console.log("-----")
  //   console.log(ais.officer.regulation.audit.chairman.president.category.ict.group.group3.groupName);
  //   console.log(ais.officer.regulation.audit.chairman.president.category.ict.group.group1.groupMember[2].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.ict.group.group1.groupMember[2].position);
  //   console.log("-----↓")
  //   const groupIct3Member = [
  //     { name: "原田 美幸", position: "次長" },
  //     { name: "金 貞恩", position: "代理" },
  //     { name: "曺 政佑", position: "代理" },
  //     { name: "張 韓率", position: "代理" },
  //     { name: "朴 婉呈", position: "主任" },
  //     { name: "黄 奕振", position: "主任" },
  //     { name: "林 太利", position: "主任" },
  //     { name: "崔 範宇", position: "社員" }
  //   ];
  //   for (const member of groupIct3Member) {
  //     console.log(member.name + "  " + member.position);
  //   }
  //   console.log("-----")
  //   console.log(ais.officer.regulation.audit.chairman.president.category.ict.group.group4.groupName);
  //   console.log(ais.officer.regulation.audit.chairman.president.category.ict.group.group1.groupMember[3].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.ict.group.group1.groupMember[3].position);
  //   console.log("-----↓")
  //   const groupIct4Member = [
  //     { name: "沈 完輔", position: "部長" },
  //     { name: "齋藤 傑紀", position: "次長" },
  //     { name: "姜 東煥", position: "主任" },
  //     { name: "三科 啓太", position: "社員" },
  //     { name: "黄 炳晙", position: "社員" }
  //   ];
  //   for (const member of groupIct4Member) {
  //     console.log(member.name + "  " + member.position);
  //   }
  //   console.log("-----")
  //   console.log(ais.officer.regulation.audit.chairman.president.category.ict.group.group5.groupName);
  //   console.log(ais.officer.regulation.audit.chairman.president.category.ict.group.group1.groupMember[4].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.ict.group.group1.groupMember[4].position);
  //   console.log("-----↓")
  //   const groupIct5Member = [
  //     { name: "蔡 洪官", position: "主任" },
  //     { name: "李 知勲", position: "主任" },
  //     { name: "具 元謀", position: "主任" },
  //     { name: "李 碩峻", position: "主任" },
  //     { name: "崔 富盛", position: "主任" },
  //     { name: "秋 炅旻", position: "社員" },
  //     { name: "睦 敏洙", position: "社員" }
  //   ];
  //   for (const member of groupIct5Member) {
  //     console.log(member.name + "  " + member.position);
  //   }
  //   console.log("-----")
  //   console.log(ais.officer.regulation.audit.chairman.president.category.ict.group.group6.groupName);
  //   console.log(ais.officer.regulation.audit.chairman.president.category.ict.group.group1.groupMember[5].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.ict.group.group1.groupMember[5].position);
  //   console.log("-----↓")
  //   const groupIct6Member = [//新人グループ
  //     { name: "國政 晶子", position: "代理" },
  //     { name: "権 容振", position: "社員" }
  //   ];
  //   for (const member of groupIct6Member) {
  //     console.log(member.name + "  " + member.position);
  //   }
  //   console.log("-----")
  //   console.log(ais.officer.regulation.audit.chairman.president.category.ict.group.group7.groupName);
  //   console.log(ais.officer.regulation.audit.chairman.president.category.ict.group.group1.groupMember[6].name + "  " +
  //     ais.officer.regulation.audit.chairman.president.category.ict.group.group1.groupMember[6].position);
  //   console.log("-----↓")
  //   const groupIct7Member = [//特定プロジェクトグループ
  //     { name: "大城 哲", position: "次長" },
  //     { name: "岩間 俊光", position: "次長" },
  //     { name: "趙 祥延", position: "代理" }
  //   ];
  //   for (const member of groupIct7Member) {
  //     console.log(member.name + "  " + member.position);
  //   }
  //   console.log("-----")
  //   console.log(ais.officer.regulation.audit.chairman.president.category.eastBusiness.groupName);
  //   console.log(ais.officer.regulation.audit.chairman.president.category.eastBusiness.groupMember[0].position + "  " + "（兼）" +
  //     ais.officer.regulation.audit.chairman.president.category.eastBusiness.groupMember[0].name);
  //   console.log("-----↓")
  //   const groupEbnMember = [//特定プロジェクトグループ
  //     { name: "倉持 誠司", position: "部長" },
  //     { name: "小野寺 大輔", position: "課長" },
  //     { name: "須藤 健", position: "課長" },
  //     { name: "梅山 直貴", position: "課長" },
  //     { name: "佐藤 友明", position: "課長" },
  //     { name: "青木 総司", position: "課長" },
  //     { name: "坪井 快太", position: "主任" }
  //   ];
  //   for (const member of groupEbnMember) {
  //     console.log(member.name + "  " + member.position);
  //   }
// }