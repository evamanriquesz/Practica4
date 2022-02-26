


//HOY
let entries =[];
const getEOD = async () => {
    let request = await fetch('http://api.marketstack.com/v1/eod/latest?access_key=73bf99300bafa82067df8c9874f9f885&symbols=AAPL',
    {
        method : "GET"
    });
    if(request.status===200)
    {
    let datos = await request.json();
    console.log(datos);
    entries=datos;

    addOpenToCard(entries.data[0].open, "open");
    addHighToCard(entries.data[0].high, "high");
    addLowToCard(entries.data[0].low, "low");
    addCloseToCard(entries.data[0].close, "close");

    }};

    //AYER

    const tiempoTranscurrido = Date.now();
    const dia_ms = 2*24*60*60*1000;
    const tiempoTranscurridoAyer = tiempoTranscurrido - dia_ms;
    const ayer = new Date(tiempoTranscurridoAyer);
    //const ayerStr = ayer.toISOString();



    const ayerStr =ayer.getFullYear() + "-"+(ayer.getMonth()+1)+"-"+ayer.getDate();


    console.log(ayerStr);

   let entriesYesterday=[];

    const getEODAyer = async () => {
        let request = await fetch('http://api.marketstack.com/v1/eod/'+ayerStr+'T00:00:00+0000?access_key=73bf99300bafa82067df8c9874f9f885&symbols=AAPL',
        {
            method : "GET"
        });
        if(request.status===200)
        {

        let datosYesterday = await request.json();

        console.log(datosYesterday);
        entriesYesterday=datosYesterday;

        addOpenToCard(entriesYesterday.data[0].open, "openYesterday");
        addHighToCard(entriesYesterday.data[0].high, "highYesterday");
        addLowToCard(entriesYesterday.data[0].low, "lowYesterday");
        addCloseToCard(entriesYesterday.data[0].close, "closeYesterday");

        }};

//MICROSOFT

   let entriesMicrosoft=[];
    const getEODMicrosoft = async () => {
        let request = await fetch('http://api.marketstack.com/v1/eod/latest?access_key=73bf99300bafa82067df8c9874f9f885&symbols=MSFT',
        {
            method : "GET"
        });
        if(request.status===200)
        {

        let datosMicrosoft = await request.json();
        console.log(datosMicrosoft);
        entriesMicrosoft=datosMicrosoft;

        const microsoft_box = document.getElementById("MicrosoftBody");
        const microsoft_open_p = document.createElement("p");
        const microsoft_open_text = document.createTextNode("Open");
        microsoft_open_p.appendChild(microsoft_open_text);
        microsoft_box.appendChild(microsoft_open_p);

        addOpenToCard(entriesMicrosoft.data[0].open, "MicrosoftBody");

        const microsoft_high_p = document.createElement("p");
        const microsoft_high_text = document.createTextNode("High");
        microsoft_high_p.appendChild(microsoft_high_text);
        microsoft_box.appendChild(microsoft_high_p);

        addHighToCard(entriesMicrosoft.data[0].high, "MicrosoftBody");

        const microsoft_low_p = document.createElement("p");
        const microsoft_low_text = document.createTextNode("Low");
        microsoft_low_p.appendChild(microsoft_low_text);
        microsoft_box.appendChild(microsoft_low_p);

        addLowToCard(entriesMicrosoft.data[0].low, "MicrosoftBody");

        const microsoft_close_p = document.createElement("p");
        const microsoft_close_text = document.createTextNode("Close");
        microsoft_close_p.appendChild(microsoft_close_text);
        microsoft_box.appendChild(microsoft_close_p);

        addCloseToCard(entriesMicrosoft.data[0].close, "MicrosoftBody");

        }};



