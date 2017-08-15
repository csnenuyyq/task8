"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("数字转编码1", function(){

        var result = main.changeText('95711');
        var expect_string = '||:|:::|:|:|:::|:::||:::|||:::||';
        
        expect(expect_string).to.equal(result);
    });
     it("数字转编码2", function(){

        var result = main.changeText('95719');
        var expect_string = '||:|:::|:|:|:::|:::|||:|::|:|::|';
        
        expect(expect_string).to.equal(result);
    });
     it("数字转编码3", function(){

        var result = main.changeText('99913');
        var expect_string = '||:|::|:|::|:|:::::||::||:|:|::|';
        
        expect(expect_string).to.equal(result);
    });
     it("数字转编码4", function(){

        var result = main.changeText('95713');
        var expect_string = '||:|:::|:|:|:::|:::||::||::|:|:|';
        
        expect(expect_string).to.equal(result);
    });

    it("编码转数字1", function(){

   
        var result = main.changeNumber('||:|:::|:|:|:::|:::||::||::|:|:|');
        var expect_string = '95713';

        expect(expect_string).to.equal(result);
    });
       it("编码转数字2", function(){

   
        var result = main.changeNumber('||:|:::|:|:|:::|:::||::||::|:|:|');
        var expect_string = '95713';

        expect(expect_string).to.equal(result);
    });
       it("编码转数字3", function(){

   
        var result = main.changeNumber('||:|:::|:|:|:::|:::||::||::|:|:|');
        var expect_string = '95713';

        expect(expect_string).to.equal(result);
    });
       it("编码转数字4", function(){

   
        var result = main.changeNumber('||:|:::|:|:|:::|:::||::||::|:|:|');
        var expect_string = '95713';

        expect(expect_string).to.equal(result);
    });
});