//HOY

const getTimeSeriesDaily = async () => {
    let request = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&outputsize=full&apikey=PDFYMPZQUJUZ7IV7',
    {
        method : "GET"
    });
    if(request.status===200)
    {
    let datos = await request.json();

    let fechas = datos["Time Series (Daily)"];
    let fechas_aux = Object.keys(fechas);
    let array_dos_fechas = fechas_aux.slice(0,2);

    let hoyStr = array_dos_fechas[0];
    let ayerStr = array_dos_fechas[1];

    console.log(hoyStr);
    console.log(ayerStr);



   addOpenToCard(datos["Time Series (Daily)"][hoyStr]["1. open"], "open");
   addHighToCard(datos["Time Series (Daily)"][hoyStr]["2. high"], "high");
   addLowToCard(datos["Time Series (Daily)"][hoyStr]["3. low"], "low");
   addCloseToCard(datos["Time Series (Daily)"][hoyStr]["4. close"], "close");



        //AYER



            addOpenToCard(datos["Time Series (Daily)"][ayerStr]["1. open"], "openYesterday");
                addHighToCard(datos["Time Series (Daily)"][ayerStr]["2. high"], "highYesterday");
                addLowToCard(datos["Time Series (Daily)"][ayerStr]["3. low"], "lowYesterday");
                addCloseToCard(datos["Time Series (Daily)"][ayerStr]["4. close"], "closeYesterday");

    }};



//MICROSOFT


    const getTimeSeriesDailyMicrosoft = async () => {
        let request = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=full&apikey=PDFYMPZQUJUZ7IV7',
        {
            method : "GET"
        });
        if(request.status===200)
        {

        let datosMicrosoft = await request.json();
        console.log(datosMicrosoft);



     let fechas = datosMicrosoft["Time Series (Daily)"];
         let fechas_aux = Object.keys(fechas);
         let array_dos_fechas = fechas_aux.slice(0,2);

         let hoyStr = array_dos_fechas[0];





        const microsoft_box = document.getElementById("MicrosoftBody");
        const microsoft_open_p = document.createElement("p");
        const microsoft_open_text = document.createTextNode("Open");
        microsoft_open_p.appendChild(microsoft_open_text);
        microsoft_box.appendChild(microsoft_open_p);

        addOpenToCard(datosMicrosoft["Time Series (Daily)"][hoyStr]["1. open"], "MicrosoftBody");

        const microsoft_high_p = document.createElement("p");
        const microsoft_high_text = document.createTextNode("High");
        microsoft_high_p.appendChild(microsoft_high_text);
        microsoft_box.appendChild(microsoft_high_p);

        addHighToCard(datosMicrosoft["Time Series (Daily)"][hoyStr]["2. high"], "MicrosoftBody");

        const microsoft_low_p = document.createElement("p");
        const microsoft_low_text = document.createTextNode("Low");
        microsoft_low_p.appendChild(microsoft_low_text);
        microsoft_box.appendChild(microsoft_low_p);

        addLowToCard(datosMicrosoft["Time Series (Daily)"][hoyStr]["3. low"], "MicrosoftBody");

        const microsoft_close_p = document.createElement("p");
        const microsoft_close_text = document.createTextNode("Close");
        microsoft_close_p.appendChild(microsoft_close_text);
        microsoft_box.appendChild(microsoft_close_p);

        addCloseToCard(datosMicrosoft["Time Series (Daily)"][hoyStr]["4. close"], "MicrosoftBody");

        }};



