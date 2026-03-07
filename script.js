let noClicks = 0;

const greetings = {
  "Айзере": `<p><strong>Дорогая Айзере!</strong> 🌷</p>
<p>Пусть этот день принесёт тебе море вдохновения и радости!
Твоя любовь к фото и видео делает мир ярче, а стремление учиться и развиваться в Корее обязательно принесёт успех.</p>
<p>Желаю, чтобы каждый момент был таким же красивым, как твои творческие работы! 💖</p>`,

  "Аружан": `<p><strong>Дорогая Аружан!</strong> 🌸</p>
<p>Спасибо тебе за твою заботу, терпение и умение держать группу в порядке!</p>
<p>Пусть 8 марта подарит тебе улыбки, тепло и радость, а каждый день будет таким же вдохновляющим и светлым, как твоя энергия и лидерство! 💕</p>`,

  "Маржан": `<p><strong>Дорогая Маржан!</strong> 🌺</p>
<p>Пусть твой дух приключений и любовь к новым впечатлениям всегда ведут к ярким моментам!</p>
<p>8 марта желаю тебе радости, смеха и красивых событий, а каждый новый день приносит столько же эмоций, сколько дарят тебе путешествия и твоя смелость открывать мир! ✨</p>`,

  "Жанел": `<p><strong>Дорогая Жанел!</strong> 💖</p>
<p>Пусть твоя энергия, креатив и активность сияют ещё ярче!</p>
<p>8 марта желаю тебе море радости, вдохновения и лайков не только в соцсетях, но и в жизни.</p>
<p>Пусть каждый день будет таким же ярким, как твои идеи и улыбка! 🌷</p>`
};

// открыть страницу с выбором девушки
function openInvite(){
  document.getElementById("notification").style.display="none";
  document.getElementById("girls").style.display="block";
}

// выбор девушки
function selectGirl(name, photo) {
  document.getElementById("girls").style.display = "none";
  document.getElementById("invite").style.display = "block";
  document.getElementById("selectedPhoto").src = photo;
  document.getElementById("greeting").innerHTML = greetings[name];
}

// кнопки
const yes = document.getElementById("yes");
const no = document.getElementById("no");

yes.onclick = function(){
  document.getElementById("invite").style.display="none";
  document.getElementById("final").style.display="block";
};

no.onclick = function(){
  noClicks++;
  let yesSize = 18 + noClicks*10;
  let noSize = 18 - noClicks*2;

  yes.style.fontSize = yesSize+"px";
  if(noSize > 8){
    no.style.fontSize = noSize+"px";
  }

  moveNoButton();
};

// функция движения кнопки "НЕТ"
function moveNoButton(){
  const maxX = window.innerWidth - no.offsetWidth - 20;
  const maxY = window.innerHeight - no.offsetHeight - 20;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  no.style.position = "absolute";
  no.style.left = x + "px";
  no.style.top = y + "px";
}