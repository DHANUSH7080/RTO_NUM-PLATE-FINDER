const inputEl=document.querySelector('input');


async function getJSONData()
{
    const response =await fetch('../assets/js/json/data.json');
    return await response.json();    
}



const searchRecord= async (value)=>{
    console.log('i have got this value',value.toUpperCase());

     const jsonData=await getJSONData();

     const iGotThis = jsonData.find((record) => {

       return record.code === value || value.toUpperCase().startsWith(record.code);
        //console.log(record.code ,value.toUpperCase());
     });

     const resultEl=document.querySelector('#result');
     if(iGotThis)
     {

        resultEl.classList.remove('hidden') ;

        resultEl.querySelector('#query').innerText = value.toUpperCase();
        resultEl.querySelector('#rto_id').innerText = iGotThis.id;
        resultEl.querySelector('#rto_code').innerText = iGotThis.code;
        resultEl.querySelector('#rto_loc').innerText = iGotThis.location;
        resultEl.querySelector('#rto_type').innerText = iGotThis.type;
        resultEl.querySelector('#rto_dis').innerText = iGotThis.district;



     }
     else
     {
       
        resultEl.classList.add('hidden') 
     }
     console.log(iGotThis);

};

inputEl.addEventListener('keyup',(e) => {

if(e.key === 'Enter')
{
   if(inputEl.value.length > 3)
   {
    searchRecord(inputEl.value)
        //console.log('Enter pressed,check this');
   }
 
}

    
    //console.log('i have ',e);
})