const { expect } = require("chai");

describe("Token contract", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function (){
        const [owner] = await ethers.getSigners();

        console.log("Signed Object: ", owner);
        const Token = await ethers.getContractFactory("Token"); // instance contract

        const hardhatToken = await Token.deploy(); // deployed

        const ownerBalance = await hardhatToken.balanceOf(owner.address); // owner balance = 1000

        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
        // total balance = 1000
    });
});