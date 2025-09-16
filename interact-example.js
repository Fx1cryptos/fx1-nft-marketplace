// FX1 DIGITAL HUBS - Interactive JavaScript
// Wallet connection and NFT minting functionality

let web3;
let userAccount;
let contract;

// Contract ABI (simplified for demo)
const contractABI = [
    {
        "inputs": [{"internalType": "string", "name": "tokenURI", "type": "string"}],
        "name": "mint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "maxSupply",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }
];

// Contract address from data.json
const CONTRACT_ADDRESS = "0x92fc40720b3159d756ca7abba3b42d0d3607900d";

// Load project data
let projectData;
async function loadProjectData() {
    try {
        const response = await fetch('./data.json');
        projectData = await response.json();
        console.log('✅ Project data loaded:', projectData);
        updateUI();
    } catch (error) {
        console.error('❌ Error loading project data:', error);
    }
}

// Update UI with project data
function updateUI() {
    if (projectData) {
        // Update token info display
        const tokenInfo = document.querySelector('.token-info');
        if (tokenInfo) {
            tokenInfo.innerHTML = `
                <span class="contract-address">${projectData.project.token.contract}</span>
            `;
        }
        
        // Update social links
        updateSocialLinks();
    }
}

// Update social links with data from JSON
function updateSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    const socialData = projectData.project.social;
    
    socialLinks.forEach(link => {
        const text = link.textContent.toLowerCase();
        if (text.includes('website')) link.href = socialData.website;
        if (text.includes('farcaster')) link.href = socialData.farcaster;
        if (text.includes('telegram')) link.href = socialData.telegram;
        if (text.includes('twitter') || text.includes('x (')) link.href = socialData.twitter;
        if (text.includes('discord')) link.href = socialData.discord;
        if (text.includes('tiktok')) link.href = socialData.tiktok;
        if (text.includes('zora')) link.href = socialData.zora;
    });
}

// Wallet connection function
async function connectWallet() {
    try {
        // Check if MetaMask or compatible wallet is installed
        if (typeof window.ethereum !== 'undefined') {
            console.log('🦊 Wallet detected');
            
            // Request account access
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            
            userAccount = accounts[0];
            console.log('✅ Connected account:', userAccount);
            
            // Initialize Web3
            web3 = new Web3(window.ethereum);
            
            // Check if we're on Base network
            await checkNetwork();
            
            // Initialize contract
            contract = new web3.eth.Contract(contractABI, CONTRACT_ADDRESS);
            
            // Update UI
            updateWalletStatus('Connected: ' + userAccount.substring(0, 6) + '...' + userAccount.substring(38));
            
            // Update button text
            const connectBtn = document.querySelector('.btn-primary');
            if (connectBtn) {
                connectBtn.textContent = 'Wallet Connected ✅';
                connectBtn.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
            }
            
        } else {
            alert('Please install MetaMask or a compatible Web3 wallet!');
            window.open('https://metamask.io/', '_blank');
        }
    } catch (error) {
        console.error('❌ Error connecting wallet:', error);
        updateWalletStatus('Connection failed');
    }
}

// Check if user is on Base network
async function checkNetwork() {
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    const baseChainId = '0x2105'; // Base Mainnet chain ID
    
    if (chainId !== baseChainId) {
        try {
            // Try to switch to Base network
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: baseChainId }],
            });
        } catch (switchError) {
            // If Base network is not added, add it
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId: baseChainId,
                            chainName: 'Base',
                            nativeCurrency: {
                                name: 'Ethereum',
                                symbol: 'ETH',
                                decimals: 18,
                            },
                            rpcUrls: ['https://mainnet.base.org'],
                            blockExplorerUrls: ['https://basescan.org'],
                        }],
                    });
                } catch (addError) {
                    console.error('❌ Error adding Base network:', addError);
                }
            }
        }
    }
}

