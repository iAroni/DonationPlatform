// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function MyAction() {
    console.log("JS CALL");
}

const abi = [
    {
        'anonymous': false,
        'inputs': [
            {
                'components': [
                    {
                        'internalType': 'address',
                        'name': 'donator',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'amount',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'projectAddress',
                        'type': 'address'
                    }
                ],
                'indexed': false,
                'internalType': 'struct Dochaintion.Donation',
                'name': 'donation',
                'type': 'tuple'
            }
        ],
        'name': 'donationMade',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'internalType': 'address',
                'name': 'founder',
                'type': 'address'
            },
            {
                'components': [
                    {
                        'internalType': 'uint256',
                        'name': 'projectId',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'projectAddress',
                        'type': 'address'
                    },
                    {
                        'internalType': 'string',
                        'name': 'name',
                        'type': 'string'
                    },
                    {
                        'internalType': 'string',
                        'name': 'description',
                        'type': 'string'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'totalDonation',
                        'type': 'uint256'
                    }
                ],
                'indexed': false,
                'internalType': 'struct Dochaintion.Project',
                'name': 'madeProject',
                'type': 'tuple'
            }
        ],
        'name': 'projectMade',
        'type': 'event'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '_projectAddress',
                'type': 'address'
            },
            {
                'internalType': 'string',
                'name': '_name',
                'type': 'string'
            },
            {
                'internalType': 'string',
                'name': '_description',
                'type': 'string'
            }
        ],
        'name': 'makeProject',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'uint256',
                'name': 'chosenProjectId',
                'type': 'uint256'
            }
        ],
        'name': 'fundProject',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function',
        'payable': true
    },
    {
        'inputs': [],
        'name': 'getAllProjects',
        'outputs': [
            {
                'components': [
                    {
                        'internalType': 'uint256',
                        'name': 'projectId',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'projectAddress',
                        'type': 'address'
                    },
                    {
                        'internalType': 'string',
                        'name': 'name',
                        'type': 'string'
                    },
                    {
                        'internalType': 'string',
                        'name': 'description',
                        'type': 'string'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'totalDonation',
                        'type': 'uint256'
                    }
                ],
                'internalType': 'struct Dochaintion.Project[]',
                'name': '',
                'type': 'tuple[]'
            }
        ],
        'stateMutability': 'view',
        'type': 'function',
        'constant': true
    },
    {
        'inputs': [],
        'name': 'getAllDonations',
        'outputs': [
            {
                'components': [
                    {
                        'internalType': 'address',
                        'name': 'donator',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'amount',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'projectAddress',
                        'type': 'address'
                    }
                ],
                'internalType': 'struct Dochaintion.Donation[]',
                'name': '',
                'type': 'tuple[]'
            }
        ],
        'stateMutability': 'view',
        'type': 'function',
        'constant': true
    }
]

async function ethEnabled() {
    console.log('eth');
    if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        return true;
    }
    return false;
}

async function getContract() {

    await ethEnabled();
    var web3 = window.web3;

    try {

        var MyIdoContract = new web3.eth.Contract(
            DoChaintion.abi,
            DoChaintion.networks[4].address
        );

        /*var MyIdoContract = new web3.eth.Contract(
            abi,
            "0xC1Fb9DC8e518F51e8DcaED744DB43E7487204870"
        );*/
        
        return MyIdoContract;
    }
    catch (error) {
        console.log("error " + error);
    }
}

async function donateToProject(number) {

    var contract = await getContract();
    var accounts = await web3.eth.getAccounts();

    let donateCallToContract = await contract.methods.fundProject(number).send({ from: accounts[0] })
        .then(result => { return result })
        .catch(err => console.log(err));
    console.log(donateCallToContract);

    console.log("donated to " + number);
} 

async function makeDonateProject() {
    var contract = await getContract();
    var accounts = await web3.eth.getAccounts();

    console.log(contract);

    let makeProjectCall = await contract.methods.makeProject(accounts[0], "testation", "test project", "This is a test donation")
        .send({ from: accounts[0] })
        .then(result => { return result })
        .catch(err => console.log(err));

    console.log(makeProjectCall);
}

async function getAllProjectsOfContract() {
    var contract = await getContract();
    var accounts = await web3.eth.getAccounts();

    let makeProjectCall = await contract.methods.getAllProjects()
        .call()
        .then(result => { return result })
        .catch(err => console.log(err));

    console.log(makeProjectCall);
}