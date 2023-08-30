const toText=document.querySelector(".to-text")
const fromText=document.querySelector(".from-text")
const selectTag =document.querySelectorAll("select")
const translateBtn=document.querySelector("button")
const exchangeIcon=document.querySelector(".exchange")

selectTag.forEach((tag,id)=>{
    for(const country_code in countries){
        let selected;
        if(id==0 && country_code=="en-ZA"){
            selected="selected"
        }else if(id==1 && country_code=="nso-ZA"){
            selected="selected"
        }
        console.log(countries[country_code]);
        let option=`<option value="${country_code}">${countries[country_code]}</option>`
        tag.insertAdjacentHTML("beforeend",option)

    }
});
exchangeIcon.addEventListener("click",()=>{
    let tempText=fromText.value;
    tempLang=selectTag[0].value;
    fromText.value=toText.value;
    toText.value=tempText;
    selectTag[0].value=selectTag[1].value
    toText.value=tempText;
    selectTag[1].value=tempLang
})
translateBtn.addEventListener("click",()=>{
    let text=fromText.value,
    translateFrom=selectTag[0].value,
    translateTo=selectTag[1].value;
    console.log(text,translateFrom,translateTo)
    let apiUrl=`https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl).then(res=>res.json()).then(data=>{
        console.log(data);
        toText.value=data.responseData.translatedText;
    })
})
