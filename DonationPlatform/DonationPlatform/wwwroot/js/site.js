// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function MyAction() {
    console.log("JS CALL");
}

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
        
        return MyIdoContract;
    }
    catch (error) {
        console.log("error " + error);
    }
}

async function donateToProject(number) {

    var contract = await getContract();
    var accounts = await web3.eth.getAccounts();

    let donateCallToContract = await contract.methods.fundProject(number).send({ from: accounts[0], value: 10000000000000000 })
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