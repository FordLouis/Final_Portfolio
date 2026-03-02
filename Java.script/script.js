 let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');
 let sections = document.querySelectorAll('section');
 let navlink = document.querySelectorAll('header nav');

 
 window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetHeight;
        let id = sec.getAttribute;

        if(top >= offset && top < offset + height){
            navlist.forEach(link => { 
                links.classlist.remove('active');
                document.querySelector('header nav a  [href*=' = id + ' ]').classlist.add
            ('active')
            })

        }
    })
 }

 menuIcon.onclick=()=> {
    menuIcon.classList.toggle('bx-x');
    Navbar.classList.toggle('active');
 }

 <script>
  const cards = document.querySelectorAll('.education-card');
  cards.forEach(card => {
    card.addEventListener('mousemove' , function(e) {
      let x = e.clientX - card.getBoundingClientReact().left;
      let y = e.clientY - card.getBoundingClientReact().top;

      card.style.setProperty('--x' , x + 'px');
      card.style.setProperty('--y' , y + 'px');
    });
  });
</script>