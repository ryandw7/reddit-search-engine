const urlParser = (...strings) => {
    let target = [];
    let mediaTypes = ['jpg', 'jpeg', 'jpg', 'mp4', 'png'];
    for(const string in strings){
        for(let i = 0; i < mediaTypes.length; i++){
            if(string.includes(mediaTypes[i])){
                target.push(string.split(mediaTypes[i])[0] + mediaTypes[i]);
            }
        }
    }
    console.log(target);
    return target;
}


urlParser('somestring.jpg=fewfwefw', 'somestring.jpg=fewfwefw', 'somestring.jpg=fewfwefw')