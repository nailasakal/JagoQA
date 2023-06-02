// const chai = require('chai');
// var expect = chai.expect;

// // Silakan tambah function describe lain atau langsung tambahkan it didalam describe dibawah ini, tambahkan 3 it untuk membandingkan 3 value
// // silakan belajar tipe data js disini https://www.w3schools.com/js/js_datatypes.asp
// // silakan copas seluruh code disini dan uji code kalian ke https://codepen.io/barruawd/pen/WNyNrbp

// // to.deep.equal, untuk membandingkan 2 Object/List
// // to.equal, untuk membandingkan 2 Value Sama 
// // not.to.equal, untuk membandingkan 2 Value Berbeda 

// // describe('Belajar Membandingkan 2 Value', function() {
// //   it('Verify 2 Value is equal', function() {
// //     expect('Jago QA').to.equal('Jago QA');
// //   });
// //   it('Verify 2 Numbers (Integer vs Integer) is equal', function() {
// //     expect(102).to.equal(102);
// //   });
// //   it('Verify 2 Object is equal', function() {
// //     expect({'nama':'Jago QA'}).to.deep.equal({'nama':'Jago QA'});
// //   });
// //   it('Verify 2 Value is not equal', function() {
// //     expect('Jago qa').not.to.equal('Jago QA');
// //   });
// // });


// describe('Latihan Membandingkan 2 Value', function() {
//   it('Verify 2 Value is equal', function() {
//     expect('honda').to.equal('honda');
//   });
//   it('Verify 2 Object is equal', function() {
//     expect({'pasword':'tekan'}).to.deep.equal({'pasword':'tekan'});
//   });
//   it('Verify 2 Value is not equal', function() {
//     expect(123).not.to.equal(567);
//   });
// });


const request_barru = require("supertest")("http://barru.pythonanywhere.com"); //url atau endpoint yang dituju
const expect = require("chai").expect; //import library chai untuk validasi
describe("POST User Info", function () { //deskripsikan function untuk test scenario
 it("Success Login with valid email and password", async function () { //test case
 const response = await request_barru //await untuk menunggu request endpoint hingga sukses
 .post("/login") //tipe http request
 .send({ email: "jokotampan900@gmail.com", password: "jokotampan900" });//data yang dikirim

 //expect untuk validasi respon
 expect(response.body.status).to.eql('SUCCESS_LOGIN');
 expect(response.body.data).to.eql('Welcome dika intan');
 expect(response.body.message).to.eql('Anda Berhasil Login');
 expect(response.body).to.include.keys("data", "message", "status");
 });

 
 it("Failed to login when password is empty ", async function () { //test case
  const response = await request_barru //await untuk menunggu request endpoint hingga sukses
  .post("/login") //tipe http request
  .send({ email: "jokotampan900@gmail.com", password: "  " });//data yang dikirim
 
  //expect untuk validasi respon
  expect(response.body.status).to.eql('FAILED_LOGIN');
  expect(response.body.data).to.eql("User's not found");
  expect(response.body.message).to.eql('Email atau Password Anda Salah');
  expect(response.body).to.include.keys("data", "message", "status");
  });


 it("failed to login when email is empty", async function () { //test case
    const response = await request_barru //await untuk menunggu request endpoint hingga sukses
    .post("/login") //tipe http request
    .send({ email: "   ", password: "jokotampan900" });//data yang dikirim
   
    //expect untuk validasi respon
    expect(response.body.status).to.eql('FAILED_LOGIN');
    expect(response.body.data).to.eql("Email tidak valid");
    expect(response.body.message).to.eql('Cek kembali email anda');
    expect(response.body).to.include.keys("data", "message", "status");
    });


it("failed to login when the password is wrong ", async function () { //test case
  const response = await request_barru //await untuk menunggu request endpoint hingga sukses
  .post("/login") //tipe http request
  .send({ email: "jokotam", password: "jokotampan900" });//data yang dikirim
 
  //expect untuk validasi respon
  expect(response.body.status).to.eql('FAILED_LOGIN');
  expect(response.body.data).to.eql("Email tidak valid");
  expect(response.body.message).to.eql('Cek kembali email anda');
  expect(response.body).to.include.keys("data", "message", "status");
  });

});