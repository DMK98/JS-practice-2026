// document.write(new Date().getFullYear())
// console.log(document);
// document.write("Manish")
/*setTimeout(()=>{
    document.write("Hello overwrite")
},1000
)*/

// document.body;      //node, object
// document.images;    // nodelist
// document.title="lorem"

// console.log(document.getElementById("f1"));
// console.log(document.getElementsByTagName("p")[0]);
// console.log(document.getElementsByClassName("container"));
// console.log(document.querySelector(".container"));
// console.log(document.querySelector("#f1"));
// console.log(document.querySelector("p"));

// console.log(document.querySelector("footer p"));
// console.log(document.querySelector("footer p:last-child"));
// console.log(document.querySelectorAll("p"));
/*const p = document.querySelectorAll("p");
  console.log(p[0]);
  console.log(p);
  console.log(p.length);
  p.forEach((e)=>{
          console.log(e);                
  })*/
const h1 = document.querySelectorAll("h1");
const heading1 = document.querySelector("h1");
//    console.log(h1.textContent);
//    console.log(heading1.textContent);
//    console.log(heading1.innerHTML);
// heading1.textContent="document object model";
heading1.innerHTML = "<u>document object model</u>";
// console.log(document.querySelector("ol"));
document.querySelector("ol").innerHTML = "<li>list item 1</li>";
document.querySelector("ol").innerHTML += "<li>list item 2</li>";
const cont = document.querySelector(".container");
// console.log(cont);
// console.log(cont.childNodes[0]);
// console.log(cont.children[0]);
// console.log(cont.firstElementChild);
// console.log(cont.lastElementChild);
const x = document.contact.username;
// console.log(x.value);
// console.log(x.type);
// console.log(document.contact.chk);        
let t = document.contact.chk;
t.checked = true;
// console.log(t);
//       console.log(cont.id);
//       console.log(cont.getAttribute("id"));
//       console.log(cont.className);
//       console.log(cont.classList);
//       console.log(cont.classList.add("c2"));
//       cont.classList.toggle("d1")
//      console.log( document.querySelector("img").src);     
//       console.log(document.querySelector("img").getAttribute("src"));
// console.log(document.querySelector("img").width);
// t.setAttribute('disabled','')
document.querySelector("main ol").innerHTML += '<li>List item A </li>';
/*document.querySelector("main").innerHTML+="<ul>
                <li>item 1</li>
                <li>item 1</li>
                <li>item 1</li>
                <li>item 1</li>
            </ul>";*/



/*const ul=document.createElement("ul");
ul.innerHTML+="<li>item I</li><li>item II</li>             <li>item III</li><li>XXXX IV</li>";
document.querySelector("footer").appendChild(ul);
// document.querySelector("footer").prepend(ul);*/
let header = document.querySelector("head")
// document.querySelector("img").style.display="none";
// header.style.fontSize="80PX; color:red";
// console.log(h1);
/*document.querySelector("img").onclick = function () {
        this.animate(
                [
                        { marginLeft: "10px" },
                        { marginLeft: "100px" }
                ],
                1000
        );
};*/
document.querySelector("img").onclick = function () {
    this.animate(
        [
            { marginLeft: "10px" },
            { marginLeft: "100px" }
        ],
        {
            duration: 1000
        }
    );
};






