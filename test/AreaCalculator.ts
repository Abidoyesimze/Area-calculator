import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre,{ethers} from "hardhat"; 

describe("Area calculator", function(){

  async function deployAreaCalculator(){

    const [owner , otheraccounts] = await hre.ethers.getSigners();

    const AreaofCalculator = await ethers.getContractFactory("AreaCalculator");
    const areaofCalculator = await AreaofCalculator.deploy();

    return {owner , otheraccounts , areaofCalculator }

  }

  describe("Area of Triangle" , function(){

    it("should calculate area of triangle" , async function(){
      
        const { areaofCalculator } = await loadFixture(deployAreaCalculator);

        const baselength =10;
        const height = 5;
        
        await areaofCalculator.square(baselength , height);
        expect( await areaofCalculator.areaTriangle()).to.equal(2);
    })
  })

  describe ("Area of Rectangle" , function(){
    it("should calculate area of rectangle", async function(){
       
      const { areaofCalculator  } = await loadFixture(deployAreaCalculator);

      const length = 2;
      const width = 6;

      await areaofCalculator.triangle(length , width)/2  ;

      expect( await areaofCalculator.areaRectangle()).to.equal(3);
    })
  })

  describe("Area of square", function(){
    it("should calculate area of square" , async function () {
      
      const{areaofCalculator}  = await loadFixture(deployAreaCalculator);

      const side1 = 3;
      const side2 = 3;

      await areaofCalculator.rectangle(side1 , side2);
      expect(await areaofCalculator.areaSquare()).to.equal(1);
      
    })
  })

})