// 棋格数据
var b0 = {name:"起点", owner:"sean", state:"goodsp", value: 3000};
var b1 = {name:"月球", value:4900, state:0, cost:980, owner:"none"};
var b2 = {name:"火星", value:1000, state:0, cost:200, owner:"none"};
var b3 = {name:"木星", value:1300, state:0, cost:260, owner:"none"};
var b4 = {name:"机会", value:1000, state:"surprise", cost:200, owner:"sean"};
var b5 = {name:"北斗七星", value:3000, state:0, cost:600, owner:"none"};
var b6 = {name:"牛郎星", value:4000, state:0, cost:800, owner:"none"};
var b7 = {name:"太空站1",	value:1000,	state:"ap", cost:1000, owner:"sean"};
var b8 = {name:"交所得税", value:1000, state:"badsp", cost:1000, owner:"sean"};
var b9 = {name:"命运", value:1000, state:"surprise", cost:1000,	owner:"sean"};
var b10 = {name:"織女星", value:4000, state:0, cost:800, owner:"none"};
var b11 = {name:"宇宙监狱", value:0, state:"jail", cost:0, owner:"sean"};
var b12 = {name:"冥王星", value:4000, state:0, cost:800, owner:"none"};
var b13 = {name:"天王星", value:4000, state:0, cost:800, owner:"none"};
var b14 = {name:"金星", value:4000, state:0, cost:800, owner:"none"};
var b15 = {name:"赌场", value:1000, state:"casino", cost:1000, owner:"sean"};
var b16 = {name:"机会", value:1000, state:"surprise", cost:1000, owner:"sean"};
var b17 = {name:"捡到钱", value:1000, state:"goodsp", cost:1000, owner:"sean"};
var b18 = {name:"馬鈴薯星", value:2000, state:0, cost:400, owner:"none"};
var b19 = {name:"周杰倫星", value:2200, state:0, cost:440, owner:"none"};
var b20 = {name:"姚貝娜星", value:2400, state:0, cost:480, owner:"none"};
var b21 = {name:"金庸星", value:4500, state:0, cost:900, owner:"none"};
var b22 = {name:"邵逸夫星", value:3000, state:0, cost:600, owner:"none"};
var b23 = {name:"太空站2", value:1000, state:"ap", cost:1000, owner:"sean"};
var b24 = {name:"徐剋星", value:3600, state:0, cost:720, owner:"none"};
var b25 = {name:"命运", value:1000, state:"surprise", cost:1000, owner:"sean"};
var b26 = {name:"北京奧運星", value:1000, state:0, cost:1000, owner:"none"};
var b27 = {name:"張學友星", value:3400, state:0, cost:680, owner:"none"};
var b28 = {name:"楊丞琳星", value:3200, state:0, cost:640, owner:"none"};
var b29 = {name:"林青霞星", value:2800, state:0, cost:560, owner:"none"};

var place = [b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29];
var boxes = [];
for (var i = 0; i < 30; i++) {
    boxes.push(document.querySelector("#b" + i + ""))
}
for (var i = 0; i < place.length; i++) {
    boxes[i].firstElementChild.append(place[i].name);
}
var p1 = {
    name: "player1",
    index: 1,
    money: 20000,
    state: "",
    stop: 0,
    control: 1,
}
var p2 = {
    name: "player2",
    index: 2,
    money: 20000,
    state: "",
    stop: 0,
    control: 1,
}
var p3 = {
    name: "player3",
    index: 3,
    money: 20000,
    state: "",
    stop: 0,
    control: 1,
}
var p4 = {
    name: "player4",
    index: 4,
    money: 20000,
    state: "",
    stop: 0,
    control: 1,
}
var players = [p1, p2, p3, p4];
var s0 = {
    text: "獲得一顆星星的命名權被大家知道了，並颁发$6000奖金",
    value: 6000
}
var s1 = {
    text: "造詣屢獲獎項，获得头奖$5000",
    value: 5000
}
var s2 = {
    text: "被宇宙劫匪抢劫，为了保住性命，失去$3000",
    value: -3000
}
var s3 = {
    text: "喝了一杯一点点，花费$30",
    value: -30
}
var s4 = {
    text: "路边捡到$500",
    value: 500
}
var s5 = {
    text: "吃太空鱼卡到鱼刺，去宇宙医院花了$800",
    value: -800
}
var s6 = {
    text: "钱包落在出租宇宙空間，丢失$1000",
    value: -1000
}
var s7 = {
    text: "空闲时间去兼职宇宙天文家教，收获$2000",
    value: 2000
}
var s8 = {
    text: "太空船降落摔了一跤，买药花了$100",
    value: -100
}
var s9 = {
    text: "手机突然坏了，换了部最新款iPhone，花费$1300",
    value: -1300
}
var s10 = {
    text: "吃太空羊肉火锅，花费$500",
    value: -500
}
var s11 = {
    text: "去天王星看流星雨，花费$2000",
    value: -2000
}
var s12 = {
    text: "什么也没有发生，除了钱包少了$800",
    value: -800
}
var s13 = {
    text: "什么也没有发生, 除了钱包多了$1000",
    value: 1000
}
var s14 = {
    text: "在星際座談會做翻译，获得$1000",
    value: 1000
}
var s15 = {
    text: "发星際传单，得到$100",
    value: 100
}
var s16 = {
    text: "表現傑出，送星星 ,获得奖金$8000",
    value: 3000
}
var s17 = {
    text: "回地球,抢了个微信红包，获得$5000",
    value: 5000
}
var s18 = {
    text: "梦见得到$3000奖金，醒来决定花$50去拜神",
    value: -50
}
var s19 = {
    text: "發行了全新專輯《仰望》，特別送「天上星星」以示慶祝 : 获得了$3000奖金！赶紧花$500去还愿",
    value: 2500
}
var s20 = {
    text: "卖闲置裝備, 赚了$100",
    value: 100
}
var s21 = {
    text: "什么也没有发生",
    value: 0
}
var s22 = {
    text: "在太空站,看电影花费了$100",
    value: -100
}
var s23 = {
    text: "回地球, 还花呗欠款$999",
    value: -999
}
var s24 = {
    text: "地球一年一度的双十一到了，剁手花了$2000",
    value: -2000
}
var s25 = {
    text: "突然很渴想买瓶矿泉水，花费$5",
    value: -5
}
var s26 = {
    text: "去太空站打工赚了$500",
    value: 500
}
var s27 = {
    text: "偷税漏税罚款$1000，拘留1日",
    value: -1000
}
var s28 = {
    text: "超速飛行被罚款$2000，拘留2天",
    value: -2000
}
var s29 = {
    text: "被太空警察发现有太空违建，罚款$1000并拘留3日",
    value: -1000
}
var s30 = {
    text: "考试作弊被拘留5日",
    value: 0
}
var fate = [s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30];
