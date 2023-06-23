
function myHome (){
document.getElementById('home').style.display='block';
document.getElementById('story').style.display='none';
document.getElementById('weapons').style.display='none';
document.getElementById('about').style.display='none';
}
function myStory (){
    document.getElementById('home').style.display='none';
    document.getElementById('story').style.display='block';
    document.getElementById('weapons').style.display='none';
    document.getElementById('about').style.display='none';
    }
    function myWeapons (){
        document.getElementById('home').style.display='none';
        document.getElementById('story').style.display='none';
        document.getElementById('weapons').style.display='block';
        document.getElementById('about').style.display='none';
        }
        function myAbout (){
            document.getElementById('home').style.display='none';
            document.getElementById('story').style.display='none';
            document.getElementById('weapons').style.display='none';
            document.getElementById('about').style.display='block';
            }
            function home() {
                var links = 'https://upload.wikimedia.org/wikipedia/en/6/68/Bloodborne_Cover_Wallpaper.jpg';
                var name = 'Bloodborne';
                var newImage = document.createElement('img');
                newImage.src= links;
                newImage.atl=name;
                var newId = document.getElementsByClassName('image')[0];
                newId.appendChild(newImage);
              }
              
              window.onload = home;