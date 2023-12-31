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

//年月日を出力する
let today = document.getElementById("date");
today.innerHTML = year + "/" + month + "/" + day + "　現在";

function total() {
  let bucho = document.getElementById("bucho");
  let sain = document.getElementById("sain");
  let total = document.getElementById("total");

  total.value = parseInt(bucho.value) + parseInt(sain.value);
}

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
                developName: "開発本部",
                name: "金 允泳", position: "取締役 （兼） 本部長",
                groupProxy: {
                  name: "全 正暉 部長", position: "本部長代理",
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
                        { name: "裵 一禹", position: "部長" },
                        { name: "金 徳用", position: "部長" },
                        { name: "林 承培", position: "部長" },
                        { name: "姜 現卓", position: "部長" },
                        { name: "鄭 吉謀", position: "部長" },
                        { name: "城 英敏", position: "部長" },
                        { name: "黄 潤虎", position: "部長" },
                        { name: "河島 彰彦", position: "部長" },
                        { name: "宋 容順", position: "課長" },
                        { name: "趙 洒姈", position: "主任" },
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
                ictName: "ICT本部",
                name: "金 辰奎", position: "取締役副社長 （兼） 本部長",
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
                      { name: "崔 範宇", position: "社員" },
                      { name: "張 慶俊", position: "代理" }
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
                  }
                }
              },
              eastBusiness: {
                group: {
                  groupName: "東北事業所",
                  groupMember: [
                    { name: "田中 耕一郎", position: "所長 （兼）" },
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
}


// 株主総会を取得
document.getElementById("sh").firstChild.value = ais.officer.shareholder;

// 取締役会を取得
let regulPosition = document.getElementById("rglt");
regulPosition.firstChild.value = ais.officer.regulation.position;

// 監査役を取得
let auditName = document.getElementById("adt");
auditName.children[0].value = ais.officer.regulation.audit.groupName;
auditName.children[1].value = ais.officer.regulation.audit.position + ais.officer.regulation.audit.name;

// 代表取締役会長を取得
let chairmanName = document.getElementById("presidt");
chairmanName.children[0].value = ais.officer.regulation.audit.chairman.groupName;
chairmanName.children[1].value = ais.officer.regulation.audit.chairman.name;

// 役員の要素を取得し、それぞれにデータを設定
ais.officer.regulation.audit.chairman.president.prsGroup.forEach((prs, index) => {
  let presidentName = document.getElementById(["biz", "prez", "consult"][index]);
  presidentName.children[0].value = prs.position;
  presidentName.children[1].value = prs.name;
});

// 管理本部
if (ais.officer.regulation.audit.chairman.president.category.management) {
  let manage = document.getElementsByClassName("manageTop");
  let managementData = ais.officer.regulation.audit.chairman.president.category.management;
  manage[0].children[0].value = managementData.groupName;
  manage[0].children[1].value = `${managementData.position} ${managementData.name}`;
}

const management = ais.officer.regulation.audit.chairman.president.category.management;

const groups1 = [
  { selector: ".memberTop", group: management.mngGroup },
  { selector: ".bizTop", group: management.bizGroup },
  { selector: ".qltTop", group: management.qltGroup },
  { selector: ".sesTop", group: management.sesGroup },
];

for (const groupInfo of groups1) {
  const { selector, group } = groupInfo;
  const container = document.querySelector(selector);
  container.querySelector("input:nth-child(1)").value = group.groupName;
  container.querySelector("input:nth-child(2)").value =
    group.groupMember[0].name + " - " + group.groupMember[0].position;
}

displayGroupMembers(".mngMem", management.mngGroup);
displayGroupMembers(".bizMem", management.bizGroup);
displayGroupMembers(".qltMem", management.qltGroup);
displayGroupMembers(".sesMem", management.sesGroup);

function displayGroupMembers(containerClass, group) {
  const container = document.querySelector(containerClass);
  for (let i = 1; i < group.groupMember.length; i++) {
    const member = group.groupMember[i];
    const input = document.createElement("input");
    input.type = "text";
    input.value = member.name + " - " + member.position;
    container.appendChild(input);
  }
}

// 開発本部
if (ais.officer.regulation.audit.chairman.president.category.development) {
  let develop = document.getElementsByClassName("readerTop");
  let developmentData = ais.officer.regulation.audit.chairman.president.category.development;
  develop[0].children[0].value = developmentData.developName;
  develop[0].children[1].value = `${developmentData.position} ${developmentData.name}`;
}

if (ais.officer.regulation.audit.chairman.president.category.development) {
  let develop = document.getElementsByClassName("proxyTop");
  let developmentData = ais.officer.regulation.audit.chairman.president.category.development.groupProxy;
  develop[0].firstChild.value = `${developmentData.position} ${developmentData.name}`;
}

const development = ais.officer.regulation.audit.chairman.president.category.development.groupProxy.group;

const groups2 = [
  { selector: ".firstTop", group: development.group1 },
  { selector: ".secondTop", group: development.group2 },
  { selector: ".thirdTop", group: development.group3 },
  { selector: ".fourthTop", group: development.group4 },
  { selector: ".fifthTop", group: development.group5 },
  { selector: ".sixthTop", group: development.group6 },
  { selector: ".seventhTop", group: development.group7 },
];

for (const groupInfo of groups2) {
  const { selector, group } = groupInfo;
  const container = document.querySelector(selector);
  container.querySelector("input:nth-child(1)").value = group.groupName;
  container.querySelector("input:nth-child(2)").value =
    group.groupMember[0].name + " - " + group.groupMember[0].position;
}

developGroupMembers(".firstMem", development.group1);
developGroupMembers(".secondMem", development.group2);
developGroupMembers(".thirdMem", development.group3);
developGroupMembers(".fourthMem", development.group4);
developGroupMembers(".fifthMem", development.group5);
developGroupMembers(".sixthMem", development.group6);
developGroupMembers(".seventhMem", development.group7);

function developGroupMembers(containerClass, group) {
  const container = document.querySelector(containerClass);
  for (let i = 1; i < group.groupMember.length; i++) {
    const member = group.groupMember[i];
    const input = document.createElement("input");
    input.type = "text";
    input.value = member.name + " - " + member.position;
    container.appendChild(input);
  }
}

// ICT本部
if (ais.officer.regulation.audit.chairman.president.category.ict) {
  let ictGroup = document.getElementsByClassName("ictReaderTop");
  let ictData = ais.officer.regulation.audit.chairman.president.category.ict;
  ictGroup[0].children[0].value = ictData.ictName;
  ictGroup[0].children[1].value = `${ictData.position} ${ictData.name}`;
}

const ict = ais.officer.regulation.audit.chairman.president.category.ict.group;

const groups3 = [
  { selector: ".ict1Top", group: ict.group1 },
  { selector: ".ict2Top", group: ict.group2 },
  { selector: ".ict3Top", group: ict.group3 },
  { selector: ".ict4Top", group: ict.group4 },
  { selector: ".ict5Top", group: ict.group5 },
  { selector: ".ict6Top", group: ict.group6 },
  { selector: ".ict7Top", group: ict.group7 },
];

for (const groupInfo of groups3) {
  const { selector, group } = groupInfo;
  const container = document.querySelector(selector);
  container.querySelector("input:nth-child(1)").value = group.groupName;
  container.querySelector("input:nth-child(2)").value =
    group.groupMember[0].name + " - " + group.groupMember[0].position;
}

ictGroupGroupMembers(".ict1Mem", ict.group1);
ictGroupGroupMembers(".ict2Mem", ict.group2);
ictGroupGroupMembers(".ict3Mem", ict.group3);
ictGroupGroupMembers(".ict4Mem", ict.group4);
ictGroupGroupMembers(".ict5Mem", ict.group5);
ictGroupGroupMembers(".ict6Mem", ict.group6);
ictGroupGroupMembers(".ict7Mem", ict.group7);

function ictGroupGroupMembers(containerClass, group) {
  const container = document.querySelector(containerClass);
  for (let i = 1; i < group.groupMember.length; i++) {
    const member = group.groupMember[i];
    const input = document.createElement("input");
    input.type = "text";
    input.value = member.name + " - " + member.position;
    container.appendChild(input);
  }
}

// 東北事業所
const eastBiz = ais.officer.regulation.audit.chairman.president.category.eastBusiness;

const groups4 = [
  { selector: ".eastBizTop", group: eastBiz.group },
];

for (const groupInfo of groups4) {
  const { selector, group } = groupInfo;
  const container = document.querySelector(selector);
  container.querySelector("input:nth-child(1)").value = group.groupName;
  container.querySelector("input:nth-child(2)").value =
    group.groupMember[0].position + " - " + group.groupMember[0].name;
}

eastBizGroupMembers(".eastBizMem", eastBiz.group);

function eastBizGroupMembers(containerClass, group) {
  const container = document.querySelector(containerClass);
  for (let i = 1; i < group.groupMember.length; i++) {
    const member = group.groupMember[i];
    const input = document.createElement("input");
    input.type = "text";
    input.value = member.name + " - " + member.position;
    container.appendChild(input);
  }
}


//-----アコーディオンメニュー-----

// 部署ごとの情報をまとめたオブジェクトの配列
const accordion = [
  {//管理本部
    toggleBtnSelector: ".manageToggleBtn",
    containerSelector: ".manageContainer"
  },
  {//開発本部
    toggleBtnSelector: ".devGroupToggleBtn",
    containerSelector: ".devGroupContainer"
  },
  {//ICT本部
    toggleBtnSelector: ".ictGroupToggleBtn",
    containerSelector: ".ictGroupContainer"
  },
  {//東北事業所
    toggleBtnSelector: ".estToggleBtn",
    containerSelector: ".estContainer"
  }
];

// 各部署ごとに処理を実行
accordion.forEach(accordion => {
  const toggleBtn = document.querySelector(accordion.toggleBtnSelector);
  const container = document.querySelector(accordion.containerSelector);
  const containerHeight = container.clientHeight;
  container.style.transform = `translateY(-${containerHeight + 1}px)`;

  toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    container.style.opacity = 1;


    if (!container.classList.contains("active")) {
      container.classList.add("active");
      container.style.transform = "translateY(0)";
    } else {
      container.classList.remove("active");
      container.style.transform = `translateY(-${containerHeight + 1}px)`;
    }
  });
});

