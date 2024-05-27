chai or backend 

lacture 7 
professional setup

create public folder create temp file create .gitkeep

create .git ignore file  go to git ignore genatorator onlin ecopy node js

create .env file  asal mn envirment variable system sey uthhaeyy jaty hen 
.env.sampl create ki hy jo .env mn ho ga wo .env.sample men rakhha jaeey ga 
nodemon =>  install nodemon jbb app ki file save hoti hy ye server ko restart kr deta hy 

ye file ko relod kr deta hy 

npm install -D nodemon


abb 5 folder create karenn gey 
 mkdir sey hamm bna skty hen 
1- controllers major functionality yaha ho gi
2- db data base connect kessey krna hy      data base ka connection logic yaha likha jata hy 
3- middlewears koi jo code app ko inbetween run krana hy app kyopaass 1 request aii is pehley ky u ko server fullfill karey us sey pehley hi darmian mn men kuxh chicking lagana cahtaa hn to wo hamm middlewears ky andar krty hen suppose  1 request aii to men darmeian mn 1 middlewears laga db ga app ki cockies mujhy do takey mn pta krn ky app us information ko leney key ley authrized ho ya ni ho 
4- models 
5- routes 
6- utills ye shortcut hy utilities ka jbb ham kaam karen gy to hameen bht sari utility lageey gy like file upload mailing and token lena etc jbb bhi kisi ko cahhey ho gi wo idghr sey ley ley ga 

nodemon bht zeyada intersiting chz hy isi trah ka 1 or plugin hota hy jo ky prettier hy is ley team ko same page pr rakhney key ley ham prettier ko install karen gy  so isi ley is s ko insta;ll karen gy and is ki setting bhi krni hoti hy jo ky imp hy

jb prettier install ho jaeey to kuxh filess ka setup krna partaa hy

file name jo bnani hy .prettierrc
{
    "singleQuote": false,
    "bracketSpacing": true,
    "tabWidth": 2,
    "semi": true,
    "trailingComma": "es5"
} 

1 or bnai hy jo ky .prettierignore 
or ye add krna hy 
/.vcode
**/.git
**/.svn
**/.hg
*.env
.env
.env.*
./dist
/node_modules


// Lacture 8    How to connect database in MERN with debugging 

go to mongoDB Atlas 

Account bnana hy 

new project bnana hy project owner 
free wala data base chose krna hy 
ip adreess set krna hota hy 

.env mn apni db string rakhni hy 
us ky bad constant mn apni db ko name dena hy 

us key bad dotenv mongoose express install krny hen 



sab sey pehley mongoose ko i krna hy  karen grey q  ky ye hi hy jo db ko connect krta hy

kahanii 

jab bhi db connect krna hy hy to try catch mn rap krna parta hy 
data base is always in another 
jb bhi bat kro gy because time lagta hy so aysnc await lagana hy and try catch mn wrap krna hy 
then iffi consept ko use krna hy (async()={
    try{
       
    }
     catch{
            
        }
})()
effi ko start krny sey pehley ; laga dia jata hy to ye ; laga dia jata hy ye srf cleaing ky use kisa jata hy 


ye bnaeen gy import mongoose from "mongoose";
import { DB_NAME } from "./constants";

(async()=>{
    try{
await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`

)
app.on("error"),(error)=>{
    console.log(error,"error ");
throw error
}
app.listen(process.env.PORT,()=>{
    console.log(`App is listing on Port ${process.env.PORT}`);
})}
    catch(error){
console.log(error,"error ");
throw error
    }
})()


then next aproach use kareen gy
ham alag sey file len gy db folder mn waha connection bnaeen and firh ussey index file mn import kr den gy 
db ky ander jaeen gy 
exist 1 or exit 0 ko read krna hy 

connectionInstanse host krna hy taqey pta rahhy agr galti sey kisi or host oppy cahla gia to pta rahyy ky kaha gey hen

important bat for dot env
as early as possible in your application , import and configure dotenv

q key hamm cahtty h en ky hamarey envirnoment variable sab sey pehleey load ho jaeen