//SAMSUNG

   let entriesSamsung=[];
    const getEODSamsung = async () => {
        let request = await fetch('http://api.marketstack.com/v1/eod/latest?access_key=73bf99300bafa82067df8c9874f9f885&symbols=SSNLF',
        {
            method : "GET"
        });
        if(request.status===200)
        {

        let datosSamsung = await request.json();
        console.log(datosSamsung);
        entriesSamsung=datosSamsung;

        const samsung_box = document.getElementById("SamsungBody");
        const samsung_open_p = document.createElement("p");
        const samsung_open_text = document.createTextNode("Open");
        samsung_open_p.appendChild(samsung_open_text);
        samsung_box.appendChild(samsung_open_p);

        addOpenToCard(entriesSamsung.data[0].open, "SamsungBody");

        const samsung_high_p = document.createElement("p");
        const samsung_high_text = document.createTextNode("High");
        samsung_high_p.appendChild(samsung_high_text);
        samsung_box.appendChild(samsung_high_p);

        addHighToCard(entriesSamsung.data[0].high, "SamsungBody");

        const samsung_low_p = document.createElement("p");
        const samsung_low_text = document.createTextNode("Low");
        samsung_low_p.appendChild(samsung_low_text);
        samsung_box.appendChild(samsung_low_p);

        addLowToCard(entriesSamsung.data[0].low, "SamsungBody");

        const samsung_close_p = document.createElement("p");
        const samsung_close_text = document.createTextNode("Close");
        samsung_close_p.appendChild(samsung_close_text);
        samsung_box.appendChild(samsung_close_p);

        addCloseToCard(entriesSamsung.data[0].close, "SamsungBody");

        }};


        //XIAOMI


   let entriesXiaomi=[];
    const getEODXiaomi = async () => {
        let request = await fetch('http://api.marketstack.com/v1/eod/latest?access_key=73bf99300bafa82067df8c9874f9f885&symbols=XIACF',
        {
            method : "GET"
        });
        if(request.status===200)
        {

        let datosXiaomi = await request.json();
        console.log(datosXiaomi);
        entriesXiaomi=datosXiaomi;

        const xiaomi_box = document.getElementById("XiaomiBody");
        const xiaomi_open_p = document.createElement("p");
        const xiaomi_open_text = document.createTextNode("Open");
        xiaomi_open_p.appendChild(xiaomi_open_text);
        xiaomi_box.appendChild(xiaomi_open_p);

        addOpenToCard(entriesXiaomi.data[0].open, "XiaomiBody");

        const xiaomi_high_p = document.createElement("p");
        const xiaomi_high_text = document.createTextNode("High");
        xiaomi_high_p.appendChild(xiaomi_high_text);
        xiaomi_box.appendChild(xiaomi_high_p);

        addHighToCard(entriesXiaomi.data[0].high, "XiaomiBody");

        const xiaomi_low_p = document.createElement("p");
        const xiaomi_low_text = document.createTextNode("Low");
        xiaomi_low_p.appendChild(xiaomi_low_text);
        xiaomi_box.appendChild(xiaomi_low_p);

        addLowToCard(entriesXiaomi.data[0].low, "XiaomiBody");

        const xiaomi_close_p = document.createElement("p");
        const xiaomi_close_text = document.createTextNode("Close");
        xiaomi_close_p.appendChild(xiaomi_close_text);
        xiaomi_box.appendChild(xiaomi_close_p);

        addCloseToCard(entriesXiaomi.data[0].close, "XiaomiBody");

        }};


        //GOOGLE ALPHABET


           let entriesGoogle=[];
            const getEODGoogle = async () => {
                let request = await fetch('http://api.marketstack.com/v1/eod/latest?access_key=73bf99300bafa82067df8c9874f9f885&symbols=GOOG',
                {
                    method : "GET"
                });
                if(request.status===200)
                {

                let datosGoogle = await request.json();
                console.log(datosGoogle);
                entriesGoogle=datosGoogle;

                const google_box = document.getElementById("GoogleBody");
                const google_open_p = document.createElement("p");
                const google_open_text = document.createTextNode("Open");
                google_open_p.appendChild(google_open_text);
                google_box.appendChild(google_open_p);

                addOpenToCard(entriesGoogle.data[0].open, "GoogleBody");

                const google_high_p = document.createElement("p");
                const google_high_text = document.createTextNode("High");
                google_high_p.appendChild(google_high_text);
                google_box.appendChild(google_high_p);

                addHighToCard(entriesGoogle.data[0].high, "GoogleBody");

                const google_low_p = document.createElement("p");
                const google_low_text = document.createTextNode("Low");
                google_low_p.appendChild(google_low_text);
                google_box.appendChild(google_low_p);

                addLowToCard(entriesGoogle.data[0].low, "GoogleBody");

                const google_close_p = document.createElement("p");
                const google_close_text = document.createTextNode("Close");
                google_close_p.appendChild(google_close_text);
                google_box.appendChild(google_close_p);

                addCloseToCard(entriesGoogle.data[0].close, "GoogleBody");

                }};


    const addOpenToCard = (value, id) => {
        console.log(value);
        //con JQuery
       const newValue='<p id="'+id+'" class="valores">'+value+'</p>';
        $("#"+id).append(newValue);

        /*
       const open_box = document.getElementById("open");
       const open_p = document.createElement("p");
       const open_text = document.createTextNode(value);
       open_p.appendChild(open_text);
       open_box.appendChild(open_p);
       */

    };

    const addHighToCard = (value, id) => {
            console.log(value);
            //con JQuery
            const newValue='<p  id="'+id+'" class="valores">'+value+'</p>';
            $("#"+id).append(newValue);

           /*
           const high_box = document.getElementById("high");
           const high_p = document.createElement("p");
           const high_text = document.createTextNode(value);
           high_p.appendChild(high_text);
           high_box.appendChild(high_p);
           */

        };

   const addLowToCard = (value, id) => {
           console.log(value);
           //con JQuery
          const newValue='<p  id="'+id+'" class="valores">'+value+'</p>';
           $("#" +id).append(newValue);

          /*
          const low_box = document.getElementById("low");
          const low_p = document.createElement("p");
          const low_text = document.createTextNode(value);
          low_p.appendChild(low_text);
          low_box.appendChild(low_p);
        */

       };


  const addCloseToCard = (value, id) => {
          console.log(value);
          //con JQuery
          const newValue='<p  id="'+id+'" class="valores">'+value+'</p>';
          $("#"+id).append(newValue);

        /*
         const close_box = document.getElementById("close");
         const close_p = document.createElement("p");
         const close_text = document.createTextNode(value);
         close_p.appendChild(close_text);
         close_box.appendChild(close_p);
         */

      };




getEOD();
getEODAyer();
getEODMicrosoft();
getEODSamsung();
getEODXiaomi();
getEODGoogle();



let accederInstagram = () => {
    window.open("https://www.instagram.com/apple/","_blank");
}


let  accederTwitter = () => {
    window.open("https://twitter.com/apple","_blank");
}

let accederFacebook = () => {
    window.open("https://www.facebook.com/apple/","_blank");
}



function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },5); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
  });

}