// 部署ごとの情報をまとめたオブジェクトの配列
const accordionChild = [
  {//管理本部
    toggleBtnSelector: ".mngToggleBtn",
    containerSelector: ".mngContainer"
  },
  {
    toggleBtnSelector: ".bizToggleBtn",
    containerSelector: ".bizContainer"
  },
  {
    toggleBtnSelector: ".qltToggleBtn",
    containerSelector: ".qltContainer"
  },
  {
    toggleBtnSelector: ".sesToggleBtn",
    containerSelector: ".sesContainer"
  },
  {//開発本部
    toggleBtnSelector: ".dev1ToggleBtn",
    containerSelector: ".dev1Container"
  },
  {
    toggleBtnSelector: ".dev2ToggleBtn",
    containerSelector: ".dev2Container"
  },
  {
    toggleBtnSelector: ".dev3ToggleBtn",
    containerSelector: ".dev3Container"
  },
  {
    toggleBtnSelector: ".dev4ToggleBtn",
    containerSelector: ".dev4Container"
  },
  {
    toggleBtnSelector: ".dev5ToggleBtn",
    containerSelector: ".dev5Container"
  },
  {
    toggleBtnSelector: ".dev6ToggleBtn",
    containerSelector: ".dev6Container"
  },
  {
    toggleBtnSelector: ".dev7ToggleBtn",
    containerSelector: ".dev7Container"
  },
  {//ICT本部
    toggleBtnSelector: ".ict1ToggleBtn",
    containerSelector: ".ict1Container"
  },
  {
    toggleBtnSelector: ".ict2ToggleBtn",
    containerSelector: ".ict2Container"
  },
  {
    toggleBtnSelector: ".ict3ToggleBtn",
    containerSelector: ".ict3Container"
  },
  {
    toggleBtnSelector: ".ict4ToggleBtn",
    containerSelector: ".ict4Container"
  },
  {
    toggleBtnSelector: ".ict5ToggleBtn",
    containerSelector: ".ict5Container"
  },
  {
    toggleBtnSelector: ".ict6ToggleBtn",
    containerSelector: ".ict6Container"
  },
  {
    toggleBtnSelector: ".ict7ToggleBtn",
    containerSelector: ".ict7Container"
  }
];


