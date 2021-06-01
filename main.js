let person = document.forms['person'];

let getId = x => document.getElementById(x);
let sel = y => document.querySelector(y)

button.addEventListener('click', function(){
      let name = person.name.value;
      let sname = person.sname.value;
      let email = person.email.value;
      sel('.name2').innerHTML = name;
      sel('.sname2').innerHTML = sname;
      sel('.boxEmail').innerHTML = email;
      person.reset();
})

position.sel.addEventListener('click', function(){
      sel('.boxPosition').innerHTML = this.value;
      position.reset();
})

let point = document.forms['point'];

for(let i=0; i<point.elements.length; i++){
      console.log(point.elements[i]);
      point.elements[i].addEventListener('click', function(){
            console.log(`${this.url(value)}`);
            sel('.image').style.background = `${this.url(value)}`;
      })
}

sel('.box2').style.display = 'none';
sel('.image').style.display = 'none';
sel('.greenTop').style.display = 'none';
sel('.boxName').style.display = 'none';
sel('.name2').style.display = 'none';
sel('.sname2').style.display = 'none';
sel('.boxEmail').style.display = 'none';
sel('.boxPosition').style.display = 'none';
sel('.boxButton').style.display = 'none';
sel('.button2').style.display = 'none';
sel('.greenBottom2').style.display = 'none';


getId('move').onclick = function(event){
      sel('.box2').style.display = 'block';
      sel('.image').style.display = 'block';
      sel('.greenTop').style.display = 'block';
      sel('.boxName').style.display = 'flex';
      sel('.name2').style.display = 'flex';
      sel('.sname2').style.display = 'flex';
      sel('.boxEmail').style.display = 'flex';
      sel('.boxPosition').style.display = 'flex';
      sel('.boxButton').style.display = 'flex';
      sel('.button2').style.display = 'block';
      sel('.greenBottom2').style.display = 'block';

      sel('.box').style.display = 'none';
      sel('.green').style.display = 'none';
      sel('.person').style.display = 'none';
      sel('.name').style.display = 'none';
      sel('.sname').style.display = 'none';
      sel('.email').style.display = 'none';
      sel('.point').style.display = 'none';
      sel('.position').style.display = 'none';
      sel('.checkbox').style.display = 'none';
      sel('.button').style.display = 'none';
      sel('.buttonPerson').style.display = 'none';

      getId('signOut').onclick = function(event){
            sel('.box').style.display = 'block';
            sel('.green').style.display = 'flex';
            sel('.person').style.display = 'block';
            sel('.name').style.display = 'block';
            sel('.sname').style.display = 'block';
            sel('.email').style.display = 'block';
            sel('.point').style.display = 'flex';
            sel('.position').style.display = 'block';
            sel('.checkbox').style.display = 'block';
            sel('.button').style.display = 'block';
            sel('.buttonPerson').style.display = 'block';

            sel('.box2').style.display = 'none';
            sel('.image').style.display = 'none';
            sel('.greenTop').style.display = 'none';
            sel('.boxName').style.display = 'none';
            sel('.name2').style.display = 'none';
            sel('.sname2').style.display = 'none';
            sel('.boxEmail').style.display = 'none';
            sel('.boxPosition').style.display = 'none';
            sel('.boxButton').style.display = 'none';
            sel('.button2').style.display = 'none';
            sel('.greenBottom2').style.display = 'none';
      }
}