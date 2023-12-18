document.getElementById("add_button").addEventListener("click", () => onclickAdd());
const hairetu = [];//リストを添え字で持ってくるための配列を作る 

// input text
const onclickAdd = () => {
    if (!document.getElementById("add_text").value == "") {

        const inputText = document.getElementById("add_text").value;
        document.getElementById("add_text").value = "";

        const li = document.createElement("li");
        const div = document.createElement("div");
        const ptag = document.createElement("p");

        div.classList = "list_box";

        li.appendChild(div);
        div.appendChild(ptag);
        ptag.innerHTML = inputText;
        document.getElementById("list").appendChild(li);
        hairetu.push(inputText);
    }
}
//lottery_button 
// 文章を追加するボタンとリストをシャッフルして表示するボタンは構造上分かれているので別で書く必要あり
document.getElementById("lottery_button").addEventListener("click", () => onclickLottery());
const onclickLottery = () => {
    const last = hairetu.length;
    // let num = Math.floor(Math.random() * ((MAX値 + 1) - MIN値) + MIN値);←最大値と最小値を決めてランダム
    let num = Math.floor(Math.random() * ((last + 1) - 1) + 1);

    console.log(hairetu[num - 1]);

    const lotterytarget = document.getElementById("result_box");
    const h1 = document.createElement("h1");
    h1.innerHTML = hairetu[num - 1];

    lotterytarget.appendChild(h1);
    document.getElementById("list").textContent = null;
    document.getElementById("lottery_button").disabled = true;
    document.getElementById("lottery_button").style.backgroundColor = "gray";
    const onemore = document.getElementById("onemore");
    const onemoreButton = document.createElement("button");
    onemoreButton.innerHTML = "もう1回";
    onemoreButton.classList.add ("onemorebutton");
    onemore.appendChild(onemoreButton);
    onemoreButton.addEventListener("click", function(){
        window.location.reload();
        })
}
/// エンターキー押したら
document.addEventListener('DOMContentLoaded', pageLoad)

// /* ページをロードした時にテキストボックスにリスナを登録 */
function pageLoad() {
    var add_text1 = document.getElementById('add_text');
    add_text1.addEventListener('keydown', enterKeyPress);
}

// /* テキストボックスでEnterキーが押されたらコンソールに文字を表示 */
function enterKeyPress(event) {
    if (event.key === 'Enter') {
        return onclickAdd();
    }
}
