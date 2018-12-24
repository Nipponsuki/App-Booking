let indexLink = document.querySelector('#index-link');
let flightLink = document.querySelector('#flight-link');
let carLink = document.querySelector('#car-link');
let toursLink = document.querySelector('#tours-link');

let linkArr = [indexLink, flightLink,carLink, toursLink];

linkArr.forEach((eachLink)=>{
  eachLink.addEventListener('click', ()=>{
    switch(eachLink){
      case indexLink:
        fetchPage(eachLink, 'index.html');
        brake;
      case flightLink:
        fetchPage(eachLink, 'flight.html');
        brake;
      case carLink:
        fetchPage(eachLink, 'car.html');
        brake;
      case toursLink:
        fetchPage(eachLink, 'tours.html');
        brake;
    }
  })
})

function fetchPage(link, page){
  let baseURL = `${window.location.protocol}//${window.location.hostname}`;
  if (window.location.port) {
    baseURL += `:${window.location.port}`;
  }

  fetch(`${baseURL}/${page}`)
    .then((response) => {
      return response.text()
    })
    .then((html) =>{
      let doc = new DOMParser().parseFromString(html, 'text/html');

      anime({
        targets: '.flight-view',
        translateX: 700,
        opacity: 0,
        easing: 'easeInExpo',
        duration: 700,
        complete: (anim) => {
          document.querySelector('.section-wrapper').remove();
        },
      })

      setTimeout(function(){
        document.querySelector('body').insertBefore(doc.querySelector('.flight-view'),document.querySelector('.side-nav'))

        anime({
          targets: '.flight-view',
          translateX: [-600,0],
          delay:(el,i) => 100* i,
          opacity: [0,1],
          easing: 'easeOutExpo'
        })
      }, 700);
    })
}
