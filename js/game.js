//类的声明方式
class Game{
    constructor(){
        this.screen="";
        this.life="";
		this.point="";
		this.start="";
		this.letterBox=[];
        //存储该字符的字符，top  left,节点
		this.letterWidth="0.53";
		this.t="";
		this.btn=document.querySelectorAll(".btn");
		this.zhezhao=""
		this.gameOver=""
		this.btn2=""
		this.bgMusic=""
		this.c=""
		this.audio1=""
		this.audio2=""
    }
    init(){
    	//初始化
        this.screen="";
        this.life="";
        this.point="";
        this.start="";
        this.letterBox=[];


    }


    //设置下落字母数
    createLetter( num=1 ){
    	//创建字符
    	//1.保存到数据中
    	//2.插入到页面中
		//字母重复重叠
    	for(let i=0;i<num;i++){
    		let obj={};
    		let name="";
    		do{
    			let as=Math.floor(Math.random()*26+65);
    			name=String.fromCharCode(as);
    		}while(this.isExit(name));
    		let div=document.createElement("div");
    		div.className="letter";
    		div.style.backgroundImage=`url("img/A_Z/${name}.png")`;
    		let top=0.9;
    		div.style.top=top+"rem";
    		let left="";
    		do{
    			left=Math.random()*5.7+0.6;
    		}while(this.isRepeat(left));
    		//判断是否重叠
    		div.style.left=left+"rem";
    		this.screen.appendChild(div);
    		//保存数据
    		obj.name=name;
    		obj.left=left;
    		obj.top=top;
    		obj.node=div;
    		this.letterBox.push(obj);
            // console.log(this.letterBox);
        }
    }


    //去重
    isExit(name){
    	//判断数组中是否有重复的字符
    	for(let item of this.letterBox){
    		if (name==item.name) {
    			return true;
    		}
    	}
        return false;
    }
    isRepeat(left){
    	for(let item of this.letterBox){
            // Math.abs()绝对值
            if ( Math.abs(left-item.left)<this.letterWidth ) {
    			return true;
    		}
    	}
        return false;
    }




    //字母下落
    run(){

    	//生命值，点击字母消失
        let sm=10;
    	//let that=this;//因为function函数下的this指向的是window，因此要定义一个that来保存this。箭头函数则不用，箭头函数的this指向上下文的this
    	this.t=setInterval(()=>{
			this.letterBox.forEach((item,index)=>{
				item.top+=0.1;
                if (item.top>=7.94) {
                	--sm;
                	this.screen.removeChild(item.node);
					this.letterBox.splice(index,1);//删除信息
					this.createLetter();
					this.life.innerText=sm;
					if (sm<=0) {
						this.zhezhao.style.display="block";
						this.gameOver.innerText=dfNum;
						clearInterval(this.t);
					}
                }
				item.node.style.top=item.top+"rem";
            })
        },200)

		//键盘事件，得分
        let dfNum = 0
        this.btn.forEach((item,index)=>{
            //箭头函数
            item.ontouchstart=( (item)=> {
                //选择目标事件源
                item.target.style.transform="scale(0.8)";
                this.audio2.pause();
                this.letterBox.forEach( (e,index)=> {
                    if (item.target.innerText==e.name){
                        ++dfNum;
                        this.screen.removeChild(e.node);
                        this.letterBox.splice(index,1)
                        this.createLetter();
                        //得分
                        this.point.innerText=dfNum;
                    }
                })
                // console.log(this.point.innerText);
            })
            item.ontouchend=function (item) {
                item.target.style.transform="scale(1)";
            }
        })

		//点击赞听
        this.c.onclick = ()=> {
            if (this.c.className=="c") {
                this.c.classList.add("zt");
                clearInterval(this.t)
            }else {
                this.c.classList.remove("zt");
                this.t=setInterval(()=>{
                    this.letterBox.forEach((item,index)=>{
                        item.top+=0.1;
                        if (item.top>=7.94) {
                            --sm;
                            this.screen.removeChild(item.node);
                            this.letterBox.splice(index,1);//删除信息
                            this.createLetter();
                            this.life.innerText=sm;
                            if (sm<=0) {
                                this.zhezhao.style.display="block";
                                this.gameOver.innerText=dfNum;
                                clearInterval(this.t);
                            }
                        }
                        item.node.style.top=item.top+"rem";
                    })
                },200)
            }
        }


        //背景音乐开关
        this.bgMusic.onclick = ()=> {
            if (this.bgMusic.className=="bgMusic") {
                this.bgMusic.classList.add("bgMusic_guan");
                this.audio1.pause();
                this.audio2.pause();
            }else {
                this.bgMusic.classList.remove("bgMusic_guan")
                this.audio1.play();
                this.audio2.play();
            }
        }



	}

}