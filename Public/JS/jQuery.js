$(function(){
    setInterval(function(){
        $(".slideshow ul").animate({marginLeft:-350},800,function(){
            $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
        })
    }, 3500);
    $(".container .fleche_droite ").click(function(){
        if (courant<=self.nbEtapes){
            courant++;
            $(".container .slider ").animate({left:-courant*saut},800);
        }
    });

    $(".container .fleche_gauche ").click(function(){
        if (courant>0){
            courant--;
            $(".container .slider ").animate({left:-courant*saut},800);
        }
    });
});