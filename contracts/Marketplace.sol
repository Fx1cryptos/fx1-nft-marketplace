// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Marketplace {
    struct Listing {
        address seller;
        address nft;
        uint256 tokenId;
        uint256 price;
        bool active;
    }

    mapping(uint256 => Listing) public listings;
    uint256 public listingCount;

    function listNFT(address nft, uint256 tokenId, uint256 price) external {
        IERC721(nft).transferFrom(msg.sender, address(this), tokenId);

        listingCount++;
        listings[listingCount] = Listing(msg.sender, nft, tokenId, price, true);
    }

    function buyNFT(uint256 listingId) external payable {
        Listing storage item = listings[listingId];
        require(item.active, "Listing not active");
        require(msg.value >= item.price, "Not enough ETH/Base");

        item.active = false;
        IERC721(item.nft).transferFrom(address(this), msg.sender, item.tokenId);
        payable(item.seller).transfer(msg.value);
    }
}
