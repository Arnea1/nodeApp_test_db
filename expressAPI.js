// express API : https://expressjs.com/ko/4x/api.html
// http METHOD : https://developer.mozilla.org/ko/docs/Web/HTTP/Methods

const express = require('express');

const app = express();

// express object
// express Router 객체를 생성
// Router의 기능 사용가능
//const router = express.Router();
//router.all();
//router.param();      // deprecated 4.11
//router.route();       // 동일 url에 대해 METHOD 차이별 처리분기
//router.use();

// route METHOD
//router.get();
//router.post();
//router.put();
//router.delete();

// express middleware 등록
//app.use()

// express request middleware
// node가 request를 어떤형식으로 처리할것인지에대한 방식을 결정하는 미들웨어
//app.use(express.json());        // over 4.16
//app.use(express.raw());         // over 4.17
//app.use(express.text());        // over 4.17
//app.use(express.urlencoded());  // over 4.16

// express middleware
//app.use(express.static());      // base

// express Application variable
//app.set();
//app.get();
//app.enable();
//app.enabled();
//app.disable();
//app.disabled();

// express open host
//app.listen();

// response
//app.render()

//Request
//app
//baseUrl
//body      // 요청본체
//cookies
//fresh
//hostname  // 사용주소
//ip        // 요청 아이피
//ips
//method    // 요청 방식
//accepts() // 특정 요청타입이 아니면 406에러


//Response
//headersSent   // 응답이 보내졌는지 여부
//append()      // 응답 헤더에 값 추가
//attachment()  // 응답헤더의 Content-Disposition에 추가
//cookie()      // 응답헤더의 쿠키 추가
//download()    // 파일로 다운로드?
//end()         // 응답을 끝냄
//format()      // 포맷별로 응답을 다르게 하고싶을때
//json()        // json Obejct형태로 응답을 보냄
//link()        // link로 응답
//location()    // location으로 이동
//redirect()    // 해당 주소로 재요청
//render()      //
//send()        //
//sendFile()    //
//sendStatus()
//status()
//type()


app.listen(port, () => { console.log("PORT 열림") });

app.get('/', (req, res) =>
{
    res.send("get request");
});