// NFT Minting function
async function mintNFT() {
    if (!userAccount) {
        alert('Please connect your wallet first!');
        return;
    }
    
    try {
        const mintButton = document.getElementById('mintButton');
        mintButton.disabled = true;
        mintButton.innerHTML = '<span class="loading"></span> Minting...';
        
        // Sample metadata URI (in production, this would be uploaded to IPFS)
        const tokenURI = "https://gateway.pinata.cloud/ipfs/sample-metadata-hash";
        
        // Check if free mint is enabled
        const mintPrice = projectData?.project.nft.freeMintEnabled ? "0" : "0.01";
        
        // Call mint function
        const transaction = await contract.methods.mint(tokenURI).send({
            from: userAccount,
            value: web3.utils.toWei(mintPrice, 'ether')
        });
        
        console.log('✅ Mint successful:', transaction.transactionHash);
        alert('🎉 NFT minted successfully!\nTransaction: ' + transaction.transactionHash);
        
        // Update supply info
        await updateSupplyInfo();
        
    } catch (error) {
        console.error('❌ Mint failed:', error);
        alert('❌ Minting failed. Please try again.');
    } finally {
        const mintButton = document.getElementById('mintButton');
        mintButton.disabled = false;
        mintButton.textContent = 'Mint NFT';
    }
}

// Update supply information
async function updateSupplyInfo() {
    try {
        if (contract) {
            const totalSupply = await contract.methods.totalSupply().call();
            const maxSupply = await contract.methods.maxSupply().call();
            
            const mintInfo = document.querySelector('.mint-info');
            if (mintInfo) {
                mintInfo.textContent = `${totalSupply}/${maxSupply} minted • ${projectData?.project.nft.freeMintEnabled ? 'Free mint available' : 'Paid mint only'}`;
            }
        }
    } catch (error) {
        console.error('❌ Error updating supply info:', error);
    }
}

// View collection function
function viewCollection() {
    // Scroll to collection section
    document.getElementById('collection').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Update wallet status display
function updateWalletStatus(message) {
    let statusDiv = document.querySelector('.wallet-status');
    if (!statusDiv) {
        statusDiv = document.createElement('div');
        statusDiv.className = 'wallet-status';
        document.body.appendChild(statusDiv);
    }
    
    statusDiv.textContent = message;
    statusDiv.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
        statusDiv.classList.remove('show');
    }, 3000);
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Load project data
    loadProjectData();
    
    // Add smooth scrolling to nav links
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Add wallet connection listeners
    window.addEventListener('load', async () => {
        // Check if wallet is already connected
        if (typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
                userAccount = accounts[0];
                web3 = new Web3(window.ethereum);
                contract = new web3.eth.Contract(contractABI, CONTRACT_ADDRESS);
                updateWalletStatus('Wallet already connected');
                
                const connectBtn = document.querySelector('.btn-primary');
                if (connectBtn) {
                    connectBtn.textContent = 'Wallet Connected ✅';
                    connectBtn.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
                }
            }
        }
    });
    
    // Listen for account changes
    if (typeof window.ethereum !== 'undefined') {
        window.ethereum.on('accountsChanged', function (accounts) {
            if (accounts.length === 0) {
                userAccount = null;
                updateWalletStatus('Wallet disconnected');
                const connectBtn = document.querySelector('.btn-primary');
                if (connectBtn) {
                    connectBtn.textContent = 'Connect Wallet';
                    connectBtn.style.background = 'linear-gradient(135deg, #4169E1, #FFD700)';
                }
            } else {
                userAccount = accounts[0];
                updateWalletStatus('Account changed: ' + userAccount.substring(0, 6) + '...');
            }
        });
        
        // Listen for network changes
        window.ethereum.on('chainChanged', function (chainId) {
            window.location.reload();
        });
    }
});

// Add Web3 library if not already loaded
if (typeof Web3 === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js';
    document.head.appendChild(script);
}

// Export functions for global access
window.connectWallet = connectWallet;
window.mintNFT = mintNFT;
window.viewCollection = viewCollection;