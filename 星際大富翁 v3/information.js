function checkColor() {
    if (title.innerHTML == "銀河史萊姆") {
        title.style.background = colorscheme.joker;
    }
    if (title.innerHTML == "面具龍蝦") {
        title.style.background = colorscheme.batman;
    }
    if (title.innerHTML == "壓路雞") {
        title.style.background = colorscheme.superman;
    }
    if (title.innerHTML == "星爆兔") {
        title.style.background = colorscheme.green;
    }
    if (title.innerHTML == "北斗鵝四郎") {
        title.style.background = colorscheme.pink;
    }
    if (title.innerHTML == "阿凡達海獺王") {
        title.style.background = colorscheme.red;
    }
    if (title.innerHTML == "魔法水母") {
        title.style.background = colorscheme.cat;
    }
}

function getcolor() {
    if (p1.name == "銀河史萊姆") {
        $(".p1info h1").css("background", colorscheme.joker);
    }
    if (p1.name == "面具龍蝦") {
        $(".p1info h1").css("background", colorscheme.batman);
    }
    if (p1.name == "壓路雞") {
        $(".p1info h1").css("background", colorscheme.superman);
    }
    if (p1.name == "星爆兔") {
        $(".p1info h1").css("background", colorscheme.green);
    }
    if (p1.name == "北斗鵝四郎") {
        $(".p1info h1").css("background", colorscheme.pink);
    }
    if (p1.name == "阿凡達海獺王") {
        $(".p1info h1").css("background", colorscheme.red);
    }
    if (p1.name == "魔法水母") {
        $(".p1info h1").css("background", colorscheme.cat);
    }
    if (p2.name == "銀河史萊姆") {
        $(".p2info h1").css("background", colorscheme.joker);
    }
    if (p2.name == "面具龍蝦") {
        $(".p2info h1").css("background", colorscheme.batman);
    }
    if (p2.name == "壓路雞") {
        $(".p2info h1").css("background", colorscheme.superman);
    }
    if (p2.name == "星爆兔") {
        $(".p2info h1").css("background", colorscheme.green);
    }
    if (p2.name == "北斗鵝四郎") {
        $(".p2info h1").css("background", colorscheme.pink);
    }
    if (p2.name == "阿凡達海獺王") {
        $(".p2info h1").css("background", colorscheme.red);
    }
    if (p2.name == "魔法水母") {
        $(".p2info h1").css("background", colorscheme.cat);
    }
    if (p3.name == "銀河史萊姆") {
        $(".p3info h1").css("background", colorscheme.joker);
    }
    if (p3.name == "面具龍蝦") {
        $(".p3info h1").css("background", colorscheme.batman);
    }
    if (p3.name == "壓路雞") {
        $(".p3info h1").css("background", colorscheme.superman);
    }
    if (p3.name == "星爆兔") {
        $(".p3info h1").css("background", colorscheme.green);
    }
    if (p3.name == "北斗鵝四郎") {
        $(".p3info h1").css("background", colorscheme.pink);
    }
    if (p3.name == "阿凡達海獺王") {
        $(".p3info h1").css("background", colorscheme.red);
    }
    if (p3.name == "魔法水母") {
        $(".p3info h1").css("background", colorscheme.cat);
    }
    if (p4.name == "銀河史萊姆") {
        $(".p4info h1").css("background", colorscheme.joker);
    }
    if (p4.name == "面具龍蝦") {
        $(".p4info h1").css("background", colorscheme.batman);
    }
    if (p4.name == "壓路雞") {
        $(".p4info h1").css("background", colorscheme.superman);
    }
    if (p4.name == "星爆兔") {
        $(".p4info h1").css("background", colorscheme.green);
    }
    if (p4.name == "北斗鵝四郎") {
        $(".p4info h1").css("background", colorscheme.pink);
    }
    if (p4.name == "阿凡達海獺王") {
        $(".p4info h1").css("background", colorscheme.red);
    }
    if (p4.name == "魔法水母") {
        $(".p4info h1").css("background", colorscheme.cat);
    }
}

function writeinfo() {
    $(".p1info h1").text(p1.name);
    $(".p1info h2").text("$" + p1.money);
    $(".p2info h1").text(p2.name);
    $(".p2info h2").text("$" + p2.money);
    if (player >= 3) {
        $(".p3info h1").text(p3.name);
        $(".p3info h2").text("$" + p3.money);
        if (player == 4) {
            $(".p4info h1").text(p4.name);
            $(".p4info h2").text("$" + p4.money);
        }
    }
    getcolor();
}
for (var i = 0; i < boxes.length; i++) {
    boxes[i].onmouseover = function () {
        info.style.visibility = "visible";
        info.firstElementChild.firstElementChild.innerHTML = place[Number(this.id.substr(1))].name;
        info.lastElementChild.children[0].innerHTML = "地主：" + place[Number(this.id.substr(1))].owner;
        info.lastElementChild.children[1].innerHTML = "价格：" + place[Number(this.id.substr(1))].cost;
        if (place[Number(this.id.substr(1))].owner == "none" || place[Number(this.id.substr(1))].owner == "sean") {
            info.lastElementChild.children[0].innerHTML = "地主：无";
            info.lastElementChild.children[1].innerHTML = "价格：" + place[Number(this.id.substr(1))].value;
        }
    }
    boxes[i].onmouseout = function () {
        info.style.visibility = "hidden";
    }
}
boxes[0].onmouseover = function () {
    info.style.visibility = "hidden";
}
boxes[11].onmouseover = function () {
    info.style.visibility = "hidden";
}
boxes[7].onmouseover = function () {
    info.style.visibility = "hidden";
}
boxes[8].onmouseover = function () {
    info.style.visibility = "hidden";
}
boxes[9].onmouseover = function () {
    info.style.visibility = "hidden";
}
boxes[17].onmouseover = function () {
    info.style.visibility = "hidden";
}
boxes[16].onmouseover = function () {
    info.style.visibility = "hidden";
}
boxes[15].onmouseover = function () {
    info.style.visibility = "hidden";
}
boxes[23].onmouseover = function () {
    info.style.visibility = "hidden";
}
boxes[25].onmouseover = function () {
    info.style.visibility = "hidden";
}
boxes[26].onmouseover = function () {
    info.style.visibility = "hidden";
}
boxes[4].onmouseover = function () {
    info.style.visibility = "hidden";
}
