const coding=["ja","ruby","java"]

coding.forEach(function (val){
    console.log(val);
})

coding.forEach((item)=>{
    console.log(item);
})

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})


const mycoding=[
    {
        languageName:"Javascript",
        languagefileName:"js"
    },
    {
        languageName:"Java",
        languagefileName:"ja"
    },
    {
        languageName:"Pythin",
        languagefileName:"py"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageName);

})