// 各グループごとに処理を実行
accordionChild.forEach(accordionChild => {
  const toggleBtnChild = document.querySelector(accordionChild.toggleBtnSelector);
  const containerChild = document.querySelector(accordionChild.containerSelector);
  const containerHeight = containerChild.clientHeight;
  containerChild.style.display = "none";
  containerChild.style.transform = `translateY(-${containerHeight + 1}px)`;

  toggleBtnChild.addEventListener("click", () => {
    toggleBtnChild.classList.toggle("active");
    containerChild.style.opacity = 1;

    if (!containerChild.classList.contains("active")) {
      containerChild.classList.add("active");
      containerChild.style.transform = "translateY(0)";
      containerChild.style.display = "block";
    } else {
      containerChild.classList.remove("active");
      containerChild.style.transform = `translateY(-${containerHeight + 1}px)`;
      containerChild.style.display = "none";
    }
  });
});

//全てのメンバーを一度に表示
const aisAllOpen = [
  //管理本部
  {containerSelector: ".manageContainer"},
  {containerSelector: ".mngContainer"},
  {containerSelector: ".bizContainer"},
  {containerSelector: ".qltContainer"},
  {containerSelector: ".sesContainer"},
  //開発本部
  {containerSelector: ".devGroupContainer"},
  {containerSelector: ".dev1Container"},
  {containerSelector: ".dev2Container"},
  {containerSelector: ".dev3Container"},
  {containerSelector: ".dev4Container"},
  {containerSelector: ".dev5Container"},
  {containerSelector: ".dev6Container"},
  {containerSelector: ".dev7Container"},
  //ICT本部
  {containerSelector: ".ictGroupContainer"},
  {containerSelector: ".ict1Container"},
  {containerSelector: ".ict2Container"},
  {containerSelector: ".ict3Container"},
  {containerSelector: ".ict4Container"},
  {containerSelector: ".ict5Container"},
  {containerSelector: ".ict6Container"},
  {containerSelector: ".ict7Container"}
];

