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

    it("Should transfer tokens between account", async function (){
        const [owner,addr1,addr2] = await ethers.getSigners();

        const Token = await ethers.getContractFactory("Token"); // instance contract

        const hardhatToken = await Token.deploy(); // deployed

        await hardhatToken.transfer(addr1.address, 10);
        expect(await hardhatToken.balanceOf(addr1.address)).to.equal(10);

        await hardhatToken.connect(addr1).transfer(addr2.address, 5);
        expect(await hardhatToken.balanceOf(addr2.address)).to.equal(5);
    });
});