window.onload = function() {
    setAge();
}

function setAge() {
    const BIRTH_DATE = '2003-09-09';
    let userIP = '0.0.0.0';

    let aboutMeParagraph = document.getElementById("about-me");
    let actualAge = Math.floor((new Date() - new Date(BIRTH_DATE).getTime()) / 3.15576e+10);

    $.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
        userIP = data['ipAddress'];
    }).then(() => {
        aboutMeParagraph.innerText = 'Hello, ' + userIP + '! My name is Antonio Kasabov and I am currently ' + actualAge + ' years old. I study and work hard, in order to make this world a better place! I am passionate about programming and problem solving in general. I also like watching the news and reading economic journals. In my free time, I try to maintain somewhat of a healthy social life and also watch YouTube :D.';
    });

}