class ShortCuts{
    constructor(){
        this.option = "";
    }
    create(option,width=0,height=0){
        this.option = option;
        if(this.option == "video"){
            this.item = createCapture(VIDEO);
            return this.item;
        }
        else if(this.option == "video_capture"){
            this.item = createCapture(VIDEO).size(width,height);
            return this.item;
        }
        else if(this.option == "canvas"){
            this.item = createCanvas(width, height);
            return this.item;
        }else{
            console.error("ERROR! Insert a proper value")
        }
    }
}