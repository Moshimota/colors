let a = prompt("Son tanlang :\n1.qizil\n2.yashil\n3.sariq\n4.ko'k\n5.qora")
b = Math.random()
d = 0
c = ""
e = ""
if (a == 3){
    e = "siz sariqni tanladiz"
}else if(a == 1){
    e = "siz qizilni tanladiz"
}else if (a == 2) {
    e = "siz yashilni tanladiz"
}else if(a==4){
    e = "siz ko'kni tanladiz"
}else if(a==5){
    e = "siz qorani tanladiz"
}
else if(e!=1&&e!=2&&e!=3&&e!=4&&e!=5){
    e = "raqam tanlang 1, 2, 3, 4 va 5"
}
if(b<=0.2){
    b = 1
    c = "komp qizilni tanladi"
}else if(b<=0.4){
    b = 2
    c = "komp yashilnini tanladi"
}else if(b<=0.6){
    b = 3
    c = "komp sariqni tanladi"
}else if(b<=0.8){
    b = 4
    c = "komp ko'kni tanladi"
}else{
    c = "komp qorani tanladi"
}
function Jojo(k,l){
    if (k=="siz qizilni tanladiz") {
        if (l=="komp qizilni tanladi") {
            return "Yutingiz"
        }else{
            return "Yutqazdiz"
        }
    }else if (k=="siz yashilni tanladiz") {
        if (l=="komp yashilnini tanladi") {
            return "Yutingiz"
        }else{
            return "Yutqazdiz"
        }
    }else if (k=="siz sariqni tanladiz") {
        if (l=="komp sariqni tanladi") {
            return "Yutingiz"
        }else{
            return "Yutqazdiz"
        }
    }else if (k=="siz ko'kni tanladiz") {
        if (l=="komp ko'kni tanladi") {
            return "Yutingiz"
        }else{
            return "Yutqazdiz"
        }
    }else if (k=="siz qorani tanladiz") {
        if (l=="komp qorani tanladi") {
            return "Yutingiz"
        }else{
            return "Yutqazdiz"
        }
    }
    else{
        return "Mazgi bomadi"
    }
}
g = Jojo(e,c)
alert(e+"\n"+c+"\n"+g)