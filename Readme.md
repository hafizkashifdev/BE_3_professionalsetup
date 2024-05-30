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


lacture No  9

Custom api response and error handling | chai aur backend

app.j mn ja ky express import kr ky app bnaty hen

async jb bhi complete hota hy to ye 1 promise return krta hy to us ky bad hamm .then or catc handle karen gy 

is ky bad request.params and request.body and request.cookies
npm js py ja ky package install krna hy cookie-parser or corss 

jbb bhi hamm middleware ya configration seetting krni hy to hamm app.use use krty hen 

is ky bad best and security pratice use krni hen data be sy bht sari form mn aata hy koi body mn bejhy ga koi json mn bejhy ga koi data mn to ham limit lagaeeyy gy 

1 OR USE KRNA HY MULTER IS SEEY HAMM FILE uploading configer krty hen ye 3rd part package hy 
is ky bad static configer karen gy agr ham ny kuxh file access dena caheey to jessey img or fav icon etc
is ky bad cookie-parser is ka kaam hy ye ky merey dserver sey user ky browser ko access kr paoon or us ko use kr sakoo is ko srf serf hi use krta hy 

is ky bad url ki configration karen gy 


is ky bad middlewear pr jaeen gy 

middle

req.get
agr ham koi url hit karen gy like instagram 
req,resres.send("kashif)
agr ham chk krna caheey ky agr koi url ko access krta hy to hamm chk krna cahtt y hen ky user login hy ya ni is ko middle wear krty hen 
app admin ho ya ni 

yaha 4 element hoty (err,req,res,next)
next 1 flag hy ky jab ye wala bnda apna kaam kr ley ga to next kr do

abb utils mn ja ky 1 file bnaeen gy asyncHandler ye 1 method bnaeey ga or us ko export kr dey ga 

higher order function wo function jo function ko as a parameter bhi accept krty hen  ya or us ko return kr dety hen

api ka error or response ko bhi standaries kr den gy
seratch krna hy node js api error 

assignment this.data field mn kia hota hy 
ApiResponse.js ki 1 or file bnaeen gy 

api server ky status code hoty hen ye jo status code hen na agr is ky ander informationals cod ehen na wo 100-199
successfull response 200 -299
is trqah ky ye error code or resppose code hoty hen jo ky set hen ya krny hoty henn

is ky bad haam middlewears bnaeen gy

Lacture 10 
User and video model with hooks and JWT

ham model bnaeen gy or us ky bad 1 package usee karen gy jo ky agreagation query use krny key ley  npm install mongoose-aggregate-paginate-v2
 ye plugin ki trah inject hota hy 
 1 or bcrypt js  ye nod eki library hy it help to hash password malab encrypt and decrypt
 baqi 1 or hy jwt jo ky json web token hoty hen 

 bcrypt or jwt ki dirct incrption possible ni hy so is lwy hameen mongose kiy kuxh hook ki help leni parti hy 
 like pre  ye 1 middleweare hy jo ye krta hy ky jessey hi koi data save honey ja raha ho us se pehley pass incript kr do 


jwt 1 bareer token hy mean jo us ko data bejhta hy ye us ko data bejh data hy 


lac 11

file upload 

3rd part yservices
aws pr upload kr do

file uload ko seerate utility function ya middlewear bnaia jaeey ye har jaga kaam aata hy is ley hamm isey as a middlewear inject kr dety hen 
common services cloudinary

multer or expreess file uload same hen 
hame multer karen gy 
cloudinary.js file bnani hy 

LAC 14# 

Logic building | Register controller



