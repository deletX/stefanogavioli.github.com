function slugify(string) {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return string.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
}


$(document).ready(function () {
    if (window.location.href.split("/")[3] === "curriculum") {
        for (let i = 0; i < skillsprofessionali.length; ++i) {
            let id = "#" + slugify(skillsprofessionali[i]["name"]);
            // console.log(id);
            // var tmpBar = new ldBar(id);
            $(id).waypoint(function () {
                // console.log(id);
                let bar = $(id)[0].ldBar;
                bar.set(skillsprofessionali[i]["value"]);
                this.destroy()
            }, {offset: '99%'});
        }

        for (let i = 0; i < skillspersonali.length; ++i) {
            let id = "#" + slugify(skillspersonali[i]["name"]);
            // console.log(id);
            // var tmpBar = new ldBar(id);
            $(id).waypoint(function () {
                // console.log(id);
                let bar = $(id)[0].ldBar;
                bar.set(skillspersonali[i]["value"]);
                this.destroy()
            }, {offset: '99%'});
        }
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });


    M.AutoInit();

});