// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FX1NFT is ERC721URIStorage, Ownable {
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public mintPrice;
    bool public freeMintEnabled;

    constructor(
        string memory name,
        string memory symbol,
        uint256 _maxSupply,
        uint256 _mintPrice,
        bool _freeMintEnabled
    ) ERC721(name, symbol) {
        maxSupply = _maxSupply;
        mintPrice = _mintPrice;
        freeMintEnabled = _freeMintEnabled;
    }

    function mint(string memory tokenURI) public payable {
        require(totalSupply < maxSupply, "Max supply reached");

        if (!freeMintEnabled) {
            require(msg.value >= mintPrice, "Insufficient ETH/Base sent");
        }

        uint256 tokenId = totalSupply + 1;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);

        totalSupply++;
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
