const apiKey = "f74642ac6ecdfefd73965f57b36c72ad";

function putData(valuue) {
  var valuue = document.getElementsByClassName("input")[0].value;
  return valuue;
}

const search = document.getElementsByClassName("find")[0];

search.addEventListener("click", function main(a) {
  const inputVal = putData();

  console.log(a);
  if (inputVal != 0) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        show(data);
      })
      .catch((err) => {
        alert("please write valid city");
      });
  } else {
    alert("please write something");
  }
});

function show(data) {
  console.log(data);
  document.getElementsByClassName("wind")[0].innerHTML =
    data.wind.speed + "km/h";
  document.getElementsByClassName("hmidity")[0].innerHTML =
    data.main.humidity + "%";
  document.getElementsByClassName("temp")[0].innerHTML =
    data.main.temp + "&degC";
  document.getElementsByClassName("min")[0].innerHTML =
    data.main.temp_min + "&degC";
  document.getElementsByClassName("max")[0].innerHTML =
    data.main.temp_max + "&degC";
  document.getElementsByClassName("name")[0].innerHTML = data.name;
  document.getElementsByClassName("hz")[0].innerHTML =
    data.weather[0].description;

  const icon = data.weather[0].icon;

  const a = "https://openweathermap.org/img/wn/";
  const c = "@2x.png";
  const d = a + icon + c;

  document.getElementsByClassName(
    "img"
  )[0].style = `background-image:url('${d}');background-position :center;  background-repeat: no-repeat;background-size: cover;`;

  document.getElementsByClassName("cntrr")[0].innerHTML = data.sys.country;

  if (data.weather[0].description == "haze") {
    document.getElementsByClassName("background")[0].style =
      "background-image:url('http://cen.acs.org/content/dam/cen/99/web/2/WEB/20210208lnp2-delhifog.jpg');background-position :center;  background-repeat: no-repeat;background-size: cover;";
  } else if (data.weather[0].description == "snow") {
    document.getElementsByClassName("background")[0].style =
      "background-image:url('https://www.lovethispic.com/uploaded_images/144088-Light-Falling-Snow.gif');background-position :center;  background-repeat: no-repeat;background-size: cover;";
  } else if (data.weather[0].description == "clear sky") {
    document.getElementsByClassName("background")[0].style =
      "background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUfvkkeHgWWQ6ZxjVDSLxidDopfrOm7HzYIGjhvoK4&s');background-position :center;  background-repeat: no-repeat;background-size: cover;";
  } else if (data.weather[0].description == "few clouds") {
    document.getElementsByClassName("background")[0].style =
      "background-image:url('https://media.istockphoto.com/id/184103864/photo/clouds-on-sky.jpg?s=612x612&w=0&k=20&c=3JGI13B8xwZIObLtl8IN1VFtPErHv2pKiWV0tTuemsI=');background-position :center;  background-repeat: no-repeat;background-size: cover;";
  } else if (data.weather[0].description == "scattered clouds") {
    document.getElementsByClassName("background")[0].style =
      "background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGhzzxI3s6yJYE0Po6B0FTmj7cUI1XHm9vX73CMJfI&s');background-position :center;  background-repeat: no-repeat;background-size: cover;";
  } else if (data.weather[0].description == "Clouds") {
    document.getElementsByClassName("background")[0].style =
      "background-image:url('https://media.istockphoto.com/id/184103864/photo/clouds-on-sky.jpg?s=612x612&w=0&k=20&c=3JGI13B8xwZIObLtl8IN1VFtPErHv2pKiWV0tTuemsI=');background-position :center;  background-repeat: no-repeat;background-size: cover;";
  } else if (data.weather[0].description == "broken clouds") {
    document.getElementsByClassName("background")[0].style =
      "background-image:url('https://drscdn.500px.org/photo/207699803/m%3D900/17924413051b7334ab34b58a534a476e');background-position :center;  background-repeat: no-repeat;background-size: cover;";
  } else if (data.weather[0].description == "shower rain") {
    document.getElementsByClassName("background")[0].style =
      "background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBaAfaaQLhYj7QPYOv1Twwl0xk35cCIPCd15XTxSoJg&s');background-position :center;  background-repeat: no-repeat;background-size: cover;";
  } else if (data.weather[0].description == "rain") {
    document.getElementsByClassName("background")[0].style =
      "background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQOxBQMUF6i080NlzTJo9omZmX-JjF4qHPl6iqKUh&s');background-position :center;  background-repeat: no-repeat;background-size: cover;";
  } else if (data.weather[0].description == "thunderstorm") {
    document.getElementsByClassName("background")[0].style =
      "background-image:url('https://t3.ftcdn.net/jpg/03/26/19/12/360_F_326191234_Q12utSZ0vmxV6tKQXogktU7e3dmZ2JLI.jpg');background-position :center;  background-repeat: no-repeat;background-size: cover;";
  } else if (data.weather[0].description == "snow") {
    document.getElementsByClassName("background")[0].style =
      "background-image:url('https://media.istockphoto.com/id/533292615/photo/alley-in-snowy-morning.jpg?s=612x612&w=0&k=20&c=LKQgMoqdgHP5PkelvEMdwXhCMG_M1XhGoFT27-Hjrk4=');background-position :center;  background-repeat: no-repeat;background-size: cover;";
  } else if (data.weather[0].description == "mist") {
    document.getElementsByClassName("background")[0].style =
      "background-image:url('https://www.shutterstock.com/image-photo/fog-above-pine-forests-misty-260nw-1562396869.jpg');background-position :center;  background-repeat: no-repeat;background-size: cover;";
  } else {
    document.getElementsByClassName("background")[0].style =
      "background-image:url('https://cdn.pixabay.com/photo/2016/03/27/07/32/clouds-1282314__340.jpg');background-position:center background-repeat: no-repeat;background-size: cover;";
  }
}

const pokhari = document.getElementsByClassName("pok")[0];
const rudr = document.getElementsByClassName("rudr")[0];
const dehradun = document.getElementsByClassName("deh")[0];
const delhi = document.getElementsByClassName("del")[0];

// pokhari.addEventListener('click', () => {
//     const inputVal = 'pokhri'
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
//     fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//             show(data)
//         })
//         .catch((err) => {
//             alert('please write valid city')
//         })
// })
pokhari.addEventListener("click", load);

rudr.addEventListener("click", () => {
  const inputVal = "rudraprayag";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      show(data);
    })
    .catch((err) => {
      alert("please write valid city");
    });
});

dehradun.addEventListener("click", () => {
  const inputVal = "dehradun";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      show(data);
    })
    .catch((err) => {
      alert("please write valid city");
    });
});

delhi.addEventListener("click", () => {
  const inputVal = "delhi";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      show(data);
    })
    .catch((err) => {
      alert("please write valid city");
    });
});

function load() {
  const inputVal = "pokhri";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      show(data);
    })
    .catch((err) => {
      alert("please write valid city");
    });
}

// let btnn=document.getElementsByClassName('showw')[0]
// btnn.addEventListener('click',()=>{
//     // if(document.getElementsByTagName('*').style=='color:gray'){

//         document.getElementsByClassName('background')[0].style="color:white"
//        console.log('ji')

//     // }
//         // else{
//             // document.getElementsByTagName('*').style='color:gray'
//         // }
// })