//SAMSUNG

    const getTimeSeriesDailySamsung = async () => {
        let request = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SSNLF&outputsize=full&apikey=PDFYMPZQUJUZ7IV7',
        {
            method : "GET"
        });
        if(request.status===200)
        {

        let datosSamsung = await request.json();
        console.log(datosSamsung);



   let fechas = datosSamsung["Time Series (Daily)"];
            let fechas_aux = Object.keys(fechas);
            let array_dos_fechas = fechas_aux.slice(0,2);

            let hoyStr = array_dos_fechas[0];



        const samsung_box = document.getElementById("SamsungBody");
        const samsung_open_p = document.createElement("p");
        const samsung_open_text = document.createTextNode("Open");
        samsung_open_p.appendChild(samsung_open_text);
        samsung_box.appendChild(samsung_open_p);

        addOpenToCard(datosSamsung["Time Series (Daily)"][hoyStr]["1. open"], "SamsungBody");

        const samsung_high_p = document.createElement("p");
        const samsung_high_text = document.createTextNode("High");
        samsung_high_p.appendChild(samsung_high_text);
        samsung_box.appendChild(samsung_high_p);

        addHighToCard(datosSamsung["Time Series (Daily)"][hoyStr]["2. high"], "SamsungBody");

        const samsung_low_p = document.createElement("p");
        const samsung_low_text = document.createTextNode("Low");
        samsung_low_p.appendChild(samsung_low_text);
        samsung_box.appendChild(samsung_low_p);

        addLowToCard(datosSamsung["Time Series (Daily)"][hoyStr]["3. low"], "SamsungBody");

        const samsung_close_p = document.createElement("p");
        const samsung_close_text = document.createTextNode("Close");
        samsung_close_p.appendChild(samsung_close_text);
        samsung_box.appendChild(samsung_close_p);

        addCloseToCard(datosSamsung["Time Series (Daily)"][hoyStr]["4. close"], "SamsungBody");

        }};


        //XIAOMI


    const getTimeSeriesDailyXiaomi = async () => {
        let request = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=XIACF&outputsize=full&apikey=PDFYMPZQUJUZ7IV7',
        {
            method : "GET"
        });
        if(request.status===200)
        {

        let datosXiaomi = await request.json();
        console.log(datosXiaomi);



     let fechas = datosXiaomi["Time Series (Daily)"];
              let fechas_aux = Object.keys(fechas);
              let array_dos_fechas = fechas_aux.slice(0,2);

              let hoyStr = array_dos_fechas[0];


        const xiaomi_box = document.getElementById("XiaomiBody");
        const xiaomi_open_p = document.createElement("p");
        const xiaomi_open_text = document.createTextNode("Open");
        xiaomi_open_p.appendChild(xiaomi_open_text);
        xiaomi_box.appendChild(xiaomi_open_p);

        addOpenToCard(datosXiaomi["Time Series (Daily)"][hoyStr]["1. open"], "XiaomiBody");

        const xiaomi_high_p = document.createElement("p");
        const xiaomi_high_text = document.createTextNode("High");
        xiaomi_high_p.appendChild(xiaomi_high_text);
        xiaomi_box.appendChild(xiaomi_high_p);

        addHighToCard(datosXiaomi["Time Series (Daily)"][hoyStr]["2. high"], "XiaomiBody");

        const xiaomi_low_p = document.createElement("p");
        const xiaomi_low_text = document.createTextNode("Low");
        xiaomi_low_p.appendChild(xiaomi_low_text);
        xiaomi_box.appendChild(xiaomi_low_p);

        addLowToCard(datosXiaomi["Time Series (Daily)"][hoyStr]["3. low"], "XiaomiBody");

        const xiaomi_close_p = document.createElement("p");
        const xiaomi_close_text = document.createTextNode("Close");
        xiaomi_close_p.appendChild(xiaomi_close_text);
        xiaomi_box.appendChild(xiaomi_close_p);

        addCloseToCard(datosXiaomi["Time Series (Daily)"][hoyStr]["4. close"], "XiaomiBody");

        }};


        //GOOGLE ALPHABET


            const getTimeSeriesDailyGoogle = async () => {
                let request = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOOG&outputsize=full&apikey=PDFYMPZQUJUZ7IV7',
                {
                    method : "GET"
                });
                if(request.status===200)
                {

                let datosGoogle = await request.json();

                console.log(datosGoogle);




             let fechas = datosGoogle["Time Series (Daily)"];
             let fechas_aux = Object.keys(fechas);
             let array_dos_fechas = fechas_aux.slice(0,2);

             let hoyStr = array_dos_fechas[0];


                const google_box = document.getElementById("GoogleBody");
                const google_open_p = document.createElement("p");
                const google_open_text = document.createTextNode("Open");
                google_open_p.appendChild(google_open_text);
                google_box.appendChild(google_open_p);

                addOpenToCard(datosGoogle["Time Series (Daily)"][hoyStr]["1. open"], "GoogleBody");

                const google_high_p = document.createElement("p");
                const google_high_text = document.createTextNode("High");
                google_high_p.appendChild(google_high_text);
                google_box.appendChild(google_high_p);

                addHighToCard(datosGoogle["Time Series (Daily)"][hoyStr]["2. high"], "GoogleBody");

                const google_low_p = document.createElement("p");
                const google_low_text = document.createTextNode("Low");
                google_low_p.appendChild(google_low_text);
                google_box.appendChild(google_low_p);

                addLowToCard(datosGoogle["Time Series (Daily)"][hoyStr]["3. low"], "GoogleBody");

                const google_close_p = document.createElement("p");
                const google_close_text = document.createTextNode("Close");
                google_close_p.appendChild(google_close_text);
                google_box.appendChild(google_close_p);

                addCloseToCard(datosGoogle["Time Series (Daily)"][hoyStr]["4. close"], "GoogleBody");

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




getTimeSeriesDaily();
getTimeSeriesDailyMicrosoft();
getTimeSeriesDailySamsung();
getTimeSeriesDailyXiaomi();
getTimeSeriesDailyGoogle();


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