const aisAllOpenBtn = document.getElementById("aisAllToggleBtn");

aisAllOpen.forEach(aisAllOpen => {
  const aisAllContainer = document.querySelector(aisAllOpen.containerSelector);
  const containerHeight = aisAllContainer.clientHeight;
  aisAllContainer.style.transform = `translateY(-${containerHeight + 1}px)`;

  aisAllOpenBtn.addEventListener("click", () => {
    aisAllOpenBtn.classList.toggle("active");
    aisAllContainer.style.opacity = 1;

    if (!aisAllContainer.classList.contains("active")) {
      aisAllContainer.classList.add("active");
      aisAllContainer.style.transform = "translateY(0)";
      aisAllOpenBtn.textContent = "全体非表示";
    }else {
      aisAllContainer.classList.remove("active");
      aisAllContainer.style.transform = `translateY(-${containerHeight + 1}px)`;
      aisAllOpenBtn.textContent = "全体表示";
    }
  });
});

//ドラッグ＆ドロップ
//inputの要素を全て取得
const dragInput = document.querySelectorAll('input[type="text"]');

let draggedItem = null;

dragInput.forEach(input => {
  input.draggable = true;

  input.addEventListener('dragstart', () => {
    draggedItem = input;
    setTimeout(() => {
      input.style.display = 'none';
    });
  });

  input.addEventListener('dragend', () => {
    setTimeout(() => {
      draggedItem.style.display = 'block';
      draggedItem = null;
    });
  });

  input.addEventListener('dragover', moveInput => {
    moveInput.preventDefault();
  });

  input.addEventListener('dragenter', moveInput => {
    moveInput.preventDefault();
    if (draggedItem !== null && input !== draggedItem) {
      input.parentNode.insertBefore(draggedItem, input);
    }
  });
});




