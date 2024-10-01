// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract AreaCalculator{
    function areaTriangle(uint baselength, uint height) public pure returns(uint){
      uint area = (baselength * height) / 2;
      return area;
    }

    function areaRectangle(uint length, uint width) public pure returns(uint){
        uint area = length * width;
        return area;
    }

    function areaSquare (uint side) public pure returns (uint){
        uint area = side * side;
        return area;
    }
} 