function countUniqueNames(obj, namesToExclude) {
  let count = 0;
  const countedNames = {}; // 重複をチェックするためのオブジェクト

  function traverse(obj) {
    if (typeof obj === 'object') {
      if (Array.isArray(obj)) {
        obj.forEach((item) => traverse(item));
      } else {
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (key === 'name' && !namesToExclude.includes(obj[key])) {
              const name = obj[key];
              if (!countedNames[name]) {
                countedNames[name] = true; // まだカウントされていない名前の場合、カウント
                count++;
              }
            }
            traverse(obj[key]);
          }
        }
      }
    }
  }

  traverse(obj);
  return count;
}

// 数えない名前のリスト
const namesToExclude = ['鄭 昌株', '趙 元章', '東山 龍二', '田中 耕一郎', '猪狩 正', '金 允泳'];

// officer内のオブジェクトを数える
const count = countUniqueNames(ais.officer, namesToExclude);

// HTMLのinput要素に結果を出力
document.querySelector('#sain').value = count;

// テキスト情報をHTMLに挿入-----仮-----
document.getElementById("bucho").value = 4;

//Aisメンバーの合計人数
document.getElementById("total").value = count + 4;

//検索欄
//元のセレクト
const aisDivisionList = document.getElementById("aisDivisionList");

//部署に対しての関連セレクト
const aisManageList = document.getElementById("aisManageList");

const aisAllDivision = 
["allGroup", "mngSupportGroup", "salesGroup", "qualityMngGroup", "sesGroup",
"devGroup1", "devGroup2", "devGroup3", "devGroup4", "resEduGroup", "speCusGroup", "certiQualGroup",
"ictGroup1", "ictGroup2", "ictGroup3", "ictGroup4", "ictGroup5", "newEmplGroup", "supProGroup",
"tohokuGroup"]
const aisManagement =
["allGroup", "mngSupportGroup", "salesGroup", "qualityMngGroup", "sesGroup"]
const aisDevelopment =
["devGroup1", "devGroup2", "devGroup3", "devGroup4", "resEduGroup", "speCusGroup", "certiQualGroup"]
const aisIct =
["ictGroup1", "ictGroup2", "ictGroup3", "ictGroup4", "ictGroup5", "newEmplGroup","supProGroup"]
const aisTohoku =
["tohokuGroup"]

// aisDivisionListが変更されたときのイベントリスナーを追加
aisDivisionList.addEventListener("change", () => {
  // 選択されたオプションの値を取得
  const selectedOption = aisDivisionList.value;

  // 関連するセレクト要素の全てのオプションを非表示にする
  for (const option of aisManageList.options) {
    option.style.display = "none";
  }

  // 選択されたオプションに応じて関連するオプションを表示
  let optionsToShow = [];

  switch (selectedOption) {
    case "aisAll":
      optionsToShow = aisAllDivision;
      break;
    case "management":
      optionsToShow = aisManagement;
      break;
    case "development":
      optionsToShow = aisDevelopment;
      break;
    case "ict":
      optionsToShow = aisIct;
      break;
    case "tohoku":
      optionsToShow = aisTohoku;
      break;
    default:
      break;
  }

  for (const optionValue of optionsToShow) {
    aisManageList.querySelector(`option[value='${optionValue}']`).style.display = "block";
  }

  // 関連するセレクト要素の表示を更新
  aisManageList.style.display = optionsToShow.length > 0 ? "block" : "none";
});

// ページ読み込み時に初期状態を設定
aisDivisionList.dispatchEvent(new Event("change"));



